import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AOSProvider } from '@/components/aos-provider';

export const metadata: Metadata = {
    title: 'Blog | Brownland Coffee - Coffee Culture & Insights',
    description: 'Explore coffee culture in Raipur, brewing guides, franchise opportunities, and lifestyle tips from Brownland Coffee.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <AOSProvider>
            <main className="min-h-screen bg-[#F6EEE5]">
                <Navbar />
                <div className="pt-20"> {/* Add padding for fixed navbar */}
                    <section className="pb-16 pt-8">
                        <div className="w-[90%] mx-auto">
                            {/* Blog Grid */}
                            {posts.length === 0 ? (
                                <div className="text-center py-20">
                                    <p className="text-[#683419]/60 text-lg">Coming soon...</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {posts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group"
                                        >
                                            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#683419]/5">
                                                {/* Image Placeholder */}
                                                <div className="relative h-48 bg-gradient-to-br from-[#683419] to-[#8B4513] overflow-hidden">
                                                    <div className="absolute inset-0 bg-[url('/coffee-pattern.svg')] opacity-10" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-white/20 text-6xl">☕</span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6">
                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {post.tags.slice(0, 2).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="text-xs uppercase tracking-wider text-[#683419]/60 bg-[#683419]/5 px-2 py-1 rounded-full"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Title */}
                                                    <h2
                                                        className="text-xl font-bold text-[#683419] mb-3 group-hover:text-[#8B4513] transition-colors line-clamp-2"
                                                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                                                    >
                                                        {post.title}
                                                    </h2>

                                                    {/* Description */}
                                                    <p
                                                        className="text-[#683419]/70 text-sm line-clamp-3 mb-4"
                                                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                                                    >
                                                        {post.description}
                                                    </p>

                                                    {/* Meta */}
                                                    <div className="flex items-center justify-between text-xs text-[#683419]/50">
                                                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                        <span className="group-hover:translate-x-1 transition-transform">Read →</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </AOSProvider>
    );
}

