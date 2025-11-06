import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant?: "top-icon" | "side-icon";
}

export function InfoCard({
  icon,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  variant = "top-icon",
}: InfoCardProps) {

  const containerClasses = cn(
    variant === 'side-icon' && "flex items-start gap-6",
    variant === 'top-icon' && "flex flex-col"
  );
  
  const iconContainerClasses = cn(
    variant === 'top-icon' && "mb-5"
  );

  return (
    <Card className={cn("p-8 rounded-lg border-0 border-l-4 border-gold flex flex-col transition-all duration-smooth hover:shadow-lg hover:-translate-y-2 shadow-md", className)}>
          <div className={iconContainerClasses}>
            {icon}
          </div>
          <div>
            <h3 className={cn("font-headline text-foreground font-display font-bold text-2xl md:text-3xl mb-4 leading-tight", titleClassName)}>
              {title}
            </h3>
            <p className={cn("font-sans text-base leading-relaxed flex-grow opacity-95", descriptionClassName)}>
              {description}
            </p>
          </div>

    
    </Card>
  );
}
