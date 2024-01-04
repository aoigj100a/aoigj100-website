import { Logo } from "../common/logo/Logo";
import { Menu } from "../common/menu/Menu";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      {/* p-4 md:px-6 md:py-8 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <Logo/>
        <Menu/>
      </div>
      {/* 分隔線 */}
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
