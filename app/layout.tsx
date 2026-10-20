import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from '@/app/components/footer';
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground font-sans antialiased min-h-screen`}>
        <Navbar />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
  </html>
  );
}
