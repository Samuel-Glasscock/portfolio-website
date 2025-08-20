"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-primary ${active ? "text-primary font-medium" : "text-foreground"}`}
    >
      {children}
    </Link>
  );
}