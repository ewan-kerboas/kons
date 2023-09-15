import Image from "next/image"
import Link from "next/link"
import { Icons } from "../public/icons"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-[30px] py-[20px] md:px-[40px] lg:px-[80px] lg:py-[30px]">
            <div className="flex items-center md:gap-[90px]">
                <div className="relative w-[106px] h-[26px] md:h-[25px] md:w-[100px] lg:h-[35px] lg:w-[143px]">
                    <Image src="/images/logo.svg" alt="kons-logo" fill className="object-cover" />
                </div>
                <ul className="hidden md:flex items-center md:gap-[70px]">
                    <li className="text-lightGray md:text-[16px] lg:text-[20px] transition-colors hover:text-lightViolet uppercase">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="text-lightGray md:text-[16px] lg:text-[20px] transition-colors hover:text-lightViolet uppercase">
                        <Link href="/">
                            Pré-commande
                        </Link>
                    </li>
                    <li className="text-lightGray md:text-[16px] lg:text-[20px] transition-colors hover:text-lightViolet uppercase">
                        <Link href="/">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="flex items-center gap-[20px]">
                <li className="cursor-pointer">
                    <Icons.user />
                </li>
                <li className="cursor-pointer">
                    <Icons.cart />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar