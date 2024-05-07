import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'], weight: ['400', '700'], variable: '--font-ibm-plex-serif'
})
export const metadata: Metadata = {
  title: "Data Bank",
  description: "Data Bank is your go to for investment",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
