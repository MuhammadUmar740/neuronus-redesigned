import { Modal } from "../Modal";
import Neuronus from "@/public/icons/registration/Neuronus";
import UnionUp from "@/public/icons/registration/UnionUp";
import UnionDown from "@/public/icons/registration/UnionDown";
import NeuroMail from "@/public/icons/registration/NeuroMail";
import Resonance from "@/public/icons/registration/Resonance";
import NeuroDrive from "@/public/icons/registration/NeuroDrive";
import QuantumGraphy from "@/public/icons/registration/QuantumGraphy";
import Ghost from "@/public/icons/registration/Ghost";
import NeuroCircle from "@/public/icons/registration/NeuroCircle";
import NeuroScreens from "@/public/icons/registration/NeuroScreens";
import NFile from "@/public/icons/registration/NFile";
import XFile from "@/public/icons/registration/XFile";
import NeuroRsa from "@/public/icons/registration/NeuroRsa";
import Exclude from "@/public/icons/registration/Exclude";
import NP from "@/public/icons/registration/NP";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Icons = [
  { icon: Neuronus },
  { icon: UnionUp },
  { icon: UnionDown },
  { icon: NeuroMail },
  { icon: Resonance },
  { icon: NeuroRsa },
  { icon: NeuroDrive },
  { icon: QuantumGraphy },
  { icon: Ghost },
  { icon: Exclude },
  { icon: NeuroScreens },
  { icon: NFile },
  { icon: XFile },
  { icon: NeuroCircle },
  { icon: NP },
];

export const SelectRegistration = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" pt-8 pb-6 text-center">
        <div className="text-[21px] lg:hidden text-center font-semibold">
          Submit Your Idea
        </div>
        <div className="px-7 flex items-center mt-6">
          {Icons.slice(0, 15).map((Item, index) => {
            const Icon = Item.icon;

            return (
              <div
                key={index}
                className={`flex items-center justify-center bg-white border-[0.35px] border-[#B8B8B8A8] rounded-[10.72px] p-2 w-11 h-11 
                  transition-transform ${
                    index !== 0
                      ? "-ml-3 sm:-ml-4 md:-ml-2 -mr-2 lg:-mr-0 lg:-ml-2"
                      : ""
                  }`}
                style={{ zIndex: 5 + index }}
              >
                <Icon />
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-[22px] lg:text-[34px] font-semibold ">
          Get Started
        </p>
        <p className="text-[12px] lg:text-xl p-4 text-[rgba(0,0,0,0.71)]">
          By Creating free account , you will get access to all our tools.
        </p>
        <span className="text-[12px] lg:text-xl text-[rgba(0,0,0,0.71)]">
          Select how you would like to proceed
        </span>
        <div className="flex justify-center flex-col items-center text-[15px] lg:text-[19px] ">
          <button className="mt-6 px-8 w-80 rounded-full bg-[radial-gradient(43.45%_44.45%_at_56.56%_20.66%,_#2E3E99_0%,_#4C67FF_100%)] bg-[#4C67FF] py-3 text-white">
            Registration with Seeds
          </button>
          <button className="mt-6 px-8 w-80 rounded-full bg-[radial-gradient(43.45%_44.45%_at_56.56%_20.66%,_#2E3E99_0%,_#4C67FF_100%)] bg-[#4C67FF] py-3 text-white">
            Registration with PGP
          </button>
        </div>
      </div>
    </Modal>
  );
};
