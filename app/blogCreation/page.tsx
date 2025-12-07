'use client';

import NavBar from "@/app/components/navBar";
import { FormEvent, useEffect, useState } from "react";
import Blog from "@/app/utils/blog"; 
import { useRouter } from "next/navigation"; 


const getActualBlogs = ()=>{
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('data'));
    }
}

export default function BlogCreation() {

    const [actualData, setActualData] = useState<Blog[]>(getActualBlogs); 
    const router = useRouter();


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        const maxId = actualData.reduce((max, blog) => Math.max(max, blog.id), 0);
        const newId = maxId + 1;

        const newBlog: Blog = {
            id: newId,
            title: formData.get('title')?.toString() || 'Sin Título',
            description: formData.get('description')?.toString() || 'Sin Descripción',
            author: formData.get('author')?.toString() || 'Anónimo',
            imageUrl: formData.get('image_url')?.toString() || '',
            date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        };

        const updatedData = [...actualData, newBlog];

        setActualData(updatedData);

        if (typeof window !== 'undefined') {
            localStorage.setItem('data', JSON.stringify(updatedData));
            router.replace('/');
        }
        
    }    
    

    return (
        <div>
            <NavBar />
            <div className="flex justify-center">
                <form className="flex flex-col gap-5 w-1/3 mt-10 p-10 bg-white rounded-xl shadow-2xl" onSubmit={onSubmit}>
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Crear Nuevo Blog</h2>
                    
                    <input name="title" type="text" placeholder="Título" className="border p-3 py-3 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                    
                    <textarea name="description" placeholder="Descripción completa del contenido..." rows={5} className="border p-3 py-3 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />

                    <input name="author" type="text" placeholder="Autor" className="border p-3 py-3 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />

                    <input name="image_url" type="text" placeholder="URL de la Imagen" className="border p-3 py-3 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                    
                    <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-xl rounded-lg text-white p-3 shadow-lg transition duration-200">
                        GUARDAR BLOG
                    </button>
                </form>
            </div>
        </div>
    );
}