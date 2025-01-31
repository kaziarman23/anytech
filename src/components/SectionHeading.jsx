const SectionHeading = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <p className="text-[#579FF3] font-extrabold  tracking-[4px]">{title}</p>
      <h1 className="text-5xl text-[#1E4068] font-bold">{description}</h1>
    </div>
  );
};

export default SectionHeading;
