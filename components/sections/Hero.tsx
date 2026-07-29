import { Badge, Button, Heading, Text } from "@/components/ui";
import { Container, Section } from "@/components/layout";

import { skills } from "@/content/skills";
import { stats } from "@/content/stats";
import { Stat } from "@/components/ui";

export function Hero() {
  return (
    <Section id="home" className="pt-40">
      <Container>
        <div className="max-w-5xl">
          <Badge>Self-Taught Full-Stack Developer</Badge>

          <Heading
            as="h1"
            level={1}
            className="mt-6"
          >
            Building software that lasts.
            <br />
            Growing into AI Engineering.
          </Heading>

          <Text className="mt-8 max-w-2xl">
            Self-taught full-stack developer focused on building scalable web
            applications with clean architecture, modern technologies, and
            thoughtful user experiences. Continuously learning backend
            engineering while growing toward AI Engineering.
          </Text>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="/resume/Anfas_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 gap-10 border-t border-zinc-800 pt-10">
            {stats.map((stat) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}