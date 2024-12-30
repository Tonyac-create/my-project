import upRight from "../../assets/upRight.svg";
import projects from "../../lib/card_projects";
import { RevealOnScroll } from "../RevealScroll";
{/* <a href='https://fr.pngtree.com/freepng/vector-illustration-background-of--under-construction_3540951.html'>Image PNG de fr.pngtree.com/</a> */ }

export default function CardProject() {
  
  return (
    <div className="md:flex md:flex-wrap md:gap-6">
      {projects.map((project) => (
        <RevealOnScroll>
          <article
            key={project.name}
            className="p-4 rounded-md border border-marianBlue shadow-md shadow-marianBlue md:w-[475px] md:h-[585px]"
          >
            <img
              src={project.screenshot}
              alt={project.name}
              className="rounded-md w-[450px] h-[400px] object-cover"
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
    </div>
  );
}
