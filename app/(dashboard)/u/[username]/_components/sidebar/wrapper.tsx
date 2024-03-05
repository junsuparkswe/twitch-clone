"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useCreatorSidebar();

  return (
    <aside
      className={cn(
        "fixed left-0 z-50 flex h-full flex-col border-r border-[#2d2e35] bg-background lg:w-60 w-[70px]",
        collapsed && "lg:w-[70px]",
      )}
    >
      {children}
    </aside>
  );
};
