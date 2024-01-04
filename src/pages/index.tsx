import { Section } from "@/components/common/section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <section className=" border-sky-900 border-b-[2px] ">

        <div className="flex ">
          <div className="pt-[400px] pb-[100px] z-20 px-[8px] lg:px-[320px]">

            <h1 className="pl-[80px] lg:pl-[16px] text-left lg:block flex-1 font-bold underline text-pink-300 pb-[16px]">
              <p>Jenny Liou.</p>
              <p>Pleased to meet you.</p>
            </h1>
            <div className="pl-[94px] lg:pl-[32px] text-pink-300">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <p>industry. Lorem Ipsum has been the industry's standard dummy text</p>
              <p>ever since the 1500s, when an unknown printer took a galley of</p>
              <p>type and scrambled it to make a type specimen book. It has</p>
              <p>survived not only five centuries, but also the leap into</p>
              <p>electronic typesetting, remaining essentially unchanged.</p>
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
      <Section>
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
      </Section>
    </main>
  );
}
