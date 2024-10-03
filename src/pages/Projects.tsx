import {gamecaseImagesArray} from "@/assets/images/imagesExport";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <main className="h-screen flex flex-col justify-center gap-12">
      <ProjectCard
        dialog={<ImageCarousel imagesArray={gamecaseImagesArray} />}
        title="Gamecase - [WORK IN PROGRESS]"
        content="I've always wanted a wishlist in my pocket for games across all platforms. This is a hobby project made with React Native and based on the rawg.io website, using the rawg.io API. The homepage has an overview of the most trending games. You can search for games and add them to you wishlist or add them to your personal collection."
      />
    </main>
  );
};

export default Projects;
