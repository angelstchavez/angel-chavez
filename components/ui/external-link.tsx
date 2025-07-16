/* eslint-disable @typescript-eslint/no-empty-object-type */
import type React from "react";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available

interface ExternalLinkProps
  extends React.ComponentPropsWithoutRef<typeof ExternalLinkIcon> {}

export default function ExternalLink({
  className,
  ...props
}: ExternalLinkProps) {
  return <ExternalLinkIcon className={cn("h-4 w-4", className)} {...props} />;
}
