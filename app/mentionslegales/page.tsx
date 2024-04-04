import React from 'react'

type h1type = {
	children: React.ReactNode
	center?: boolean
}

const H1 = ({children, center}: h1type) => {
	return (
		<h1 className={`text-xl font-semibold`}
		style={{textAlign: center ? 'center' : 'left'}}
		>
			{children}
		</h1>
	)
}

const pageMentionLegales = () => {
	return (
		<div className={`p-5 mx-20`}>
		<H1 center={true}>
			Mentions Légales
		</H1>
		<div className={`flex flex-col gap-5`}>
			<div>
				<H1>
					Éditeur du site
				</H1>
				<p>
					<p>Matheus KOPS GUEDES</p>
					<p>Adresse e-mail : matheuskg-pro@gmail.com</p>
				</p>
			</div>
			<div>
				<H1>
					Hébergement et Déploiement
				</H1>
				<p>
					<p>Hébergé par: GitHub</p>
					<p>Déployé par : Vercel</p>
					<p>Nom de domaine : OVHcloud</p>
				</p>
			</div>
			<div>
				<H1>
					Propriété Intellectuelle
				</H1>
				<p>
					{`Tous les contenus présents sur ce site (textes, images, vidéos, etc.) sont protégés par le droit d'auteur et
					autres lois relatives à la propriété intellectuelle. Toute utilisation non autorisée est strictement
					interdite.`}
				</p>
			</div>
			<div>
				<H1>
					Liens Externes
				</H1>
				<p>
					{`Ce site peut contenir des liens vers des sites externes. L'éditeur du site ne saurait être tenu responsable
					des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site web.`}
				</p>
			</div>
			<div>
				<H1>
					Modification des Mentions Légales
				</H1>
				<p>
					{`L'éditeur du site se réserve le droit de modifier les présentes mentions légales à tout moment. Il est
					conseillé de consulter cette page régulièrement pour rester informé des éventuelles modifications.`}
				</p>
			</div>
		</div>
		</div>
	)
}

export default pageMentionLegales