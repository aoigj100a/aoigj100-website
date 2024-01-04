import NextLink from "next/link";

type NextLinkProps = {
  linkName: string;
  href: string;
  target?: string;
};

export const Link = ({ linkName, href, target }: NextLinkProps) => {
  return (
    <NextLink
      href={href}
      className="mr-4 text-sm text-sky-200 hover:underline md:mr-6"
      target={target}
    >
      {linkName}
    </NextLink>
  );
};
