'use client';
import Navbar from "@/app/components/navBar";
import Blog from "@/app/utils/blog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const findCurrentBlog = (id:string)=>{
    if (typeof window !== 'undefined') {
        const blogs = JSON.parse(localStorage.getItem('data') || '[]') as Blog[];
        if (blogs) {
            const actualBlog = blogs.find(b => String(b.id) === id);
            return actualBlog;
        }
    }
}

export default function BlogPage() {
    const router = useParams();
    const id = router.id as string;
    const [currentBlog, setCurrentBlog] = useState<Blog | undefined>(findCurrentBlog(id));


    return (
        <div>
            <Navbar />
            <div className="flex flex-col mt-10 m-14 min-h-[calc(100vh-70px)] rounded-lg">
                <div className="bg-gray-200 p-4 w-full">
                    <div className="relative h-96 md:w-2/3 lg:w-1/3 ">
                    <Image
                        src={currentBlog?.imageUrl || ''}
                        alt={currentBlog?.title || ''}
                        fill
                        objectFit="contain"
                        className="rounded-lg "
                        
                    />

                    </div>
                    <h1 className="text-3xl mt-8 text-gray-700 font-semibold">{currentBlog?.title.toUpperCase()}</h1>
                    <p className="text-sm text-gray-400">Por {currentBlog?.author}</p>
                    <p className="text-sm text-gray-400">{currentBlog?.date}</p>
                    <p className="text-lg mt-6">{currentBlog?.description}</p>
                </div>
            </div>
        </div>
    );
}