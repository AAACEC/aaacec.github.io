import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100Nossão',
};

export default function CemNossaoLayout({
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