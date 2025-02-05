const SectionHeading = ({ title, titleColor, description }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <p
        className={`font-extrabold uppercase tracking-[4px]
            ${titleColor ? titleColor : "text-[#579FF3]"}`}
      >
        {title}
      </p>
      <h1 className="text-2xl text-[#1E4068] font-bold lg:text-3xl xl:text-5xl">
        {description}
      </h1>
    </div>
  );
};

export default SectionHeading;
