import { Badge } from "@/components/ui";
import { PageSection } from "@/components/shared";

import { skills } from "@/content/skills";

export function Skills() {
  return (
    <PageSection
      id="skills"
      title="Skills & Technologies"
      description="Technologies I use to build modern, scalable applications."
    >
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="px-4 py-2 text-sm transition-colors duration-300 hover:border-zinc-600"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </PageSection>
  );
}