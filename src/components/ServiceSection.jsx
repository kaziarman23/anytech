import { ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import { animateUpDown } from "../Animation/Animation";

const ServiceSection = ({
  title,
  titleColor,
  heading,
  description,
  secondDescription,
  image,
  imageSize,
  TopBackgroundImage,
  BottomBackgroundImage,
  ExtraImage,
  ExtraImageClass,
  svgs = [],
}) => {
  return (
    <div className="w-full h-full">
      <div className="w-4/5 h-screen mx-auto flex justify-center items-center">
        {/* Advertisement || Left side content */}
        <div className="w-1/2 h-full flex justify-center flex-col gap-7 p-2">
          <p
            className={`font-extrabold uppercase tracking-[4px]
            ${titleColor ? titleColor : "text-[#579FF3]"}`}
          >
            {title}
          </p>
          <h1 className="text-5xl text-[#1E4068] font-bold">{heading}</h1>
          <p className="text-[#1E4068] font-bold">{description}</p>
          <p className="text-[#6582a5] ">{secondDescription}</p>
        </div>
        {/* Image || Right side content */}
        <div className="w-1/2 h-full flex justify-center items-center relative">
          {/* Background Top Image */}
          {TopBackgroundImage && (
            <figure className="absolute w-full h-full top-0 left-0 -z-10">
              <ScrollParallax isAbsolutelyPositioned>
                <img
                  src={TopBackgroundImage}
                  alt={title}
                  className="w-full h-full"
                />
              </ScrollParallax>
            </figure>
          )}
          <div className="w-4/5 h-4/5">
            {/* Background Image */}
            <figure className="w-full h-full flex justify-center items-center">
              <img
                src={image}
                alt={title}
                className={`object-cover ${
                  imageSize ? imageSize : "h-full w-full"
                }`}
              />
            </figure>

            {/* Background Bottom Image */}
            {BottomBackgroundImage && (
              <figure className="absolute bottom-0 right-0">
                <ScrollParallax isAbsolutelyPositioned>
                  <img
                    src={BottomBackgroundImage}
                    alt={title}
                    className="w-full h-full"
                  />
                </ScrollParallax>
              </figure>
            )}

            {/* Background Bottom Image */}
            {ExtraImage && (
              <motion.figure
                {...animateUpDown}
                className={`absolute ${ExtraImageClass && ExtraImageClass}`}
              >
                <img src={ExtraImage} alt={title} className="w-full h-full" />
              </motion.figure>
            )}

            {/* Dynamic SVG's  Part*/}
            {svgs.map((svg, index) => (
              <motion.figure
                key={index}
                {...(svg.animation === "true" ? animateUpDown : {})}
                className={`absolute ${svg.SvgClass && svg.SvgClass}`}
                style={{
                  top: `${svg.top}%`,
                  left: `${svg.left}%`,
                  right: svg.right !== undefined ? `${svg.right}%` : "auto",
                  bottom: svg.bottom !== undefined ? `${svg.bottom}%` : "auto",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox={svg.viewBox}
                  width={svg.width}
                  height={svg.height}
                >
                  {svg.content}
                </svg>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
