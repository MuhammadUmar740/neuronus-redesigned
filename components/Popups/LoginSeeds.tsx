import Seed from "@/public/icons/seedRegistration/Seed";
import { Modal } from "../Modal";
import Link from "next/link";
import Save from "@/public/icons/seedRegistration/Save";
import Copy from "@/public/icons/seedRegistration/Copy";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Seeds = [
  { name: "PURSE" },
  { name: "TANKED" },
  { name: "DISUNITE" },
  { name: "SECTOR" },
  { name: "IGNITE" },
  { name: "ENEMY" },
  { name: "DILUVIUM" },
  { name: "RANCHER" },
  { name: "MEDDLE" },
  { name: "BATIK" },
  { name: "BICEPS" },
  { name: "EXAMEN" },
  { name: "OLOGY" },
  { name: "LEPIDOTE" },
  { name: "GROUCHY" },
  { name: "AGNAIL" },
];

const Services = [{ name: "Help" }, { name: "Privacy" }, { name: "Terms" }];

export const LoginSeeds = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="overflow-y-auto bg-[#F1F5FA] ">
        <div className="flex items-center justify-center sm:mt-8 md:mt-10 lg:mt-10 mb-4">
          <div
            className={`flex items-center justify-center p-7 rounded-[129px] bg-white`}
          >
            <Seed />
          </div>
        </div>

        <h3 className="text-[23px] lg:text-4xl text-center font-semibold">
          Login
        </h3>
        <p className="text-[#000000B5] pl-3 mt-3 font-normal">Your Seed</p>
        <div className="mt-2 bg-white rounded-lg border-[#ABABAB57] border">
          <div className="flex flex-wrap gap-3 ml-4 mt-6 mb-6 mr-2">
            {Seeds.map((seed, index) => (
              <span
                key={index}
                className="px-2 py-1.5 rounded-md border border-[#D5D5D5] font-normal text-[10.762px] lg:text-[20.37px]"
              >
                {seed.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4 mb-2">
          <p className="flex gap-4 text-[14px] lg:text-xl">
            Don't have account yet?
            <Link
              href="/login"
              className="cursor-pointer lg:underline text-[#36F] lg:text-black"
            >
              Register here
            </Link>
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="mt-6 px-8 rounded-full bg-[radial-gradient(43.45%_44.45%_at_56.56%_20.66%,_#2E3E99_0%,_#4C67FF_100%)] bg-[#4C67FF] py-3 text-white">
            I have save my seed
          </button>
        </div>
        <div className="flex justify-center gap-10 mb-4 mt-6">
          {Services.map((s) => (
            <p className="flex justify-between text-[10.327px] lg:text-[17.603px] font-normal mt-4">
              {s.name}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
};
