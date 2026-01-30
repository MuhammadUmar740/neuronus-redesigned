import CheckValue from "@/components/home/CheckValue";
import AccessNetwork from "@/components/homePage/AccessNetwork";
import DataSecurity from "@/components/home/data-security";
import HeaderHome from "@/components/home/HeaderHome";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <CheckValue />
      <DataSecurity />
      <AccessNetwork />
    </>
  );
}
