import {FC, ReactNode} from "react";

type TProjectProps = {
  dialog: ReactNode;
  title: string;
  content: string;
  reverse?: boolean;
};

const ProjectCard: FC<TProjectProps> = ({dialog, title, content, reverse}) => {
  return (
    <div
      className={`w-fit flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } justify-center gap-6 md:gap-12`}
    >
      <>{dialog}</>
      <div className="sm:w-1/2 self-center">
        <h1 className="pb-3 text-3xl text-left text-orange uppercase">
          {title}
        </h1>
        <p className="text-left text-white">{content}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
