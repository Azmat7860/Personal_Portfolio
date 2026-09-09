import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "Professional experience for Azmat Ullah Khan — roles, companies, and delivery highlights across full-stack and AI product work.",
};

export default function CompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
