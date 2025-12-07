import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-gray-600 text-white p-5 pl-7 text-3xl flex flex-col md:flex-row gap-7 justify-start items-center">
            <h1 className="font-medium">My Blogger</h1>
            <Link
                href={'/'}
                className="text-2xl">
                Inicio
            </Link>
            <Link
            href={'../blogCreation'}
            className="text-2xl">
                Crear nuevo blog
            </Link>
        </nav>
    );
}