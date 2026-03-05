'use client';

import Image from "next/image";
import MessageBoard from "@/components/MessageBoard";
import ProcessoSeletivo from "@/components/ProcessoSeletivo";
import Link from "next/link";
import Calendar, { Event } from "@/components/Calendar";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  const events: Event[] = [
    {
      date: new Date("2015-04-05"),
      category: "Produto",
      name: "Término das Vendas do Kit Bixe 2026",
      link: "https://cheers.com.br/pagina/aaacec"
    },
  ];

  return (
    <div>
      <PageTitle
        title="AAACEC"
        subtitle={<>A Atlética da <span className="font-bold">Computação Unicamp</span></>}
      />

      <MessageBoard text="🥳 BEM-VINDES BIXES 026 🥳" />

      <div className="w-full text-center p-10 my-10">
        <p className="text-4xl md:text-6xl xl:text-8xl text-center text-zinc-900 font-medium max-w-6xl mx-auto mb-10">Há <span className="font-extrabold">{new Date().getFullYear() - 1994} anos</span> fomentando o esporte universitário</p>
        <Link href="/sobre" className="text-3xl text-zinc-900 font-medium">Saiba mais ⟶</Link>
      </div>

      <Calendar events={events} />

      <ProcessoSeletivo />

      <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
        <Image
          src="/parcerias/cheers.svg"
          alt="Logo da Cheers"
          width={250}
          height={50}
        />
        <Image
          src="/parcerias/cem.png"
          alt="Logo da Liga CEM"
          width={250}
          height={161}
        />
      </div>
    </div>
  );
}
