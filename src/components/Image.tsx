import { FC } from "react";
import { Image } from "../helpers/images";

export interface BalancedImageGalleryProps {
  images: Image[];
  objectFit: "cover" | "contain";
  setImageLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
}

const BalancedImageGallery: FC<BalancedImageGalleryProps> = ({ images, objectFit="cover", setImageLoaded = () => {} }) => {
  if (!images || images.length === 0) return null;

  const objectFitCSS = objectFit === "cover" ? 'object-cover' : 'object-contain';
  return (
    <div className={`flex flex-wrap gap-4 justify-center`}>
      {images.slice(0,1).map((img, idx) => (
        <img
          key={idx}
          className={`w-full antialiased ${objectFitCSS} max-h-[30vh] ${idx === 0 ? 'block' : 'hidden'}`}
          src={img.src}
          srcSet={img.srcSet}
          alt={`Image ${idx + 1}`}
          onLoad={() => setImageLoaded(true)}
        />
      ))}
    </div>
  );
};

export default BalancedImageGallery;
