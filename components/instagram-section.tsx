"use client"

import { Instagram } from "lucide-react"

const INSTAGRAM_PROFILE = "https://www.instagram.com/brownlandcoffee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="

const POSTS = [
    {
        id: 1,
        image: "/images/instagram/post1.jpg",
        link: "https://www.instagram.com/p/DTkfpS9DSUi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 2,
        image: "/images/instagram/post2.png",
        link: "https://www.instagram.com/reel/DTh_DvBDZh8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 3,
        image: "/images/instagram/post3.png",
        link: "https://www.instagram.com/p/DTVPJ87k7ac/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 4,
        image: "/images/instagram/post4.png",
        link: "https://www.instagram.com/reel/DTP4wkLDach/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 5,
        image: "/images/instagram/post5.png",
        link: "https://www.instagram.com/reel/DSsft0wDU2_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        id: 6,
        image: "/images/instagram/post6.png",
        link: "https://www.instagram.com/p/DTE22Pyipwq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
]

export function InstagramSection() {
    return (
        <section className="py-10 bg-[#fafafa]">
            <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-sm overflow-hidden">
                {/* Profile Header */}
                <div className="p-6 md:p-10 border-b border-gray-100">
                    <div className="flex items-center gap-6 md:gap-10">

                        {/* Profile Picture with Gradient Border */}
                        <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" className="relative group">
                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                                <div className="w-full h-full rounded-full bg-white p-[2px]">
                                    <img
                                        src="/images/instagram/profilepicture.jpg"
                                        alt="Brownland Coffee"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </a>

                        {/* Profile Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <h2 className="text-xl md:text-2xl font-normal text-[#262626]">brownlandcoffee</h2>
                                </a>
                                <span className="text-blue-500">
                                    {/* Verified icon could go here if needed */}
                                </span>
                                <a
                                    href={INSTAGRAM_PROFILE}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto"
                                >
                                    <Instagram className="w-6 h-6 text-[#262626]" />
                                </a>
                            </div>

                            <div className="mb-4">
                                <span className="font-semibold text-[#262626]">Brownland Coffee</span>
                            </div>

                            <div className="flex gap-6 md:gap-10 text-sm md:text-base text-[#262626]">
                                <div>
                                    <span className="font-semibold">120</span> posts
                                </div>
                                <div>
                                    <span className="font-semibold">778</span> followers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-3 bg-white">
                    {POSTS.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative aspect-square group overflow-hidden bg-gray-100 block"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
