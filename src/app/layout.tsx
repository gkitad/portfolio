import type { Metadata } from "next";
import "@fontsource/anton/400.css";
import "@fontsource-variable/work-sans/wght.css";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
