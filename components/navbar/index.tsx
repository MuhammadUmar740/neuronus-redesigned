import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";

import Toolbox from "@/public/icons/Toolbox";
import Github from "@/public/icons/Github";
import NavLinks from "./NavLinks";
import Button from "../Button";
import Menu from "./Menu";

const Navbar = () => {
  const hiddenBelowXl = "hidden xl:block";

  return (
    <nav className="overflow-x-hidden">
      <Container className="flex justify-between items-center py-5 bg-primary text-sm 2xl:text-[15px] text-white text-nowrap gap-5">
        <Logo light />
        <NavLinks />
        <div className="flex gap-4 sm:gap-5 items-center">
          <button className={hiddenBelowXl}>Sign in</button>
          <Button
            className={`${hiddenBelowXl} text-sm! 2xl:text-[15px]!`}
            text="Create a free account"
          />
          <div className="flex gap-2.5 items-center">
            <Toolbox className="w-5.5 sm:w-6.5 h-auto" />
            <Github className={hiddenBelowXl} />
          </div>
          <Menu />
        </div>
      </Container>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
