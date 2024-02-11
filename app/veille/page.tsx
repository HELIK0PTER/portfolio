import { Articles } from "@/components/veille-components/Articles";
import { Section } from "@/components/Sections/Global/Section";
import { Hero } from "@/components/Sections/Global/Hero";

export default function Veille() {
  return (
    <>
      <Hero>
        <Section>
          <h1 className={`text-primary-200 text-4xl`}> {`Bitcoin: à l'approche du bullrun`}</h1>
          <p className="text-center">
            {`Le Bitcoin se rapproche d'un bullrun potentiel, marqué par une hausse significative de son
            prix et un intérêt croissant des investisseurs institutionnels..
            Ici, vous trouverez une sélection d'articles et d'informations pertinents sur les signes
            annonciateurs d'un bullrun pour le Bitcoin, les tendances du marché et les conseils pour se préparer à
            cette période de hausse des prix.`}
          </p>
        </Section>
      </Hero>
      <Section>
        <Articles />
      </Section>
    </>
  );
}
