import React from "react";
import { cn } from "../../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl group/bento hover:shadow-xl transition duration-300 p-6 sm:p-7 bg-surface border border-line flex flex-col justify-between gap-5 hover:border-terracotta/40",
        className
      )}
    >
      <div className="w-full flex-1 flex flex-col justify-center">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-1 transition duration-200 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          {icon}
          {badge}
        </div>
        <div className="font-serif text-lg font-semibold text-charcoal mb-1.5">
          {title}
        </div>
        <div className="text-xs text-muted leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
