import Link from "next/link";

import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-zinc-300"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <Button size="sm">
            Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
}