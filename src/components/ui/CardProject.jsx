import upRight from "../../assets/upRight.svg";
import { RevealOnScroll } from "../RevealScroll";
{/* <a href='https://fr.pngtree.com/freepng/vector-illustration-background-of--under-construction_3540951.html'>Image PNG de fr.pngtree.com/</a> */ }

export default function CardProject() {
  const projects = [
    {
      name: "Guild Open Tech",
      description:
        "Intégration du site vitrine pour l’association Guild Open Tech",
      siteURL: "https://guildopentech.org/",
      screenshot: "./Screenshot_GOT_Web.png",
    },
    {
      name: "GOT Associate",
      description:
        "Conception d’une application web pour mettre en relation des porteurs de projets et des associés dans l’équipe d’UX Design au sein de l’association Guild Open Tech. Pour la suite du projet, j’intégrerai l’équipe de développeurs.",
      siteURL: "",
      screenshot: "./GOT_Associate.png",
    },
    {
      name: "Clone Thefork",
      description:
        "Application web pour restaurateurs intégrant un système de réservation en ligne directement sur leur site internet. Grâce à une interface intuitive, les professionnels peuvent gérer les réservations, consulter les fiches clients et mettre à jour leur site web en toute simplicité.",
      siteURL: "",
      screenshot: "./construction.png",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <RevealOnScroll>
          <article
            key={project.name}
            className="p-2 rounded-md border border-marianBlue shadow-md shadow-marianBlue"
          >
            <img
              src={project.screenshot}
              alt={project.name}
              className="rounded-md"
            />
            <h3 className="text-marianBlue text-2xl font-semibold my-2 font-merriweather">
              {project.name}
            </h3>
            <p className="text-lg">{project.description}</p>
            {project.siteURL && (
              <a href={project.siteURL} target="_blank" className="flex items-center gap-2 hover:underline hover:underline-offset-4 my-2">
                Aller sur le site
                <img src={upRight} alt="" className="w-4 h-4" />
              </a>
            )}
          </article>
        </RevealOnScroll>
      ))}
    </>
  );
}
