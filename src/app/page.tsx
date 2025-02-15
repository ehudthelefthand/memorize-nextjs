import Board from "@/components/board";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[2rem]">
          The Memerize Game
        </h1>
        <div className="flex max-w-screen-sm flex-wrap gap-4">
          <Board emojis="😊😂🤣😍🥰😎🤪😴" />
        </div>
      </div>
    </main>
  );
}
