import { ArrowUpRight } from "lucide-react";

import { Badge, Button, Heading, Text } from "@/components/ui";

interface ProjectCardProps {
  index: number;
  title: string;
  tagline: string;
  description: string;
  technologies: readonly string[];
  github: string;
  demo: string;
}

export function ProjectCard({
  index,
  title,
  tagline,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900">
      <p className="text-sm font-medium text-zinc-500">
        {String(index + 1).padStart(2, "0")}
      </p>

      <Badge className="mt-4">Featured Project</Badge>

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

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
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

        {github && (
          <Button variant="ghost" asChild>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        )}
      </div>
    </article>
  );
}