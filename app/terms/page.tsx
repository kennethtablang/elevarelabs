import type { Metadata } from "next";
import LegalSheet from "@/components/LegalSheet";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: terms.metaTitle,
  description: terms.metaDescription,
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <LegalSheet doc={terms} />;
}
