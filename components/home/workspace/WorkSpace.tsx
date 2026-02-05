"use client";
import Heading from "../../Heading";
import Description from "../../Description";
import {
  CommunicationProducts,
  WorkSpaceProducts,
} from "@/data/productCatalog";
import ProductCatalog from "../../ProductCatalog";
import thunder from "@/public/images/home/data-security-thunder.png";
import Image from "next/image";
import AppSwiper from "../../Swipper";
import { SwiperSlide } from "swiper/react";
import HighSecurityCard from "./HighSecurityCard";
import DocumentsCard from "./DocumentsCard";
import SecuresheetCard from "./SecuresheetCard";

const WorkSpace = () => {
  return (
    <div className="pt-10 lg:pt-0 pb-16 md:pb-24 -mt-5">
      <div className=" bg-white max-w-[95vw] relative rounded-tr-[62px] rounded-br-[62px] py-12">
        <Heading className="text-center mb-3 ">Communication</Heading>
        <Description
          className="text-center mb-10 md:mb-16"
          text="Information exchange without witnesses.   "
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-4">
          <div className="flex flex-col lg:justify-between mt-8 gap-14 lg:gap-0 pe-8">
            {WorkSpaceProducts.map((product) => (
              <ProductCatalog
                {...product}
                key={`workspace-product-${product.title}`}
              />
            ))}
          </div>
          <div>
            <AppSwiper>
              <SwiperSlide>
                <HighSecurityCard />
              </SwiperSlide>
              <SwiperSlide>
                <DocumentsCard />
              </SwiperSlide>
              <SwiperSlide>
                <SecuresheetCard />
              </SwiperSlide>
            </AppSwiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
