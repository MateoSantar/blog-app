import Image from "next/image";
import Blog from "@/app/utils/blog";
import Link from "next/link";



export default function BlogCard(blog: Blog) {
    return (

        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-sm h-full">
            <div className="relative w-full h-64">
                <Image
                    src={blog.imageUrl}
                    alt={`Imagen del blog: ${blog.title}`}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 text-left">
                <h2 className="text-xl font-bold mb-1">{blog.title}</h2>
                <p className="text-sm">{blog.description.slice(0,70)}...</p>
                <p className="text-sm text-gray-600 mt-5">Por: {blog.author}</p>
                <p className="text-xs text-gray-500">Fecha: {blog.date}</p>
                <Link href={`blogs/${blog.id}`}>
                    <button className="mt-2 p-2 bg-blue-600 text-white rounded-lg shadow-lg">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    );
}