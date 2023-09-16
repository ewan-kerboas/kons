"use client";

import Image from "next/image";
import { useState } from "react";

type BoxItemsProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

const boxItems: BoxItemsProps[] = [
  {
    id: 0,
    title: "Box Kons 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    image: "/images/box.svg",
    price: 19.99,
  },
  {
    id: 0,
    title: "Box Kons 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    image: "/images/box.svg",
    price: 29.99,
  },
];

const BoxTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <div className="flex my-[30px] md:my-[80px] md:w-1/2 text-center mx-auto lg:w-2/3">
        <div
          onClick={() => setActiveTab(0)}
          className={`cursor-pointer transition-all px-[30px] py-[15px] w-full font-bold text-[16px] md:text-[18px]  ${
            activeTab === 0
              ? "bg-lightGreen text-[#090812]"
              : "bg-[#23222E] text-[#A8A8BF]"
          } rounded-l-[10px]`}
        >
          BOX KONS 1
        </div>

        <div
          onClick={() => setActiveTab(1)}
          className={`cursor-pointer transition-all px-[30px] py-[15px] w-full font-bold text-[16px] md:text-[18px]  ${
            activeTab === 1
              ? "bg-lightGreen text-[#090812]"
              : "bg-[#23222E] text-[#A8A8BF]"
          } rounded-r-[10px]`}
        >
          BOX KONS 2
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[80px]">
        <div className="relative w-[340px] h-[300px] md:minw-[550px] md:h-[500px] lg:min-w-[582px] lg:h-[540px] xl:min-w-[663px] xl:h-[540px] rounded-[20px]">
          <Image
            src={boxItems[activeTab].image}
            alt={boxItems[activeTab].title}
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-[40px] md:gap-[50px] md:w-4/5 md:mx-auto">
          <div className="flex flex-col gap-[20px]">
            <h5 className="text-white font-bold leading-[120%] text-[30px] lg:text-[35px] lg:leading-[120%] uppercase">{boxItems[activeTab].title}</h5>
            <div className="bg-lightGreen h-[1px] w-[230px] md:w-[250px]" />
            <p className="text-lightGray text-[16px] lg:text-[18px] leading-[150%]">{boxItems[activeTab].description}</p>
          </div>
          <div className="flex flex-col gap-[15px] md:flex-row md:justify-between md:items-center">
            <p className="text-lightGreen text-[20px] lg:text-[24px] font-bold">Prix : {boxItems[activeTab].price} €</p>
            <button className="py-[15px] px-[40px] w-full md:w-fit rounded-[10px] bg-lightViolet text-darkViolet text-[18px] lg:text-[24px] font-bold leading-[150%]">S'abonner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxTabs;
