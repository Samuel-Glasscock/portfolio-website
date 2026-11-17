"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      // aria-current tells assistive tech which page this is; the colour and underline tell everyone else
      aria-current={active ? "page" : undefined}
      className={`border-b-[3px] py-0.5 font-stretch-[86%] font-semibold transition-colors hover:text-primary ${active ? "border-primary text-primary" : "border-transparent text-foreground"}`}
    >
      {children}
    </Link>
  );
}
