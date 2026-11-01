// src/app/not-found.tsx

import Button from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-32 text-center">
      <h1 className="text-6xl font-medium">Oops, we have a bug...</h1>
      <Image
        src="https://cdn.pixabay.com/photo/2025/11/13/11/02/angry-bug-9954486_1280.jpg"
        alt="Angry bug"
        height={250}
        width={250}
        className="flex justify-self-center rounded-full m-10"
      />
      <p className="mt-4 text-lg text-ink/80">
        This page has wandered off to play. Let&apos;s take you back home.
      </p>
      <Button size="sm" href="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
