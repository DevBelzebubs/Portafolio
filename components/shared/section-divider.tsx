interface SectionDividerProps {
  refId: string;
  title: string;
  subtitle: string;
}

export default function SectionDivider({ refId, title, subtitle }: SectionDividerProps) {
  return (
    <div className="col-span-1 md:col-span-12 mt-12 mb-4 pt-8 border-t border-outline-variant/10 snap-start">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-primary-container/30 to-transparent"></div>
        <div className="flex flex-col items-end">
          <span className="font-mono text-tertiary text-[10px] tracking-widest opacity-80">{refId}</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface tracking-tight uppercase">{title}</h2>
          <span className="font-mono text-[9px] text-outline tracking-widest">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
