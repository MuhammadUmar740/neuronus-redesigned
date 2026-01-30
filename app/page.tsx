import CheckValue from "@/components/home/CheckValue";
import DataSecurity from "@/components/home/data-security";
import HeaderHome from "@/components/home/HeaderHome";
import NeuronusProtects from "@/components/home/neuronus-protects";
import AccessNetwork from "@/components/home/access-network/AccessNetwork";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <CheckValue />
      <DataSecurity />
      <NeuronusProtects />
      <AccessNetwork />
    </>
  );
}
