import Image from "next/image";

export const HeroSection = () => {
  return (
    <section>
      <div className="flex ">
        <div className="pt-[300px] pb-[100px] z-10 px-[8px] lg:px-[320px]">
          <h1 className="pl-[40px] lg:pl-[16px] text-left lg:block flex-1 font-bold underline text-pink-300 pb-[24px]">
            <p className="tracking-wide">Jenny Liou.</p>
            <p className="lg:block hidden tracking-wide ">Pleased to meet you.</p>
          </h1>
          <div className="lg:pl-[32px] text-pink-300">
            <p className="tracking-wider">
              畢業於國立雲林科技大學數位媒體設計系，
            </p>
            <p className="tracking-wider">是一位設計背景的前端工程師</p>
            <p className="tracking-wider">
              擁有 2 年前端工作經驗，專長為網頁前端，開發跨平台網站、串接功能，
            </p>
            <p className="tracking-wider">致力創造最好的使用者體驗。</p>
            <br />
            <p className="tracking-wider">
              尋找<b className="font-semibold">前端開發</b>相關之工作職位，
            </p>
            <p className="tracking-wider">
              願意學習後端技能，爭取全端工程師職位。
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 text-white justify-end">
          <Image
            className="absolute"
            src="/bg-1.png"
            width={1200}
            height={300}
            alt="Picture"
          />
        </div>
        <Image
          className="absolute -z-5"
          src="/bg-2.png"
          width={600}
          height={500}
          alt="Picture"
        />
      </div>
    </section>
  );
};
