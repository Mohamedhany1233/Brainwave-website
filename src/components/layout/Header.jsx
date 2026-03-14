import { useLocation } from "react-router-dom";
import { brainwave } from "../../assets";
import { navigation } from "../../constants";
import MenuSvg from "../../assets/svg/MenuSvg";
import Button from "../ui/Button";
import { HamburgerMenu } from ".././design/Header";
import { useState } from "react";
const Header = () => {
  const path = useLocation();

  const [openNav, setOpenNav] = useState(false);

  const openMobileNav = () => {
    setOpenNav(!openNav);
  };

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <div
      className={`${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}  fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/9 lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-6">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${openNav ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center m-auto justify-center lg:flex-row">
            {navigation.map((anc) => (
              <a
                key={anc.id}
                href={anc.url}
                onClick={() => {
                  openNav ? handleCloseNav() : "";
                }}
                className={`hover:text-color-1 duration-75 relative block font-code text-2xl uppercase text-n-1 transition-colors ${anc.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${anc.url === path.hash ? "z-2 lg:text-n-1 " : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {anc.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={openMobileNav}>
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
