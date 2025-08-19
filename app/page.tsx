import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <h1 className="text-2xl font-semibold">Hi I&apos;m Samuel Glasscock</h1>
        <body>
          <p>This is my initial setup for my site, welcome to the bare bones!</p>
        </body>
      </main>
    </div>
  );
}
