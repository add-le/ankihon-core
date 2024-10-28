import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-dvw h-dvh flex-col">
      <Image
        className="rounded-2xl"
        src="images/icons-192.png"
        alt="Ankihon logo"
        width={192 / 1.5}
        height={192 / 1.5}
        priority
      />
      <h1 className="text-zinc-50 text-2xl font-bold text-center mt-5">
        Ankihon
      </h1>
      <h2 className="text-zinc-400 text-base font-bold text-center mt-1">
        Master Japanese, One Flashcard at a Time!
      </h2>
      <div className="mt-10 w-full pl-10 pr-10">
        <Link href="/main/learn">
          <khk-button class="w-full" full variant="accent">
            Get Started 🔥
          </khk-button>
        </Link>
      </div>
    </div>
  );
}
