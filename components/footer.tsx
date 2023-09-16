import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-[#121020] px-[20px] py-[50px] flex flex-col lg:flex-row gap-[100px] md:px-[60px] md:py-[100px] xl:p-[100px]">
            <div className="flex flex-col gap-[30px] w-full">
                <div className="relative h-[35px] w-[143px]">
                    <Image src="/images/logo.svg" alt="logo" fill className="object-cover" />
                </div>
                <p className="text-lightGray text-[16px] xl:text-[24px] font-medium leading-[250%]">Receive the extension by email and use it for free for 14 days ! No credit card needed</p>
                <button className="rounded-[50px] px-[40px] py-[15px] text-[24px] border border-lightGray text-lightGray font-medium leading-[166%] w-fit">Contactez-nous</button>
                <p className="text-[24px] leading-[40px] text-lightGray">© 2022 Kons. All rights reserved.</p>
            </div>
            <div className="w-full flex gap-[50px]">
                <div className="w-1/2 md:w-1/3">
                    <ul className="flex flex-col gap-[30px]">
                        <li className="text-lightViolet font-bold text-[18px] md:text-[24px]">Product</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">Product</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">Testimonials</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">Pricing</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">Blog</li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-1/3">
                    <ul className="flex flex-col gap-[30px]">
                        <li className="text-lightViolet font-bold text-[18px]">Help</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">FAQ</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">Mentions légales</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">CGU / CGV</li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-1/3">
                    <ul className="flex flex-col gap-[30px]">
                        <li className="text-lightViolet font-bold text-[18px]">Contact</li>
                        <li className="text-lightGray text-[14px] md:text-[24px] font-medium leading-[40px]">contact@lorem.ipsum</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer