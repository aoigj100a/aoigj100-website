import { Section } from "@/components/common/section/Section";
import { HeroSection } from "@/components/homepage/heroSection/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <HeroSection/>
      {/* <Section>
        <h2 className="font-bold underline text-pink-400">技能列表</h2>
        <div>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </Section> */}
      {/* <Section>
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
