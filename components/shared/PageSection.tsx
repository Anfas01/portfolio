import { ReactNode } from "react";

import { Container, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

interface PageSectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function PageSection({
  id,
  title,
  description,
  children,
}: PageSectionProps) {
  return (
    <Section id={id}>
      <Container>
        <div className="max-w-3xl space-y-4">
          <Heading as="h2" level={2}>
            {title}
          </Heading>

          {description && (
            <Text>{description}</Text>
          )}
        </div>

        <div className="mt-14">
          {children}
        </div>
      </Container>
    </Section>
  );
}