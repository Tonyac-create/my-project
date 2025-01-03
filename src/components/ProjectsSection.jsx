import CardProject from "./ui/CardProject";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-3 py-7 flex flex-col gap-4 md:p-12">
      <h2 className="text-4xl text-marianBlue font-bold mb-4 font-merriweather">
        Projets réalisés/en cours
      </h2>
      <CardProject />
    </section>
  );
}
