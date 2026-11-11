import React from "react";
import { cn } from "../../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
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
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-300 p-6 bg-surface border border-line flex flex-col justify-between space-y-4 hover:border-terracotta/40",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center justify-between gap-2 mb-2">
          {icon}
          {badge}
        </div>
        <div className="font-serif text-lg font-semibold text-charcoal mb-1">
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
