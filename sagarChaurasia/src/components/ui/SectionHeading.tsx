interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-surface-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-surface-500 dark:text-surface-400 text-lg">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-12 rounded-full bg-primary-500" />
    </div>
  );
}
