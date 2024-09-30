import {FC} from "react";

type TProjectProps = {
  imageUrl: string;
  title: string;
  content: string;
};

const ProjectCard: FC<TProjectProps> = ({imageUrl, title, content}) => {
  return (
    <div className="m-6">
      <div className="mb-3 border-2 rounded-lg">
        <img src={imageUrl} />
      </div>
      <div>
        <h1 className="pb-3 text-3xl text-left text-orange uppercase">
          {title}
        </h1>
        <p className="text-left text-white">{content}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
