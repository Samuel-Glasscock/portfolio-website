import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from '@/app/components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelglasscock.dev"),
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
  authors: [{ name: "Samuel Glasscock", url: "https://samuelglasscock.dev" }],
  creator: "Samuel Glasscock",
  publisher: "Samuel Glasscock",
  alternates: { canonical: "/" },
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   siteName: "Samuel Glasscock",
  //   url: "https://samuelglasscock.dev",
  //   title: "Samuel Glasscock — Software Engineer",
  //   description:
  //     "Full-stack engineer building web and data projects.",
  //   images: [{ url: "/og/og-default.png", width: 1200, height: 630 }],
  // },
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

    // 2) Otherwise, check system preference
    const supportsMQ = typeof window.matchMedia === 'function';

    // Detect "no-preference" if supported; else undefined
    const noPref = supportsMQ && window.matchMedia('(prefers-color-scheme: no-preference)').matches;
    const prefersDark = supportsMQ && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = supportsMQ && window.matchMedia('(prefers-color-scheme: light)').matches;

    let theme;
    if (noPref) {
      // 3) If the system expresses no preference, default to dark
      theme = 'dark';
    } else if (prefersDark) {
      theme = 'dark';
    } else if (prefersLight) {
      theme = 'light';
    } else {
      // Fallback when matchMedia isn't available => default to dark
      theme = 'dark';
    }

    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);

    // react to future system changes until user toggles.
    if (supportsMQ) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => {
        if (!localStorage.getItem('theme')) {
          const t = e.matches ? 'dark' : 'light';
          root.classList.toggle('dark', t === 'dark');
          root.setAttribute('data-theme', t);
        }
      };
      // modern browsers
      if (mql.addEventListener) mql.addEventListener('change', handler);
      // legacy
      else mql.addListener(handler); 
    }
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
      <body className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-10">{children}</main>
        <Footer />
      </body>
  </html>
  );
}
