'use client';
import { useEffect, useState } from "react";
import BlogCard from "@/app/components/blogCard";
import Navbar from "@/app/components/navBar";
import Blog from "@/app/utils/blog";

const initializeData = (defaultBlogs: Blog[]) => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            return JSON.parse(savedData) as Blog[];
        }else{
            localStorage.setItem('data',JSON.stringify(defaultBlogs));
        }
    }
    return defaultBlogs;
}

export default function BlogList() {
    const defaultBlogs = [
        {
            id: 1,
            title: "La Computación Cuántica",
            author: "Joseph Joestar",
            date: "6/12/2025",
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus fringilla lacus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes nascetur ridiculus mus donec rhoncus. Maximus eget fermentum odio phasellus non purus est. Dictum risus blandit quis suspendisse aliquet nisi sodales. Luctus nibh finibus facilisis dapibus etiam interdum tortor. Tincidunt nam porta elementum a enim euismod quam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Primis vulputate ornare sagittis vehicula praesent dui felis. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Hac habitasse platea dictumst lorem ipsum dolor sit.',
            imageUrl: "https://static.vecteezy.com/system/resources/previews/026/423/787/large_2x/abstract-technology-background-with-circuit-board-and-blue-lights-digital-communication-line-concept-graphic-hardware-computer-tech-integrated-energy-design-information-internet-generative-ai-photo.jpg"
        },
        {
            id: 2,
            title: "Optimización de Imágenes con Next.js",
            author: "Sofía Martínez",
            date: "05/12/2025",
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus fringilla lacus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes nascetur ridiculus mus donec rhoncus. Maximus eget fermentum odio phasellus non purus est. Dictum risus blandit quis suspendisse aliquet nisi sodales. Luctus nibh finibus facilisis dapibus etiam interdum tortor. Tincidunt nam porta elementum a enim euismod quam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Primis vulputate ornare sagittis vehicula praesent dui felis. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Hac habitasse platea dictumst lorem ipsum dolor sit.',
            imageUrl: "https://velog.velcdn.com/images/real-bird/post/b3b148d7-c6c1-4e73-ae7a-dd85739bb38e/image.png"
        },
        {
            id: 3,
            title: "Guía Rápida de Hooks en React",
            author: "Carlos Ruiz",
            date: "04/12/2025",
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus fringilla lacus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes nascetur ridiculus mus donec rhoncus. Maximus eget fermentum odio phasellus non purus est. Dictum risus blandit quis suspendisse aliquet nisi sodales. Luctus nibh finibus facilisis dapibus etiam interdum tortor. Tincidunt nam porta elementum a enim euismod quam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Primis vulputate ornare sagittis vehicula praesent dui felis. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Hac habitasse platea dictumst lorem ipsum dolor sit.',
            imageUrl: "https://i.ytimg.com/vi/oCy5pcBi7fo/maxresdefault.jpg"
        },
    ]
    const [data, setData] = useState<Blog[]>(() => initializeData(defaultBlogs));
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleStorageChange = () => {
            if (typeof window !== 'undefined') {
                const savedData = localStorage.getItem('data');
                if (savedData) {
                    setData(JSON.parse(savedData) as Blog[]);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    let filteredData = data;
    if (searchQuery.trim() !== '') {
        filteredData = data.filter(item => {
            return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.author.toLowerCase().includes(searchQuery.toLowerCase())
        });
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">

                <input
                    type="text"
                    placeholder="Buscar blogs por título o autor..."
                    onChange={(e) => { setSearchQuery(e.target.value) }}
                    className="block w-full border border-gray-300 rounded-lg py-3 px-4 mb-10 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
                />


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {

                        filteredData
                            .map((item) => (
                                <div key={item.id} className="w-full">
                                    <BlogCard
                                        {...item}
                                    />
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}