import { Link } from "../common/link/Link";
// import { Logo } from "../common/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-sky-900">
      {/* 分隔線 */}
      <hr className="border-pink-500  bg-pink-500" />
      {/* p-4 md:px-6 md:py-8 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        {/* <Logo /> */}
        <ul className="flex flex-wrap items-center  justify-center pb-6 pt-6 sm:pb-0 sm:pt-0">
          <li>
            <Link href="/" linkName="回首頁" />
          </li>
          <li>
            <Link
              href="https://www.cakeresume.com/s--d6XTXjnKaX_REa8KLLKO4Q--/c587fc"
              linkName="我的簡歷"
              target="_blank"
            />
          </li>
          <li>
            <Link
              href="https://aoigj100.medium.com/"
              linkName="部落格"
              target="_blank"
            />
          </li>
          <li>
            <Link
              href="https://portaly.cc/aoigj100"
              linkName="社群連結"
              target="_blank"
            />
          </li>
        </ul>
      </div>

      <span className="flex items-center justify-center text-sm text-sky-200 h-full pb-6 pt-6 sm:pb-0 sm:pt-0">
        © 2024 . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
