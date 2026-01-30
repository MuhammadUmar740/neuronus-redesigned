"use client";
import NeuroBrowser from "@/public/icons/home/accessNetork/NeuroBrowser";
import { SwiperSlide } from "swiper/react";
import Button from "../Button";
import NeuroSPNBlue from "@/public/icons/home/accessNetork/NeuroSPNBlue";
import NeuroNode from "@/public/icons/home/accessNetork/NeuroNode";
import SecureBrowserCard from "./SecureBrowserCard";
import NeuroSPNCard from "./NeuroSPNCard";
import Previous from "@/public/icons/Previous";
import AppSwiper from "../Swipper";

const AccessNetwork = () => {
  return (
    <div className="bg-[#F7F7F7] p-5">
      <div className="flex items-center justify-center font-semibold text-[46px]">
        Access & Network
      </div>
      <p className=" flex items-center justify-center text-[22px] ">
        The Foundation. Tools that guarantee connection anonymity.
      </p>
      <div className="lg:grid lg:grid-cols-2">
        {/* Grid 1 */}
        <div>
          {/* NeuroBrowser */}
          <div className="flex justify-center gap-4 pb-8 pt-10">
            <span className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[23px]">
              <NeuroBrowser />
            </span>

            {/* Button */}
            <div className="flex flex-col">
              <h1 className="text-[30px] font-semibold">NeuroBrowser</h1>
              <p className="text-[22px] mb-4">
                Private browser with built-in AI and native protection.
              </p>

              <div className="flex items-center gap-4">
                <Button
                  text="Try Now"
                  className="!py-2 !px-8 text-[18px] text-white"
                />
                <p className="text-[18px] flex items-center gap-4">
                  Explore NeuroBrowser
                  <span className="[&_svg]:w-[8px] [&_svg]:h-[10px] rotate-180 [&_svg]:fill-black [&_svg]:stroke-black ">
                    <Previous />
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* NeuroSPN */}
          <div className="flex justify-center gap-4 py-8">
            <span className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[23px]">
              <NeuroSPNBlue />
            </span>

            {/* Button */}
            <div className="flex flex-col">
              <h1 className="text-[30px] font-semibold">NeuroSpn</h1>
              <p className="text-[19px] mb-4">
                Multi-layer tunneling network (advanced alternative to VPN).
              </p>

              <div className="flex items-center gap-4">
                <Button
                  text="Try Now"
                  className="!py-2 !px-8 text-[18px] text-white"
                />
                <p className="text-[18px] flex items-center gap-4">
                  Explore NeuroSPN
                  <span className="[&_svg]:w-[8px] [&_svg]:h-[10px] rotate-180 [&_svg]:fill-black [&_svg]:stroke-black">
                    <Previous />
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* NeuroNode */}
          <div className="flex justify-center gap-4 py-8">
            <span className="flex items-center justify-center bg-white w-[80px] h-[80px] rounded-[23px]">
              <NeuroNode />
            </span>

            {/* Button */}
            <div className="flex flex-col">
              <h1 className="text-[30px] font-semibold">NeuroNode</h1>
              <p className="text-[22px] mb-4">
                Get paid for sharing your unused internet bandwidth.
              </p>

              <div className="flex items-center gap-4">
                <Button
                  text="Try Now"
                  className="!py-2 !px-8 text-[18px] text-white"
                />
                <p className="text-[18px] flex justify-center items-center gap-4">
                  Explore NeuroNode
                  <span className="[&_svg]:w-[8px] [&_svg]:h-[10px] rotate-180  [&_svg]:fill-black [&_svg]:stroke-black">
                    <Previous />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <AppSwiper>
            <SwiperSlide>
              <SecureBrowserCard />
            </SwiperSlide>
            <SwiperSlide>
              <NeuroSPNCard />
            </SwiperSlide>
          </AppSwiper>
        </div>
      </div>
    </div>
  );
};

export default AccessNetwork;
