import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AAACEC",
  description: "Site oficial da Associação Atlética Acadêmica da Ciência e Engenharia de Computação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-white">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${bricolageGrotesque.className} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
