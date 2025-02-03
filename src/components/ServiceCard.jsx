const ServiceCard = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-5">
      {data.map((data, index) => (
        <div
          key={index}
          className={`w-1/2 h-full flex justify-center items-start flex-col gap-12 p-5 border-2 rounded-2xl border-white cursor-pointer shadow-lg
            ${
              data.borderColor === "green"
                ? "hover:border-green-400"
                : data.borderColor === "blue"
                ? "hover:border-blue-400"
                : "hover:border-purple-400"
            } `}
        >
          <h1 className="text-3xl text-[#1E4068] font-bold">{data.title}</h1>
          <p>{data.description}</p>
          <img src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
