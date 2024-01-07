import Image from "next/image";
import { HeroSection } from "@/components/homepage/heroSection/HeroSection";
import { SkillSection } from "@/components/homepage/skillsSection/SkillsSecion";
import { Section } from "@/components/common/section/Section";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <HeroSection />
      <SkillSection/>
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
