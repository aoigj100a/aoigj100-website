import { Link } from "../common/link/Link";
import { Logo } from "../common/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-sky-900">
      {/* p-4 md:px-6 md:py-8 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <Logo />
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <Link href="/" linkName="回首頁" />
          </li>
          <li>
            <Link href="/about" linkName="關於我" />
          </li>
          <li>
            <Link
              href="https://aoigj100.medium.com/"
              linkName="部落格"
              target="_blank"
            />
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
            <Link
              href="https://portaly.cc/aoigj100"
              linkName="聯絡資訊"
              target="_blank"
            />
          </li>
        </ul>
      </div>
      {/* 分隔線 */}
      <hr className="border-pink-500 sm:mx-auto bg-pink-500" />
      <span className="flex items-center text-sm text-sky-50">
        © 2024 . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
