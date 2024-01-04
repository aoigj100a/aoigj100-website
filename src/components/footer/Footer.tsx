import { Logo } from "../common/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      {/* p-4 md:px-6 md:py-8 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <Logo/>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
        >
          Licensing
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          Contact
        </a>
      </li>
    </ul>
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
