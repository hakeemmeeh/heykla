type StoryChapterProps = {
  eyebrow: string;
  title: string;
  blurb: string;
  align?: "left" | "center";
  accent?: "rose" | "purple";
};

export function StoryChapter({ eyebrow, title, blurb, align = "left", accent = "rose" }: StoryChapterProps) {
  const titleClass = accent === "rose"
    ? "mt-4 font-premium text-3xl font-black tracking-tight sm:text-5xl gradient-rose-text-wide italic uppercase"
    : "mt-4 font-premium text-3xl font-black tracking-tight sm:text-5xl uppercase";

  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">
        {eyebrow}
      </p>
      <h2 className={titleClass}>{title}</h2>
      <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{blurb}</p>
    </div>
  );
}
