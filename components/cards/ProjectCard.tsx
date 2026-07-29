import { ArrowUpRight } from "lucide-react";

import { Badge, Button, Heading, Text } from "@/components/ui";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  technologies: readonly string[];
  github: string;
  demo: string;
}

export function ProjectCard({
  title,
  tagline,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900">
      <Badge>Featured Project</Badge>

      <Heading
        as="h3"
        level={3}
        className="mt-5 transition-colors duration-300 group-hover:text-zinc-300"
      >
        {title}
      </Heading>

      <p className="mt-2 text-sm text-zinc-400">
        {tagline}
      </p>

      <Text className="mt-6">
        {description}
      </Text>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="transition-colors duration-300 group-hover:border-zinc-600"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-8">
        {demo && (
          <Button variant="outline" asChild>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        )}
      </div>
    </article>
  );
}