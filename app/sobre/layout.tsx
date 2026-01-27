import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function SobreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
