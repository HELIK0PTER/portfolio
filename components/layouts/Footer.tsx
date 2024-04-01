import Link from "next/link";

import {FaGithub, FaGitlab, FaLinkedin} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
			id={`footer`}
    	className={`
      flex justify-between items-center
      h-20 w-full 
      p-8
      bg-primary-300
      font-semibold`}>
		  <p className={``}>© 2023 Matheus</p>
		  <div className={`gap-5 hidden md:flex`}>
		    <Link href={`https://github.com/HELIK0PTER/HELIK0PTER`} target={'_blank'} className={`flex items-center justify-center gap-1`}> <FaGithub /> GitHub</Link>
        <Link href={`https://gitlab.com/HELIK0PTER`} target={'_blank'} className={`flex items-center justify-center gap-1`}> <FaGitlab /> GitLab</Link>
        <Link href={`https://www.linkedin.com/in/matheus-kops-guedes-4293b7213/`} target={'_blank'} className={`flex items-center justify-center gap-1`}> <FaLinkedin /> Linkedin</Link>
      </div>
      {/* faire une page mentions légales*/}
      <Link href={`/`}>Mentions Légales</Link>
    </footer>
  );
};