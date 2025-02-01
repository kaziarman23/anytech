const CardSection = ({ data, className, hight }) => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-evenly items-center gap-5 ">
        {data.map((content) => (
          <div
            key={content.id}
            className={`w-1/3 bg-[#F9FCFE] rounded-2xl p-5 space-y-5 
            ${hight ? hight : "h-80"}
            ${className ? className : ""}`}
          >
            {content.BgColor ? (
              <figure
                className={`w-fit p-3 rounded-full ${
                  content.BgColor ? content.BgColor : ""
                }`}
              >
                <img src={content.icon} alt={content.title} />
              </figure>
            ) : (
              <img src={content.icon} alt={content.title} />
            )}
            <h1 className="text-[#1E4068] text-2xl font-bold">
              {content.title}
            </h1>
            <p className="text-[#3d6f9c]">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
