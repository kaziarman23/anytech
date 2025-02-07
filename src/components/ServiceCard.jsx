const ServiceCard = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-5 flex-col lg:flex-row">
      {data.map((data, index) => (
        <div
          key={index}
          className={`w-full h-full flex justify-center items-start flex-col gap-12 p-5 border-2 rounded-2xl border-white cursor-pointer shadow-lg
          lg:w-1/2
            ${
              data.borderColor === "green"
                ? "hover:border-green-400"
                : data.borderColor === "blue"
                ? "hover:border-blue-400"
                : "hover:border-purple-400"
            } `}
        >
          <h1 className="text-2xl text-[#1E4068] font-bold md:text-3xl lg:text-2xl">{data.title}</h1>
          <p className='text-xs xl:text-base xl:h-20'>{data.description}</p>
          <img src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
