import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-Inter' });
const ibmPLexSerif = IBM_Plex_Serif({
  subsets:["latin"],
  weight: "400",
  variable:"--font-ibm-plex-serif"
})

export const metadata: Metadata = {
  title: "My Bank App",
  description: "A Modern Banking App",
  icons:{
    icon: 'icons/icon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPLexSerif.variable}`}>{children}</body>
    </html>
  );
}
