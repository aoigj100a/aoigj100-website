import { Link } from "../link/Link";

export const Menu = () => {
  return (
    <ul className="lg:bg-transparent lg:w-full w-[320px] bg-sky-900 lg:flex lg:w-unset lg:relative lg:top-[8px] flex-wrap items-center mb-6 absolute right-0 top-[60px] block">
      <li className="lg:p-0 p-[16px]">
        <Link href="/" linkName="回首頁" isMenu={true}/>
      </li>
      <li className="lg:p-0 p-[16px]">
        <Link
          href="https://www.cakeresume.com/s--d6XTXjnKaX_REa8KLLKO4Q--/c587fc"
          linkName="我的簡歷"
          target="_blank"
          isMenu={true}
        />
      </li>
      <li className="lg:p-0 p-[16px]">
        <Link
          href="https://aoigj100.medium.com/"
          linkName="部落格"
          target="_blank"
          isMenu={true}
        />
      </li>
      <li className="lg:p-0 p-[16px]">
        <Link
          href="https://portaly.cc/aoigj100"
          linkName="社群連結"
          target="_blank"
          isMenu={true}
        />
      </li>
    </ul>
  );
};
