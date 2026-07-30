import { Heading, Text } from "@/components/ui";
import { PageSection } from "@/components/shared/PageSection";

const journey = [
  {
    period: "2025",
    title: "Started Learning Web Development",
    description:
      "Began my journey as a self-taught developer, learning the fundamentals of modern web development through consistent practice and hands-on projects.",
  },
  {
    period: "Today",
    title: "Building Full-Stack Applications",
    description:
      "Building production-style applications with Next.js, TypeScript, Node.js, MongoDB, and modern development practices while continuously improving backend architecture, performance, and problem-solving skills.",
  },
  {
    period: "Next Goal",
    title: "AI Engineering",
    description:
      "Expanding into AI engineering by strengthening computer science fundamentals, exploring machine learning, and building intelligent applications powered by AI.",
  },
] as const;

export function Journey() {
  return (
    <PageSection
      id="journey"
      title="Engineering Journey"
      description="A timeline of my learning journey and where I'm heading next."
    >
      <div className="relative border-l border-zinc-800 pl-8">
        <div className="space-y-12">
          {journey.map((item) => (
            <article key={item.title} className="relative">
              <div className="absolute -left-9.25 top-1 h-3 w-3 rounded-full border-2 border-zinc-950 bg-white" />

              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                {item.period}
              </p>

              <Heading as="h3" level={3} className="mt-2">
                {item.title}
              </Heading>

              <Text className="mt-4 max-w-2xl">
                {item.description}
              </Text>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}