import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12 flex flex-col items-center", className)}>
      <h2 className={cn("font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
