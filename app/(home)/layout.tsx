import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
};

export default function HomeLayout({
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
