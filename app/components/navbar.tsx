import ThemeToggle from "@/app/components/theme-toggle";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-medium hover:text-primary">Samuel Glasscock</Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/projects" className="hover:text-primary">Projects</Link>
          <Link href="/about" className="hover:text-primary">About Me</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
