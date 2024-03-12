const PERSO = 'PERSO'
const PRO = 'PRO'
const SCOLAIRE = 'SCOLAIRE'

const imgPath = '/realisations'

export const realisationsData = [
  {
    title: 'Clone de Aternos',
    description: `Projet qui m'a servi à approfondir mes compétences en Nextjs. Il s'agit d'un clone du site Aternos, 
                  un site qui permet de créer un serveur Minecraft gratuitement. 
                  Je n'ai essayé de reproduire que la page d'accueil.`,
    link: '/aternos',
    img: imgPath + '/aternos/Aternos.png',
    value: PERSO,
    outils: ['Nextjs', 'Tailwindcss', 'Typescript']
  },
]