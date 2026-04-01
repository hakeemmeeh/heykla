type StoryChapterProps = {
  eyebrow: string;
  title: string;
  blurb: string;
  align?: "left" | "center";
  accent?: "gold" | "ember";
};

export function StoryChapter({ eyebrow, title, blurb, align = "left", accent = "gold" }: StoryChapterProps) {
  const titleClass = accent === "ember"
    ? "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl gradient-ember-text-wide"
    : "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-tactical text-xs font-semibold uppercase tracking-[0.34em] text-khaki">
        {eyebrow}
      </p>
      <h2 className={titleClass}>{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{blurb}</p>
    </div>
  );
}
