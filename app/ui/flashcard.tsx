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
        className={`${className} border border-zinc-700 rounded-lg h-full bg-zinc-900`}
      >
        {children}
      </div>
    </>
  );
}
