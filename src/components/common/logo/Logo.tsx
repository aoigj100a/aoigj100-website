import Image from "next/image";
import NextLink from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center">

      <div className="pl-[32px]">
        <NextLink href={'/'}>
          <Image src={"/icon.svg"} alt={""} width={50} height={50} />
        </NextLink>
      </div>
    </div>
  )
}