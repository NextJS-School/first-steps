export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative grid place-content-center w-full h-full bg-zinc-900">
      <p className="absolute top-0 left-0 text-sm text-center bg-zinc-950 px-2 py-1 rounded text-white">GeneralLayout ✅</p>
      {children}
    </section>
  );
}
