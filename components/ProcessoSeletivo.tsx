import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function ProcessoSeletivo() {
  return (
    <div className="w-full mt-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto p-10 py-20 flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl md:text-5xl font-black mb-6 tracking-tight">
            Seja um de nós
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0">
            As inscrições para o Processo Seletivo 2026.1 da AAACEC estão abertas! Dê uma olhada no vídeo a seguir para descobrir tudo o que a Atlética tem a oferecer.
          </p>
          <button className="mt-6 px-6 py-3 text-white text-zinc-900 font-extrabold rounded-lg bg-white transition-colors duration-200">
            <Link href="https://forms.gle/hWmAvjYZfXmwxxhr6">
              Quero me inscrever
            </Link>
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            <YouTubeEmbed
              videoid="m_dn8frveyg"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
