import { PageSection } from "@/components/shared/PageSection";
import { Button, Text } from "@/components/ui";

export function Contact() {
  return (
    <PageSection
      id="contact"
      title="Let's Build Something Great Together"
      description="I'm always interested in discussing new opportunities, collaborating on exciting projects, and continuously learning new technologies."
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-900/50 p-10 text-center">
        <Text className="mx-auto max-w-2xl">
          Whether you have an opportunity, a project idea, or simply want to
          connect, I&apos;d love to hear from you. Let&apos;s build something meaningful
          together.
        </Text>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <a href="mailto:anfas010101@gmail.com">
              Get In Touch
            </a>
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
      </div>
    </PageSection>
  );
}