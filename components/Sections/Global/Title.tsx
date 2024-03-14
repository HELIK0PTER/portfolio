type props = {
  children: React.ReactNode;
  color?: string;
}

export const H2 = ({children, color = 'success'}: props) => {
  
  const couleur = (color:string) => {
    // couleurs en css et non tailwind car tailwind ne permet pas de faire des classes dynamiques
    switch (color) {
      case 'success':
        return 'var(--color-success)'
      case 'primary':
        return 'var(--color-primary)'
      case 'white':
        return 'white'
      default:
        return 'success'
    }
  }

  return (
    <h2 className={`mb-12 text-3xl font-bold`} style={{color: couleur(color)}}>{children}</h2>
  )
}