import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Rajdhani } from "next/font/google";
import { PageLoader } from "@/components/haikal/PageLoader";
import { SmoothScroll } from "@/components/haikal/SmoothScroll";
import { haikal } from "@/lib/haikal";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const tactical = Rajdhani({
  variable: "--font-tactical",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const premium = Playfair_Display({
  variable: "--font-premium",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haikalsecurity.com"),
  title: {
    default: `${haikal.wordmark} — ${haikal.tagline}`,
    template: `%s · ${haikal.wordmark}`,
  },
  description: `${haikal.name}: elite physical security, executive protection, events, and CCTV consulting. Licensed, insured, 24/7 command.`,
  openGraph: {
    title: `${haikal.wordmark} — Elite physical security`,
    description: haikal.tagline,
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
      className={`${display.variable} ${body.variable} ${tactical.variable} ${premium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>
          <PageLoader>{children}</PageLoader>
        </SmoothScroll>
      </body>
    </html>
  );
}
