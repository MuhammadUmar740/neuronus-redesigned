import NeuroBrowser from "@/public/icons/home/accessNetork/NeuroBrowser";
import Polygon from "@/public/icons/home/Polygon";
import NeuroRSA from "@/public/icons/NeuroRSA";
import NeuroMail from "@/public/icons/registration/NeuroMail";
import Resonance from "@/public/icons/Resonance";
import { ProductCatalog } from "@/types/productCatalog";

export const accessNetworkProducts: ProductCatalog[] = [
  {
    title: "NeuroBrowser",
    description: "Private browser with built-in AI and native protection.",
    productIcon: <NeuroBrowser className="text-backlight w-full h-auto" />,
  },
  {
    title: "NeuroSPN",
    description: "Multi-layer tunneling network (advanced alternative to VPN).",
    productIcon: <Polygon className="w-full h-auto text-backlight" />,
  },
  {
    title: "NeuroNode",
    description: "Get paid for sharing your unused internet bandwidth.",
    productIcon: (
      <Polygon className="w-full h-auto text-backlight -scale-y-100 -scale-x-100" />
    ),
  },
];

export const CommunicationProducts: ProductCatalog[] = [
  {
    title: "Neuro Mail",
    description: "Encrypted, zero-knowledge email service.",
    productIcon: <NeuroMail className="text-backlight w-full h-auto" />,
  },
  {
    title: "Resonance",
    description: "Anonymous messenger with an integrated crypto wallet.",
    productIcon: <Resonance className=" text-backlight w-full h-auto" />,
  },
  {
    title: "NeuroRSA",
    description: "Text encryption tool using public/private keys.",
    productIcon: (
      <NeuroRSA className="w-full h-auto text-backlight -scale-y-100 -scale-x-100" />
    ),
  },
];
