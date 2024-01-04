import { Link } from "../link/Link";

export const Menu = () => {
  return (
    <ul className="lg:flex lg:w-unset lg:relative lg:top-[8px] flex-wrap items-center mb-6 absolute right-0 top-[40px] block">
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
  );
};
