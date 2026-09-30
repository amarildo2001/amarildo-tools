import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amarildotools.com"),
  title: "Amarildo Tools — Free Online Calculators, Converters & Tools",
  description: "Use fast, accurate calculators and converters for everyday math, finance, business, construction, and development. Free and private.",
  keywords: ["free online calculators", "percentage calculator", "unit converter", "finance calculator", "business tools"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Amarildo Tools — Clear tools for everyday answers",
    description: "Fast, accurate calculators and converters with no sign-up.",
    type: "website",
  },
  other: {
    "theme-color": "#1463ff",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
