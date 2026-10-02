import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Prevent FontAwesome from adding CSS automatically since Next.js manages it
config.autoAddCss = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA EV — Next-Generation Electric Mobility",
  description: "Engineered for what comes next. Explore the AURA electric vehicle lineup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
