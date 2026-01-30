import Glob from "@/public/icons/home/accessNetork/Glob";
import SPNBg from "@/public/icons/home/accessNetork/SPNBg";
import React from "react";
import Hand from "@/public/images/home/IphoneHandAccessNetwork.png";
import Image from "next/image";
import Power from "@/public/icons/home/accessNetork/Power";

const NeuroSPNCard = () => {
  return (
    <>
      <div className="relative overflow-hidden w-fit">
        <div className=" py-10 overflow-hidden  rounded-[42px]">
          <SPNBg />
        </div>
        <div className="absolute top-15 left-5">
          <button className="bg-[#ECF2FF] px-6 py-1 rounded-[99px] text-[18px] font-normal">
            SPN
          </button>
        </div>
        <div className="absolute top-20 left-80 -translate-x-20 z-10">
          <div className="bg-white h-[150px] w-[150px] rounded-full border-[15px] border-[#6A96FF]">
            <span className=" flex items-top justify-center">
              <Power />
            </span>
            <p className="flex justify-center text-[12.873px] text-[#778AA6]">
              Your IP
            </p>
            <p className="flex justify-center text-[11.264px] font-semibold">
              506.457.14.512
            </p>
          </div>
        </div>

        <div className="absolute top-65 -left-5 mix-blend-screen overflow-hidden ">
          <Glob />
        </div>
        <div className="absolute top-57 -right-24 w-full h-auto overflow-hidden ">
          <Image
            src={Hand}
            alt="Hand image"
            width={400}
            height={500}
            className="overflow-hidden object-contain rounded-br-[30px]"
          />
        </div>
      </div>{" "}
    </>
  );
};

export default NeuroSPNCard;
