import { useEffect, useState } from "react";
import { Logo } from "../common/logo/Logo";
import { Menu } from "../common/menu/Menu";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  useEffect(() => {
    // min-width: 1024px
    if (window.innerWidth > 1024) {
      setIsOpenMenu(true);
    }else{
      setIsOpenMenu(false);
    }
  }, []);

  const openMenuHandler = ()=>{
    setIsOpenMenu(!isOpenMenu)
    console.log('Menu button clicked');
  }

  return (
    <header className="relative">
      <div className="fixed backdrop-blur-sm w-full shadow-lg bg-sky-900/[.8] h-[80px] z-50">
      {/* p-4 md:px-6 md:py-8 */}
      <div className="flex justify-between items-center h-full">
        <Logo />
        <nav className="relative flex items-center justify-between flex-wrap">
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 text-white border-white hover:text-white hover:border-white pr-[24px]"
              onClick={() => openMenuHandler()}
            >
              <svg
                className="fill-current h-6 w-6 text-sky-50"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* <div className="lg:flex hidden"> */}
          {/* {isOpenMenu &&  <Menu />} */}
          <div className={`${isOpenMenu ? "block" : "lg:flex hidden"}`}>
            <Menu />
          </div>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
