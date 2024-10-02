import {FC} from "react";

type TProjectProps = {
  imageUrl: string;
  title: string;
  content: string;
  reverse?: boolean;
};

const ProjectCard: FC<TProjectProps> = ({
  imageUrl,
  title,
  content,
  reverse,
}) => {
  return (
    <div
      className={`w-fit flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } justify-center gap-6 md:gap-12`}
    >
      <div className="w-96 sm:min-w-72 h-fit mb-3 sm:mt-1">
        <img className="rounded-lg" src={imageUrl} />
      </div>
      <div className="md:w-1/2 self-center">
        <h1 className="pb-3 text-3xl text-left text-orange uppercase">
          {title}
        </h1>
        <p className="text-left text-white">{content}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
