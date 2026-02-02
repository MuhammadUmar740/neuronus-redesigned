import NeuroBrowser from "@/public/icons/home/accessNetork/NeuroBrowser";
import Polygon from "@/public/icons/home/Polygon";
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
