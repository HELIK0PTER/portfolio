const PERSO = 'PERSO'
const PRO = 'PRO'
const SCOLAIRE = 'SCOLAIRE'

const imgPath = '/realisations'

export const realisationsData = [
  {
    value: PERSO,
    title: 'Clone de Aternos',
    description: `Projet qui m'a servi à approfondir mes compétences en Nextjs. Il s'agit d'un clone du site Aternos, 
                  un site qui permet de créer un serveur Minecraft gratuitement. 
                  Je n'ai essayé de reproduire que la page d'accueil.`,
    link: '/aternos',
    img: imgPath + '/aternos/Aternos.png',
    outils: ['Nextjs', 'Tailwindcss', 'Typescript'],
    personnes: 1,
  },
  {
    value: SCOLAIRE,
    title:'Gaming Explorer',
    description: `Projet scolaire qui consiste à créer un site web qui permet de trouver des jeux vidéos à l'aide
                  d'une API. Nous avons utilisé l'API RAWG pour ce projet.`,
    link: '/gaming-explorer',
    img: imgPath + '/gamingExplorer/gamingExplorer.png',
    outils: ['Nextjs', 'Tailwindcss', 'Typescript'],
    personnes: 3,
  },
  {
    value: PRO,
    title: "Montage d'une baie de brassage",
    description: `Projet professionnel qui consiste à monter une baie de brassage dans une des agences de l'entreprise.
                  J'ai simplement été chargé de monter les équipements dans la baie. (branchement, fixation, etc...)`,
    link: '/baie-brassage',
    img: imgPath + '/baieBrassage/BaieBrassage.jpg',
    annee: 1,
  },
  {
    value: PRO,
    title: "Montage d'une baie de brassage",
    description: `Projet professionnel qui consiste à monter une baie de brassage dans une des agences de l'entreprise.
                  J'ai simplement été chargé de monter les équipements dans la baie. (branchement, fixation, etc...)`,
    link: '/baie-brassage',
    img: imgPath + '/baieBrassage/BaieBrassage.jpg',
    annee: 1,
  },
  {
    value: PRO,
    title: "Montage d'une baie de brassage",
    description: `Projet professionnel qui consiste à monter une baie de brassage dans une des agences de l'entreprise.
                  J'ai simplement été chargé de monter les équipements dans la baie. (branchement, fixation, etc...)`,
    link: '/baie-brassage',
    img: imgPath + '/baieBrassage/BaieBrassage.jpg',
    annee: 2,
    outils: ['Nextjs', 'Tailwindcss', 'Typescript'],
  },
]