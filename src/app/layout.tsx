import type { Metadata } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Jaimez | IT Support & AI",
  description:
    "IT Support Specialist with 5+ years of enterprise experience, building AI agents for IT operations. Based in Round Rock, TX, open to remote roles in AI and IT.",
  openGraph: {
    title: "Anthony Jaimez | IT Support & AI",
    description: "IT Support Specialist with 5+ years of enterprise experience, building AI agents for IT operations.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
