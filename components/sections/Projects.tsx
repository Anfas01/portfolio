import { ProjectCard } from "@/components/cards";
import { PageSection } from "@/components/shared";

import { featuredProjects } from "@/content/projects";

export function Projects() {
  return (
    <PageSection
      id="projects"
      title="Featured Projects"
      description="A selection of projects that demonstrate my skills in full-stack development, backend architecture, and modern web technologies."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={index === 0 ? "lg:col-span-2" : ""}
          >
            <ProjectCard
              index={index}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          </div>
        ))}
      </div>
    </PageSection>
  );
}