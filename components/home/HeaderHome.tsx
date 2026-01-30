import Button from "@/components/Button";
import Header from "@/components/Header";
import HeaderCard from "@/components/home/HeaderCard";
import Curtains from "@/public/images/Curtains";
import dots from "@/public/images/dots-landing-header.png";
import Image from "next/image";

const HeaderHome = () => {
  return (
    <Header
      title={
        <span>
          Encrypted tools that <br /> protect your identity.
        </span>
      }
      description="Your online life stays hidden — safe, private, and in your control"
    >
      <div className="py-16 md:py-20 relative">
        <Image
          src={dots}
          alt="dots"
          width={1500}
          height={1500}
          className="w-55 md:w-65 lg:w-75 h-auto object-cover absolute top-0 left-1/2 -translate-x-[54%]"
        />
        <div className="relative w-55 md:w-65 lg:w-75 mx-auto before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-2/3 before:bg-[#627AFF] before:z-0 before:rounded-full before:blur-[21px] after:content-[''] after:absolute after:-left-1.5 after:top-0 after:w-2/3 after:h-3/4 after:bg-[linear-gradient(90deg,#8A62FF_0%,#3B4999_100%)] after:z-0 after:blur-sm after:rounded-full">
          <div className="absolute size-full rounded-full bg-primary -bottom-1/2 left-0 blur-md" />
          <Button
            text="Get Started"
            className="border-t md:border-t-2 border-white text-white w-full relative z-1"
          />
        </div>
        <Curtains className="translate-y-[-15%]" />
        <HeaderCard />
      </div>
    </Header>
  );
};

export default HeaderHome;
