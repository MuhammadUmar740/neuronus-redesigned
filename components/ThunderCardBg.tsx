import { ReactNode } from "react";
import Image from "next/image";
import bg from "@/public/images/home/header-card-bg-mob.png";

const ThunderCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden w-fit rounded-[22px] bg-linear-to-b from-[#CDDBFF] to-[#EFF4FF]">
      <Image
        src={bg}
        alt="bg"
        width={800}
        height={1000}
        className="size-full object-cover absolute top-0 left-0"
      />
      {children}
    </div>
  );
};

export default ThunderCard;
