'use client';
import { useEffect, useState } from "react";
import BlogCard from "@/app/components/blogCard";
import Navbar from "@/app/components/navBar";
import Blog from "@/app/utils/blog";
export default function BlogList() {
    const [data, setData] = useState<Blog[]>([
        {
            id: 1,
            title: "La Computación Cuántica",
            author: "Joseph Joestar",
            date: "6/12/2025",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/026/423/787/large_2x/abstract-technology-background-with-circuit-board-and-blue-lights-digital-communication-line-concept-graphic-hardware-computer-tech-integrated-energy-design-information-internet-generative-ai-photo.jpg"
        },
        {
            id: 2,
            title: "Optimización de Imágenes con Next.js",
            author: "Sofía Martínez",
            date: "05/12/2025",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
            imageUrl: "https://velog.velcdn.com/images/real-bird/post/b3b148d7-c6c1-4e73-ae7a-dd85739bb38e/image.png"
        },
        {
            id: 3,
            title: "Guía Rápida de Hooks en React",
            author: "Carlos Ruiz",
            date: "04/12/2025",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
            imageUrl: "https://i.ytimg.com/vi/oCy5pcBi7fo/maxresdefault.jpg"
        },
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <Navbar />
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center p-10 py-15">
                    {
                        data.map((item) => (
                            <div key={item.title} className="w-100 h-full">
                                <BlogCard
                                    id={item.id}
                                    title={item.title}
                                    author={item.author}
                                    date={item.date}
                                    description={item.description}
                                    imageUrl={item.imageUrl} />
                            </div>
                        ))
                    }
                </div>

                aaa

            </div>
        </div>
    );
}