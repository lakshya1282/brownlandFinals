import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AOSProvider } from '@/components/aos-provider';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | Brownland Coffee Blog`,
        description: post.description,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

// Simple markdown to HTML converter
function parseMarkdown(content: string): string {
    let html = content;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-[#683419] mt-8 mb-4" style="font-family: var(--font-playfair), serif">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-[#683419] mt-10 mb-5" style="font-family: var(--font-playfair), serif">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-bold text-[#683419] mt-8 mb-6" style="font-family: var(--font-playfair), serif">$1</h1>');

    // Bold and Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#683419]">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#8B4513] hover:text-[#683419] underline underline-offset-2">$1</a>');

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr class="my-10 border-t border-[#683419]/20" />');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-[#683419] pl-4 my-4 italic text-[#683419]/80">$1</blockquote>');

    // Tables (basic support)
    html = html.replace(/^\|(.*)\|$/gim, (match, content) => {
        const cells = content.split('|').map((cell: string) => cell.trim());
        const isHeader = cells.some((cell: string) => cell.match(/^-+$/));
        if (isHeader) return '';
        const cellTag = 'td';
        const cellsHtml = cells.map((cell: string) => `<${cellTag} class="border border-[#683419]/20 px-4 py-2">${cell}</${cellTag}>`).join('');
        return `<tr>${cellsHtml}</tr>`;
    });

    // Wrap tables
    html = html.replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border-collapse my-6 text-sm">$&</table>');

    // Lists
    html = html.replace(/^\- \[ \] (.*$)/gim, '<li class="flex items-start gap-2 mb-2"><span class="text-[#683419]/40">☐</span><span>$1</span></li>');
    html = html.replace(/^\- \[x\] (.*$)/gim, '<li class="flex items-start gap-2 mb-2"><span class="text-green-600">☑</span><span>$1</span></li>');
    html = html.replace(/^\- (.*$)/gim, '<li class="mb-2 ml-4 list-disc text-[#683419]/80">$1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="mb-2 ml-4 list-decimal text-[#683419]/80">$1</li>');

    // Wrap lists
    html = html.replace(/(<li class="mb-2 ml-4 list-disc.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>');
    html = html.replace(/(<li class="mb-2 ml-4 list-decimal.*<\/li>\n?)+/g, '<ol class="my-4 space-y-1">$&</ol>');

    // Paragraphs
    html = html.replace(/^(?!<[a-z])(.*[a-zA-Z].*)$/gim, '<p class="text-[#683419]/80 leading-relaxed mb-4" style="font-family: var(--font-montserrat), sans-serif">$1</p>');

    return html;
}

// Extract FAQ for schema
function extractFAQ(content: string): Array<{ question: string, answer: string }> {
    const faqSection = content.match(/## FAQ[\s\S]*?(?=##|$)/i);
    if (!faqSection) return [];

    const faqs: Array<{ question: string, answer: string }> = [];
    const regex = /### (.*?)\n\n([\s\S]*?)(?=###|$)/g;
    let match;

    while ((match = regex.exec(faqSection[0])) !== null) {
        faqs.push({
            question: match[1].trim(),
            answer: match[2].trim().replace(/\n/g, ' '),
        });
    }

    return faqs;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const faqs = extractFAQ(post.content);
    const htmlContent = parseMarkdown(post.content);

    // Schema.org structured data
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        datePublished: post.date,
        dateModified: post.date,
        publisher: {
            '@type': 'Organization',
            name: 'Brownland Coffee',
            logo: {
                '@type': 'ImageObject',
                url: 'https://brownlandcoffee.com/BL-LOGO.png',
            },
        },
    };

    const faqSchema = faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    } : null;

    return (
        <AOSProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <main className="min-h-screen bg-[#F6EEE5]">
                <Navbar />
                <div className="pt-20"> {/* Add padding for fixed navbar */}
                    <section className="pb-16 pt-8">
                        <article className="w-[90%] max-w-4xl mx-auto">
                            {/* Breadcrumb */}
                            <nav className="mb-8">
                                <Link
                                    href="/blog"
                                    className="text-sm text-[#683419]/60 hover:text-[#683419] transition-colors"
                                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                                >
                                    ← Back to Blog
                                </Link>
                            </nav>

                            {/* Header */}
                            <header className="mb-12">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs uppercase tracking-wider text-[#683419]/60 bg-[#683419]/5 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h1
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#683419] mb-6 leading-tight"
                                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                                >
                                    {post.title}
                                </h1>

                                {/* Meta */}
                                <div
                                    className="flex items-center gap-4 text-sm text-[#683419]/60"
                                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                                >
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                            </header>

                            {/* Content */}
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />

                            {/* Share / CTA */}
                            <footer className="mt-16 pt-8 border-t border-[#683419]/10">
                                <div className="bg-gradient-to-br from-[#683419] to-[#8B4513] rounded-2xl p-8 text-center text-white">
                                    <h3
                                        className="text-2xl font-bold mb-4"
                                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                                    >
                                        Experience the Best Coffee in Raipur
                                    </h3>
                                    <p className="text-white/80 mb-6">
                                        Visit Brownland Coffee for premium specialty coffee.
                                    </p>
                                    <Link
                                        href="/#contact"
                                        className="inline-block bg-white text-[#683419] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                                    >
                                        Find Us
                                    </Link>
                                </div>
                            </footer>
                        </article>
                    </section>
                </div>
                <Footer />
            </main>
        </AOSProvider>
    );
}

