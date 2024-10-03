import {forwardRef, useState} from "react";
import overview from "../assets/images/gamecase/gamecase-overview.png";

const ImageCard = forwardRef<HTMLDivElement>((props, ref) => {
  // Corrected: Wrapped props and ref in parentheses
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex justify-center w-60 sm:w-96 h-64 mb-3 sm:mt-1 cursor-pointer"
      {...props}
    >
      <img
        className="border-2 border-green-dark-secondary shadow-md rounded-lg hover:blur-[1px]"
        src={overview}
      />
      {isHovering ? <p className="absolute top-28">VIEW IMAGES</p> : ""}
    </div>
  );
});

export default ImageCard;
