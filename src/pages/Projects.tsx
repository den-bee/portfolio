import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <main id="projects" className="h-fit flex flex-col gap-3">
      <ProjectCard
        imageUrl="https://placehold.co/600x400"
        title="Gamecase"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque arcu eget leo imperdiet, nec venenatis tortor convallis. Morbi porttitor congue nisi non pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac nisl ipsum. Pellentesque quis orci ac mi vehicula fermentum vel sit amet justo. "
      />
      <ProjectCard
        imageUrl="https://placehold.co/600x400"
        title="Gamecase"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque arcu eget leo imperdiet, nec venenatis tortor convallis. Morbi porttitor congue nisi non pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac nisl ipsum. Pellentesque quis orci ac mi vehicula fermentum vel sit amet justo. "
      />
    </main>
  );
};

export default Projects;
