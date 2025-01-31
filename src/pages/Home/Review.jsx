import datas from "../../lib/ReviewData.json";

const Review = () => {
  return (
    <div className="w-full h-full">
      <div className="w-4/5 h-full mx-auto mb-5">
        <p className="text-[#0057BB] font-extrabold text-center p-5 mb-2 tracking-wider text-xl">
          TRUSTED BY THE BEST
        </p>
        {/* statics  part */}
        <div className="flex justify-evenly items-center gap-5">
          <div>
            <span className="text-[#0057BB] text-7xl font-bold">20</span>
            <h5 className="text-lg text-center">Years of Experience</h5>
          </div>
          <div>
            <span className="text-[#0057BB] text-7xl font-bold">40+</span>
            <h5 className="text-lg text-center">Financial Institutions</h5>
          </div>
          <div>
            <span className="text-[#0057BB] text-7xl font-bold">200m</span>
            <h5 className="text-lg text-center">Customers Each</h5>
          </div>
        </div>
      </div>
      {/* Brands Name Part */}
      <div className="w-11/12 mx-auto h-full grid grid-cols-5 place-items-center">
        {datas.map((data, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-4/5 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
