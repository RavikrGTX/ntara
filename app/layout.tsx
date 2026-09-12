import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0B132B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "NTARA | Skill Intelligence Platform",
    template: "%s | NTARA",
  },
  description:
    "Building India's Future-Ready Generation. NTARA connects Education, Skills, Technology, Government, and Industry through institutional skill intelligence.",
  keywords: [
    "Skill Intelligence",
    "India Education Technology",
    "Future-Ready Workforce",
    "AI Education",
    "NTARA",
  ],
  authors: [{ name: "NTARA" }],
  metadataBase: new URL("https://ntara.ai"),
  openGraph: {
    title: "NTARA | Skill Intelligence Platform",
    description:
      "Building India's Future-Ready Generation through AI-powered skill intelligence, connecting education, government, and industry.",
    siteName: "NTARA",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-brand-blue-subtle selection:text-brand-navy">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}

