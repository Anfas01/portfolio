import { Navbar } from "@/components/layout";
import { Hero, Projects } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}