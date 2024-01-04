import { Logo } from "../common/logo/Logo";
import { Menu } from "../common/menu/Menu";

const Header = () => {
  return (
    <header className="bg-slate-100">
      {/* p-4 md:px-6 md:py-8 */}
      <div className="flex justify-between items-center">
        <Logo />
        <nav className="flex items-center justify-between flex-wrap  ">
          <div className="block lg:hidden">
            <button className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
              <svg
                className="fill-current h-6 w-6 text-gray-700"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="lg:flex hidden">
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
