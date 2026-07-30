import { Contact, Hero, Journey, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
    </main>
  );
}