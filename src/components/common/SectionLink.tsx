"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLinkProps = {
  sectionId: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Client navigation to `/#section` without duplicated hashes. */
export default function SectionLink({
  sectionId,
  children,
  className,
  style,
}: SectionLinkProps) {
  const router = useRouter();
  const href = sectionId === "hero" ? "/" : `/#${sectionId}`;

  return (
    <Link
      href={href}
      className={cn(className)}
      style={style}
      onClick={(event) => {
        event.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </Link>
  );
}
