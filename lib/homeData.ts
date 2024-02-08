export const schoolData = [
  {
    title: "BAC S",
    location: "Lycée Camille Claudel, Vauréal",
    description:
      "Diplôme du Baccalauréat Scientifique, spécialité Informatique, mention assez-bien.",
    date: "2020",
  },
  {
    title: "Licence MIPI - Informatique",
    location: "Université de Cergy-Pontoise, Cergy",
    description:
      "Licence Mathématiques, Informatique, Physique et Ingénierie, spécialité Informatique à partir de la deuxième année.",
    date: "2020 - 2022",
  },
  {
    title: "BTS SIO - SLAM",
    location: "Ecole ESIEE-IT, Cergy",
    description:
      "Brevet de Technicien Supérieur Services Informatiques aux Organisations, spécialité Solutions Logicielles et Applications Métiers.",
    date: "2022 - present",
  },
] as const;

export const proData = [
  {
    title: "Koezio",
    poste: "Game Master - VR",
    description: `Durant ce job étudiant réalisé durant ma deuxième année de Licence informatique, 
                  j'ai eut la possibilité de faire du trouble shooting et de l'accueil clientelle 
                  dans le mileu de la Réalité Virtuelle.`,
    date: "2021 - 2022"
  },
  {
    title: "DB Cargo France",
    poste: "Alternant aux services Informatiques",
    description: `Alternance Réalisée dans le cadre de mon BTS SIO SLAM. Cette première expérience professionelle
                  dans le monde de l'informatique m'enrichis beaucoup.`,
    date: "2022 - aujourd'hui",
    enSavoirPlus: {
      value: true,
      lien: "/entreprise"
    },
  }
]

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "SQL",
  "JQuery",
  "AJAX",
  "Axios",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "NextUI",
  "Git",
  "Python",
  "Django",
  "Java",
] as const;