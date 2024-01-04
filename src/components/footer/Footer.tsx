import { Logo } from "../common/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-sky-900">
      {/* p-4 md:px-6 md:py-8 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <Logo/>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="#"
          className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
        >
          Licensing
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-sm text-sky-200 hover:underline"
        >
          Contact
        </a>
      </li>
    </ul>
      </div>
      {/* 分隔線 */}
      <hr className="border-pink-500 sm:mx-auto bg-pink-500" />
      <span className="flex items-center text-sm text-sky-50">
        © 2022 . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
