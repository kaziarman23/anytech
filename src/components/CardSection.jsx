
const CardSection = ({ data, CardBg, className, hight }) => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 gap-5 place-items-center">
        {data.map((content, index) => (
          <a
            key={index}
            href={`#${content.title.toLowerCase()}`}
          >
            <div
              className={`w-full rounded-2xl p-5 space-y-5 
            ${CardBg ? CardBg : "bg-[#F9FCFE]"}
            ${hight ? hight : "h-80"}
            ${className ? className : ""}
            `}
            >
              {content.BgColor ? (
                <figure
                  className={`w-fit rounded-full ${
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
