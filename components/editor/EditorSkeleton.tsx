"use client";

import { Skeleton } from "@/components/ui/skeleton";

const EditorSkeleton = () => (
  <div className="flex flex-col space-y-3">
    <Skeleton className="h-[350px] w-full" />
  </div>
);

export default EditorSkeleton;
