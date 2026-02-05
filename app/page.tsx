import CheckValue from "@/components/home/CheckValue";
import DataSecurity from "@/components/home/data-security";
import HeaderHome from "@/components/home/HeaderHome";
import NeuronusProtects from "@/components/home/neuronus-protects";
import AccessNetwork from "@/components/home/access-network/AccessNetwork";
import Communication from "@/components/home/communication/Communication";
import Vault from "@/components/home/vault-&-storage/Vault";
import WorkSpace from "@/components/home/workspace/WorkSpace";
import BasicRules from "@/components/home/basic-rules";
import NextGenEncryption from "@/components/home/next-gen-encryption";
import PoweredByNuronus from "@/components/home/PoweredByNuronus";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <CheckValue />
      <DataSecurity />
      <NeuronusProtects />
      <AccessNetwork />
      <Communication />
      <Vault />
      <WorkSpace />
      <BasicRules />
      <NextGenEncryption />
      <PoweredByNuronus />
    </>
  );
}
