import NextLink from "next/link";

type NextLinkProps = {
  linkName: string;
  href: string;
  target?: string;
  isMenu?: boolean;
};

export const Link = ({ linkName, href, target, isMenu }: NextLinkProps) => {
  return (
    <NextLink
      href={href}
      className=" mr-4 text-sm text-sky-200 hover:underline md:mr-6"
      target={target}
    >
      <span className={`${isMenu && "text-[32px] lg:text-[16px]"}`}>
        {linkName}
      </span>
    </NextLink>
  );
};
