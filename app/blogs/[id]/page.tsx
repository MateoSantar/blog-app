'use client';
import Navbar from "@/app/components/navBar";
import { useParams } from "next/navigation";
export default function BlogPage() {
    const router = useParams();
    return (
        <div>
            <Navbar/>
            <p>{router.id}</p>
        </div>
    );
}