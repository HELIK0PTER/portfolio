const PERSO = 'PERSO'
const PRO = 'PRO'
const SCOLAIRE = 'SCOLAIRE'

const imgPath = '/realisations'

export const realisationsData = [
  {
    value: SCOLAIRE,
    title:'Gaming Explorer',
    description: `Projet scolaire qui consiste à créer un site web qui permet de trouver des jeux vidéos à l'aide
                  d'une API. Nous avons utilisé l'API RAWG pour ce projet.`,
    link: '/gaming-explorer',
    website : 'https://www.gamingexplorer.fr/',
    img: imgPath + '/gamingExplorer/gamingExplorer.png',
    outils: ['Nextjs', 'React', 'Tailwindcss', 'Typescript', 'FireBase'],
    personnes: 3,
  },
  {
    value: SCOLAIRE,
    title: "Projet Rugby",
    description: `Projet de creation d'une API ORM avec Django pour le site d'une compétition de rugby.
                  L'API avait son propre site web, et le site de la compétition servait de billetterie.
                  On devait aussi coder la billetterie avec comme contrainte d'affichage le fait que ce
                  soit une page "mobile first" c'est a dire un affichage mobile.
                  `,
    link: '/projet-rugby',
    img: imgPath + '/projetRugby/ProjetRugby.png',
    outils: ["Django", "Python", "SQL", "Figma", "Git", "Jira", "Nextjs", "Tailwindcss", "Typescript"],
  },
  {
    value: SCOLAIRE,
    title: "Motorized Wide Area",
    description: `Projet scolaire qui consiste à créer une application pour une entreprise de location de voitures.
                  L'application permet de gérer les locations, les clients, les voitures, etc...
                  Le projet est encore en cours de développement application n'est encore disponible mais nous avons déjà
                  créé la base de donnée de test.`,
    link: '/motorized-wide-area',
    img: imgPath + '/motorizedWideArea/MotorizedWideArea.png',
    outils: ["Java", "JavaFX", "MySQL", "Figma", "Git", "Jira"],
    personnes: 3,
  },
  {
    value: PERSO,
    title: "Tati Lissages",
    description: `J'ai créé ce site web pour ma mère. Il s'agit d'un site vitrine
                  qui présente ses services, ses tarifs, etc... car ma mère est coiffeuse
                  à son compte. A noter que le site est toujours en développement. (j'ai pour projet d'améliorer ce site en y ajoutant un système de prise de rendez-vous
                  et un système de paiement en ligne)`,
    link: '/tati-lissages',
    website : 'https://www.tati-lissages.vercel.app/',
    img: imgPath + '/tatiLissages/TatiLissages.png',
    outils: ['Nextjs', 'React', 'Tailwindcss', 'Typescript', 'Figma', 'Git', 'Vercel'],
  },
  {
    value: PRO,
    title: "Montage d'une baie de brassage",
    description: `Mission professionnelle qui consiste à monter une baie de brassage dans une des agences de l'entreprise.
                  `,
    link: '/baie-brassage',
    img: imgPath + '/baieBrassage/BaieBrassage.jpg',
    personnes: 2,
    annee: 1,
  },
  {
    value: PRO,
    title: "Travail sous Oracle ApEx",
    description: `Projet professionnel qui consiste à mettre en place un serveur dans une des agences de l'entreprise.
                  J'ai simplement été chargé de monter les équipements dans la baie. (branchement, fixation, etc...)`,
    link: '/sql-vba',
    img: imgPath + '/sql-vba/interface-apex.png',
    outils: ["VBA", "SQL", "Excel", "Oracle ApEx"],
    annee: 1,
  },
  {
    value: PRO,
    title: "Gestion de la flotte informatique",
    description: `Mise a jour et maintenance de la base des équipements informatiques de l'entreprise.`,
    link: '/gestion-flotte-informatique',
    img: imgPath + '/gestion-flotte-informatique/accueil-albatross.png',
    outils: ["Excel", "Oracle ApEx", "Logiciel interne sous Oracle"],
    annee: 1,
  },
  {
    value: PRO,
    title: "Traitement des demandes des utilisateurs et interventions a distance ou sur site",
    description: `Traitement des demandes des utilisateurs de l'entreprise. N'ayant pas d'ITSM, nous utilisions Outlook.
                  (création de compte, commande de logiciels/matériels, interventions sur les postes etc...)`,
    link: '/traitement-demandes-utilisateurs',
    img: imgPath + '/traitement-demandes-utilisateurs/classes-repartition.png',
    outils: ["Outlook", "Autres logiciels internes", "Notion"],
    annee: 1,
  },
  {
    value: PRO,
    title: "Migration de données du wiki interne vers le nouveau wiki",
    description: `Le nouveau wiki étant un nouveau site avec sa propre structure, je travaille aussi
                  sur la restructuration des données pour qu'elles soient plus claires et plus faciles à trouver.
                  (réunions avec les différents services, liste des besoins,création de processus, cahiers des charges, etc...)`,
    link: '/migration-wiki',
    img: imgPath + '/migration-wiki/mydbcfr.png',
    outils: ["Outils Microsoft (teams, planner, etc...)","Site du nouveau wiki"],
    annee: 2,
    personnes: 2,
  },
  {
    value: PRO,
    title: "Configuration VMware pour les logiciels de maintenance",
    description: `Configuration de VMware pour les logiciels de maintenance des pc des techniciens.`,
    link: '/configuration-vmware',
    img: imgPath + '/configurationVmware/ConfigurationVmware.png',
    outils: ["VMware", "Outils Microsoft (teams, planner, etc...)"],
    annee: 2,
  }
]