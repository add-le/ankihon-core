export default function Flashcard({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div
        className={`${className} border border-zinc-700 rounded-lg h-[80dvh] w-[80dvw] md:w-[65dvw] bg-zinc-900`}
      >
        {children}
      </div>
    </>
  );
}
