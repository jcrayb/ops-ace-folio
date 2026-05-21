export function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="small-caps mb-3 text-xs font-medium text-accent">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}
