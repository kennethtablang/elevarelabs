import type { Metadata } from "next";
import LegalSheet from "@/components/LegalSheet";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <LegalSheet doc={privacy} />;
}
