import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from '@/app/components/footer';
import { siteUrl } from "@/lib/site";

// One variable font file covers every weight; `axes: ["wdth"]` also includes the
// width axis, which is what lets headings be condensed (font-stretch in CSS).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title : {
    default: "Samuel Glasscock - Software Engineer",
    template: "%s | Samuel Glasscock",
  },
  description: "Portfolio, projects, interests",
  keywords : [
    "Samuel Glasscock", 
    "software engineer",
    "full stack",
    "UVA",
    "portfolio",
    "dev"
  ],
  authors: [{ name: "Samuel Glasscock", url: siteUrl }],
  creator: "Samuel Glasscock",
  publisher: "Samuel Glasscock",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// we want to do this before painting to avoid flashing
const themeInitScript = `
(function () {
  try {
    const root = document.documentElement;
    // 'light' | 'dark' | null
    const stored = localStorage.getItem('theme');

    // 1) If the user has chosen, honor it
    if (stored === 'light' || stored === 'dark') {
      root.classList.toggle('dark', stored === 'dark');
      root.setAttribute('data-theme', stored);
      return;
    }

    // 2) Otherwise follow the system, defaulting to dark unless it explicitly prefers light
    const apply = (theme) => {
      root.classList.toggle('dark', theme === 'dark');
      root.setAttribute('data-theme', theme);
    };
    const light = window.matchMedia('(prefers-color-scheme: light)');
    apply(light.matches ? 'light' : 'dark');

    // 3) React to future system changes until the user picks a theme
    light.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) apply(e.matches ? 'light' : 'dark');
    });
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Avoid flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Help form controls pick correct defaults */}
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className={`${archivo.variable} bg-background text-foreground font-sans text-[1.0625rem] leading-[1.6] antialiased min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
  </html>
  );
}
