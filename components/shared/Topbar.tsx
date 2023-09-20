import Link from "next/link";
import Image from "next/image";

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/logo.svg" alt="log" width={28} height={228} />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
            </Link>
        </nav>
    )
}

export default Topbar;