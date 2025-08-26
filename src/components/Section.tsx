import { FC, useState } from "react";
import BalancedImageGallery from "./Image";
import { Image } from "../helpers/images";

export interface SectionProps {
  id: string;
  title?: string;
  content?: string;
  images?: Image[];
  orientation?: "left" | "right";
  imageFirst?: boolean;
  style?: "secondary" | "tertiary" | "bonus" | "basic";
  placeholder?: boolean;
}

const Section: FC<SectionProps> = ({
  id,
  title,
  content,
  images,
  orientation = "left",
  imageFirst = true,
  style = "basic",
  placeholder = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  // Content block
  const Content = (
    <div className="section-content flex-1 flex flex-col items-start pb-4 px-4 gap-y-2">
      {title && <h2 className="text-3xl text-primary font-bold font-dosis antialiased">{title}</h2>}
      {content && <p className="leading-relaxed text-black text-start font-libre antialiased">{content}</p>}
    </div>
  );

  // Image block
  const ImageEl =
    images && images.length > 0 ? (
      <div
        className="section-image flex-1 relative overflow-hidden max-h-[30vh] w-full"
        style={{  aspectRatio: `${images[0].width} / ${images[0].height}` }}
      >
        <BalancedImageGallery setImageLoaded={setImageLoaded} images={images} objectFit={placeholder ? "contain" : "cover"}/>
      </div>
    ) : null;

  // Order depends on `imageFirst`
  const children = imageFirst ? [ImageEl, Content] : [Content, ImageEl];

  // Classes that vary by orientation
  const sectionClasses = [
    "",
    `section-${orientation}`,
    `section-${style}`,
    "xl:bg-none",
    "gap-y-4"
  ].join(" ");
  return (
    <div id={id} className={` py-4 bg-opaque xl:section-${style} w-auto md:w-1/2 2xl:w-1/3 rounded-inherit`}>
      <div className={`flex flex-col text-center overflow-hidden relative mx-8 rounded-xl depth ${sectionClasses}`}>{children}</div>
    </div>
  );
};

export default Section;
