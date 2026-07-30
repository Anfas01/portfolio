import { Navbar } from "@/components/layout";
import { Contact, Hero, Journey, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
      </main>
    </>
  );
}