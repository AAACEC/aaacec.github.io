'use client';

import { Black_Ops_One } from 'next/font/google';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { YouTubeEmbed } from '@next/third-parties/google';
import Link from 'next/link';

const blackOpsOne = Black_Ops_One({ subsets: ['latin'], weight: '400' });

export default function CemNossao() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">

      <div className="h-screen border-b-4 border-dashed border-zinc-700 flex flex-col justify-center items-center">

        <div className={`flex flex-col items-center justify-center text-center`}>
          <h1 className={`${blackOpsOne.className} text-7xl md:text-9xl lg:text-[180px] xl:text-[200px] text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-600 transition-opacity duration-1500 delay-300 ease-in-out transform ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            100NOSSÃO
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="p-5 bg-neutral-950 flex items-center justify-center border-4 border-dashed border-neutral-700">
          <Image
            src="/100nossao.webp"
            alt="Logo do 100Nossão"
            width={600}
            height={600}
          />
        </div>

        <div className="order-1 md:order-2 space-y-8 px-2">
          <h2 className={`${blackOpsOne.className} text-5xl md:text-6xl text-white`}>
            O MAIOR <span className="text-red-600">SOM AUTOMOTIVO UNIVERSITÁRIO</span> DO BRASIL
          </h2>

          <div className="flex flex-col items-center md:items-start space-y-6 text-neutral-300 font-light text-lg leading-relaxed">
            <p>
              Um sistema de som de alta potência acoplado numa estrutura de transporte personalizada (originalmente, um carrinho de supermercado).
              Há mais de 20 anos, o 100NOSSÃO é um ícone da cultura universitária da UNICAMP, sendo presença garantida nos eventos da AAACEC e nas melhores festas de Barão Geraldo.
            </p>

            <Link href="https://ig.me/m/100nossao4x4">
              <button className="bg-red-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 nowrap cursor-pointer">
                Quero alugar o 100NOSSÃO
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full px-4 py-24 mb-10">
        <div className="relative mx-auto w-full max-w-[700px] aspect-video">

          <YouTubeEmbed videoid="B9SAgKnNaxw" style="width: 100%" params="controls=0&start=68&end=113&loop=1" />

          <div className="absolute -top-8 -right-4 md:-right-10 bg-red-600 text-white w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center rounded-full border-2 border-dashed border-white transform rotate-12 z-20 shadow-2xl">
            <p className="font-extrabold text-xs md:text-sm tracking-widest mb-1">DESDE 2004</p>
            <p className={`${blackOpsOne.className} text-base md:text-2xl leading-[0.9] text-center px-4`}>
              ENCHENDO<br />O SACO
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
