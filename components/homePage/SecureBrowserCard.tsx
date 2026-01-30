import Assistance from "@/public/icons/home/accessNetork/Assistance";
import Link from "@/public/icons/home/accessNetork/Link";
import Mic from "@/public/icons/home/accessNetork/Mic";
import N from "@/public/icons/home/accessNetork/N";
import NeuroSPNBlack from "@/public/icons/home/accessNetork/NeuroSPNBlack";
import Proxy from "@/public/icons/home/accessNetork/Proxy";
import Robot from "@/public/icons/home/accessNetork/Robot";
import Search from "@/public/icons/home/accessNetork/Search";
import Shortfiy from "@/public/icons/home/accessNetork/Shortfiy";
import Previous from "@/public/icons/Previous";

export default function SecureBrowserCard() {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="px-5 rounded-[22px] bg-[#D6E2FF] ">
        <div className="relative top-0 left-1/2 -translate-x-1/2 bg-[#F2F6FFB0] w-[250px] h-[125px] rounded-b-full"></div>
        <div className="relative flex flex-col justify-center">
          <div>
            <span className="absolute -top-20 left-2 rounded-[99px] bg-[#ECF2FF] px-4 py-1 text-[18px]">
              Secure Browser
            </span>
            <div className="relative flex py-6 justify-center items-center ">
              <span className="absolute -top-15 flex justify-center opacity-100 items-center rounded-full bg-[#4C67FF] w-[80px] h-[80px]">
                <N />
              </span>
            </div>
          </div>
          {/* Search */}
          <div className="py-4 bg-[#FFFFFF33] rounded-[20.041px] shadow-lg px-4">
            <div className="relative bg-[#FFFFFF99] rounded-[83.657px]">
              <input
                type="text"
                placeholder="Search or type a URL"
                className="w-full rounded-full px-12 pr-32 py-3"
              />

              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search />
              </span>

              <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <Link />
                <Mic />
                <Proxy />
              </span>
            </div>

            {/* Chat */}
            <div className="mt-4 rounded-2xl bg-white p-4">
              <textarea
                placeholder="Ask anything..."
                className="w-full resize-none outline-none"
                rows={5}
                cols={10}
              />
              <div className="mt-2 text-[11.83px] inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm">
                <span className="bg-white w-[35px] h-[35px] flex items-end rounded-full justify-center overflow-hidden">
                  <span className="w-full h-full rounded-bl-full rounded-br-full overflow-hidden flex items-end justify-center">
                    <Robot />
                  </span>
                </span>
                Resonance Robot
                <div className="flex flex-col items-center gap-1">
                  <span className="[&_svg]:w-[4px] [&_svg]:h-[4px] rotate-90 [&_svg]:fill-[#00000099] [&_svg]:stroke-[#00000099]">
                    <Previous />
                  </span>
                  <span className="[&_svg]:w-[4px] [&_svg]:h-[4px] -rotate-90 [&_svg]:fill-[#00000099] [&_svg]:stroke-[#00000099]">
                    <Previous />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="flex text-center justify-center py-6 gap-10">
          <div>
            <span className="w-[70px] h-[55px] flex items-center justify-center">
              <span className="bg-white w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <Shortfiy />
              </span>
            </span>
            <p>Shprtfiy</p>
          </div>
          <div>
            <span className="bg-white w-[70px] h-[55px] rounded-full flex items-center justify-center overflow-hidden">
              <NeuroSPNBlack />
            </span>

            <p>NeuroSPN</p>
          </div>
          <div>
            <span className="bg-white w-[70px] h-[55px] flex items-center justify-center rounded-full overflow-hidden">
              <Assistance />
            </span>
            Assistance
          </div>
        </div>
      </div>
    </div>
  );
}
