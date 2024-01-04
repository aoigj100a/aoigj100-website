import { Section } from "@/components/common/section/Section";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <Section>
        <div className="flex">
          <h1 className="flex-1 font-bold underline text-pink-400 pt-[300px] pb-[300px]">
            Jenny Liou. Pleased to meet you.
          </h1>
          <div className="flex-1 text-white bg-red-300">圖片</div>
        </div>
      </Section>
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
