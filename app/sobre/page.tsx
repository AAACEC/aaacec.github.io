import Image from 'next/image';
import PageTitle from '@/components/PageTitle';

export default function Sobre() {
  return (
    <div>
      <PageTitle
        title="SOBRE"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* Section 1: Institutional */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 text-2xl text-zinc-700 leading-relaxed text-justify">
            <p>
              Fundada em 1994, a <span className="font-bold text-zinc-900">AAACEC</span> (Associação Atlética Acadêmica da Ciência e Engenharia de Computação) é a entidade discente do <span className="font-bold text-zinc-900">IC</span> (Instituto de Computação) e da <span className="font-bold text-zinc-900">FEEC</span> (Faculdade de Engenharia Elétrica e de Computação) da UNICAMP
              responsável por promover atividades esportivas, culturais e sociais para
              os estudantes dos cursos de Ciência e Engenharia de Computação.
            </p>
            <p>
              Além de alegrar a vida des computeires com festas, produtos e outros projetos,
              a AAACEC também tem o importante papel de fortalecer a integração e o
              pertencimento da comunidade, sendo um grande pilar da identidade
              computeira da UNICAMP.
            </p>
            <p>
              Na parte esportiva, a AAACEC, junto com a AAARMM (Associação Atlética
              Acadêmica Rubens Murillo Marques), integra a <span className="font-bold text-zinc-900">Liga CEM</span> (composta por discentes da Computação, Estatística e Matemática), que é
              quem organiza os treinos, monta os times e representa a AAACEC em campeonatos universitários.
              Em contrapartida, a AAACEC apoia a Liga CEM institucional e financeiramente.
            </p>
            <p>
              Essa parceria serve para aumentar o número de atletas e, consequentemente, a
              competitividade dos times, viabilizando a participação robusta da
              Computação Unicamp em importantes campeonatos universitários, como o <span className="font-bold text-zinc-900">Intercomp</span>,
              garantindo que nós tenhamos tanto atletas preparados quanto uma
              torcida vibrante fora de campo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
