import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samiullah Khan — Developer & Curious Mind",
  description:
    "Computer Science student in Pakistan, building thoughtful software with C++, Python, and the web. Explore my journey, skills, and problem-solving practice.",
  openGraph: {
    title: "Samiullah Khan — Developer & Curious Mind",
    description:
      "Thoughtful code. Meaningful impact. A personal portfolio by Samiullah Khan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
