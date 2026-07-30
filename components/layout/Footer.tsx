import Link from "next/link";

import { Container } from "@/components/layout";
import { Text } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Text className="text-sm">
            © {new Date().getFullYear()} Anfas M. All rights reserved.
          </Text>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="https://github.com/Anfas01"
              target="_blank"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/-anfas-m"
              target="_blank"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}