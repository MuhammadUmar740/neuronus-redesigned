import Image from "next/image";
import NeuronusWhite from "@/public/icons/home/NeuronusWhite";
import thunder from "@/public/images/home/header-card-thunder.png";
import bg from "@/public/images/home/header-card-bg.png";
import bgMobile from "@/public/images/home/header-card-bg-mob.png";
import dots from "@/public/images/dots-landing-header.png";
import WiresLeft from "@/public/images/home/WiresLeft";
import WiresRight from "@/public/images/home/WiresRight";
import WiresTop from "@/public/images/home/WiresTop";
import WiresBottom from "@/public/images/home/WiresBottom";

const HeaderCard = () => {
  return (
    <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#0F2A73] to-[#030A3E] border border-[#293DAA] py-40 md:p-14 flex items-center justify-center before:absolute before:content-[''] before:w-[15%] before:h-3/4 before:bg-[#4761F2CF] before:left-0 before:bottom-1/2 md:before:bottom-0 before:rounded-br-full before:blur-[60px] md:before:rounded-tr-full  after:absolute after:content-[''] after:w-[15%] after:h-1/2 after:bg-[#2A4EA4] after:right-0 after:top-1/2 md:after:top-0 after:rounded-tl-full md:after:rounded-bl-full after:blur-[60px] translate-y-[-3%] sm:translate-y-[-5%] md:translate-y-[-11%] lg:translate-y-[-15%]">
      {/* Background */}
      <Image
        src={bg}
        alt="thunder"
        width={1500}
        height={600}
        className="size-full object-cover absolute top-0 left-0 hidden md:block"
      />
      <Image
        src={bgMobile}
        alt="thunder"
        width={800}
        height={1000}
        className="size-full object-cover absolute top-0 left-0 md:hidden"
      />

      <div className="relative p-10 md:p-14 lg:p-16 xl:p-20">
        {/* Thunder */}
        <Image
          src={thunder}
          alt="thunder"
          width={700}
          height={700}
          className="absolute w-full h-auto top-0 left-0"
        />
        {/* dots */}
        <Image
          src={dots}
          alt="dots"
          width={1500}
          height={1500}
          className="size-full object-cover absolute top-[-8%] left-0"
        />

        <WiresLeft className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-2/3 scale-110 xl:scale-140 2xl:scale-150 hidden md:block" />
        <WiresRight className="absolute top-1/2 -translate-y-1/2 left-0 translate-x-2/3 scale-110 xl:scale-140 2xl:scale-150 hidden md:block" />

        <WiresTop className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 scale-300 -translate-y-2/3" />
        <WiresBottom className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-0 scale-300 translate-y-2/3" />

        {/* Neuronus Circle */}
        <div className="size-25 md:size-38 lg:size-42 xl:size-48 2xl:size-51.25 rounded-full bg-[#050E44] border border-[#122573] flex items-center justify-center relative opacity-90">
          <div className="rounded-full size-4/5 border border-[#122573] bg-[linear-gradient(150deg,#D3FFFF_9.71%,#87EFFF_41.04%,#4091FD_60%,#B7F3FD_74.31%,#94C4CF_87.07%)] flex justify-center items-center">
            <div className="rounded-full size-3/4 border border-[#15309D] bg-[radial-gradient(7.2%_7.2%_at_50%_50%,#82B8FF_0%,#0A164D_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center">
              <NeuronusWhite className="w-1/2 h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
