import Image from "next/image";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-semibold">Hi, I&apos;m Samuel Glasscock</h1>
      <p>Software engineer. I build reliable and clean systems.</p>
    </section>
  );
}
