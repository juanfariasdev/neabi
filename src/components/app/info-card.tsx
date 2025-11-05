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
    <Card className={cn("rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1", className)}>
      <CardContent className="p-8">
        <div className={containerClasses}>
          <div className={iconContainerClasses}>
            {icon}
          </div>
          <div>
            <h3 className={cn("font-headline text-xl font-semibold mb-3 text-foreground leading-snug", titleClassName)}>
              {title}
            </h3>
            <p className={cn("text-base text-muted-foreground leading-relaxed", descriptionClassName)}>
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
