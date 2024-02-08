import Link from "next/link";

import {FaGithub, FaGitlab, FaLinkedin} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
    className={`
      flex justify-between items-center
      h-20 w-full 
      p-8
      bg-primary-800 bg-opacity-40
    `}>
		  <p className={`text-primary-100`}>© 2023 Matheus</p>
		  <div className={`flex gap-5`}>
		    <Link href={`https://github.com/HELIK0PTER/MATHEUS_KOPSGUEDES`} className={`flex items-center justify-center gap-1`}> <FaGithub /> GitHub</Link>
        {/*modifier le repo gitlab et remettre le bon lien*/}
        <Link href={`https://gitlab.com`} className={`flex items-center justify-center gap-1`}> <FaGitlab /> GitLab</Link>
        <Link href={`https://www.linkedin.com/in/matheus-kops-guedes-4293b7213/`} className={`flex items-center justify-center gap-1`}> <FaLinkedin /> Linkedin</Link>
      </div>
      {/* faire une page mentions légales*/}
      <Link href={`/`}>Mentions Légales</Link>
    </footer>
  );
};