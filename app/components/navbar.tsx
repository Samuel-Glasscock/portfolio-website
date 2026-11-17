import Container from "@/app/components/container";
import NavItem from "@/app/components/nav-item";
import ThemeToggle from "@/app/components/theme-toggle";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <div className="flex items-center justify-between gap-4 py-2.5">
          <Link
            href="/"
            className="font-stretch-[70%] text-[1.375rem] leading-none font-extrabold transition-colors hover:text-primary"
          >
            <span className="sm:hidden" aria-hidden="true">SG</span>
            <span className="max-sm:sr-only">Samuel Glasscock</span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <nav aria-label="Main" className="flex items-center gap-4 sm:gap-6">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/about">About</NavItem>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
