import { Section } from "@/components/common/section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <section className="">

        <div className="flex ">
          <div className="pt-[400px] pb-[100px] z-10 px-[8px] lg:px-[320px]">

            <h1 className="pl-[40px] lg:pl-[16px] text-left lg:block flex-1 font-bold underline text-pink-300 pb-[24px]">
              <p>Jenny Liou.</p>
              <p>Pleased to meet you.</p>
            </h1>
            <div className="lg:pl-[32px] text-pink-300">
              <p>畢業於國立雲林科技大學數位媒體設計系，</p>
              <p>是一位設計背景的前端工程師</p>
              <p>擁有 2 年前端工作經驗，專長為網頁前端開發跨平台網站、串接功能，致力創造最好的使用者體驗。</p>
              <br />
              <p>尋找前端開發相關之工作職位，願意學習後端技能，爭取全端工程師職位。</p>
              <p>尋找前端開發相關之工作職位，</p>
              <p>願意學習後端技能，爭取全端工程師職位。</p>
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
      {/* <Section>
        <h2 className="font-bold underline text-pink-400">技能列表</h2>
      </Section>
      <Section>
        <h2 className="font-bold underline text-pink-400">作品集</h2>
      </Section>
      <Section>
        <h2 className="font-bold underline text-pink-400">常見問題</h2>
      </Section>
      <Section>
        <h2 className="font-bold underline text-pink-400">聯絡我！</h2>
      </Section> */}
    </main>
  );
}
