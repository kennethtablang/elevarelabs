import type { Metadata } from "next";
import LegalSheet from "@/components/LegalSheet";
import { accessibility } from "@/content/legal";

export const metadata: Metadata = {
  title: accessibility.metaTitle,
  description: accessibility.metaDescription,
  alternates: { canonical: "/accessibility" },
};

export default function Page() {
  return <LegalSheet doc={accessibility} />;
}
