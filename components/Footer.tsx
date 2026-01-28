import FooterLogo from "@/public/icons/footer/FooterLogo";
import Box from "@/public/icons/footer/Box";
import LinkedIn from "@/public/icons/footer/LinkedIn";
import M from "@/public/icons/footer/M";
import X from "@/public/icons/footer/X";
import YT from "@/public/icons/footer/YT";
import CopyWrite from "@/public/icons/footer/CopyWrite";

const Company = [
  { name: "Home" },
  { name: "About" },
  { name: "Products" },
  { name: "Read Books" },
  { name: "Blog" },
  { name: "Contact" },
  { name: "LLM Prompt" },
  { name: "Comunity Ideas & Voting" },
];

const Communication = [
  { name: "Neuro Mail" },
  { name: "Resonance" },
  { name: "Ghost Transfer" },
];

const Security = [{ name: "Neuro RSA" }, { name: "Neuro SPN" }];
const Finance = [{ name: "Neuro Coin" }, { name: "NeuroPay" }];

const SIcons = [
  { icon: LinkedIn },
  { icon: YT },
  { icon: X },
  { icon: M },
  { icon: Box },
];

const Storage = [{ name: "Neuro Drive" }, { name: "Quantumography" }];

const iconBg =
  "bg-[radial-gradient(43.45%_44.45%_at_56.56%_20.66%,_#2E3E99_0%,_#4C67FF_100%)]";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] pb-10 p-10">
      <div className="pb-6 border-b border-[#7C7C7C] xl:grid grid-cols-2">
        {/* Logo and Social Icons Section */}
        <div className="mb-8 md:mb-0 md:grid grid-cols-2">
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <FooterLogo />
              <div className="leading-tight text-[20.579px] lg:text-[27.079px] font-semibold">
                <p>Neuronus</p>
                <p>Computing</p>
              </div>
            </div>
            <p className="text-[16px] lg:text-[20px] md:pr-10">
              Encrypted tools that protect your identity — without surveillance
              or data harvesting.
            </p>
            <div className={`flex gap-1 items-center rounded-full`}>
              {SIcons.map((SIcons, index) => (
                <span
                  key={index}
                  className={`${iconBg} rounded-full w-[52px] h-[52px] flex items-center justify-center`}
                >
                  <SIcons.icon />
                </span>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="mb-8 md:mb-4">
            <span className="text-[18px] lg:text-[22px] font-semibold">
              COMPANY
            </span>
            <div>
              {Company.map((company, index) => (
                <span
                  key={index}
                  className="text-[16px] lg:text-[18px] pt-4 flex"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Sections */}
        <div className="md:grid md:grid-cols-2">
          {/* Communication & Privacy */}
          <div className="mb-8 md:mb-0 xl:border-b-2 border-[#0000001A]">
            <span className="text-[18px] lg:text-[22px] font-semibold">
              Communication & Privacy
            </span>
            <div>
              {Communication.map((com, index) => (
                <span
                  key={index}
                  className="text-[16px] lg:text-[18px] pt-4 flex"
                >
                  {com.name}
                </span>
              ))}
            </div>
          </div>

          {/* Security & Infrastructure */}
          <div className="mb-5 md:mb-0 xl:border-b-2 border-[#0000001A]">
            <span className="text-[18px] lg:text-[22px] font-semibold">
              Security & Infrastructure
            </span>
            <div>
              {Security.map((s, index) => (
                <span
                  key={index}
                  className="text-[16px] lg:text-[18px] pt-4 flex"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Storage & Data */}
          <div className="mb-8 md:mb-0 md:pt-4">
            <span className="text-[18px] lg:text-[22px] font-semibold">
              Storage & Data
            </span>
            <div>
              {Storage.map((storage, index) => (
                <span
                  key={index}
                  className="text-[16px] lg:text-[18px] pt-4 flex"
                >
                  {storage.name}
                </span>
              ))}
            </div>
          </div>

          {/* Finance & Web3 */}
          <div className="mb-8 md:mb-0 md:pt-4">
            <span className="text-[18px] lg:text-[22px] font-semibold">
              Finance & Web3
            </span>
            <div>
              {Finance.map((f, index) => (
                <span
                  key={index}
                  className="text-[16px] lg:text-[18px] pt-4 flex"
                >
                  {f.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright and Links */}
      <div className="flex flex-col lg:flex-row md:justify-between pt-4 text-[16px] lg:text-[18px] gap-4">
        <span className="flex items-center gap-2">
          <CopyWrite />
          <p>
            Copyright {new Date().getFullYear()} All rights reserved | Neuronus
            Computing
          </p>
        </span>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
