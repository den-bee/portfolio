import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import {FC} from "react";
import {TImageArrayItem} from "@/assets/images/imagesExport";

import {
  DialogDescription,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import ImageCard from "./ImageCard";

type TImageCarouselProps = {
  imagesArray: TImageArrayItem[];
};

const ImageCarousel: FC<TImageCarouselProps> = ({imagesArray}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ImageCard />
      </DialogTrigger>
      <DialogContent className="w-4/6">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Carousel>
          <CarouselContent>
            {imagesArray.map((image: TImageArrayItem, index) => (
              <CarouselItem className="flex justify-center" key={index}>
                <img
                  className="w-52 rounded-lg"
                  src={image.src}
                  alt={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCarousel;
