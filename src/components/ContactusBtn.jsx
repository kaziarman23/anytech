import { MdKeyboardArrowRight } from "react-icons/md";

const ContactusBtn = ({ data, paddings, rounded }) => {
  return (
    <button
      className={`bg-[#ff8a53] text-2xl flex items-center gap-2 cursor-pointer text-white 
    hover:gap-4 transition-all duration-300 ease-in-out 
    ${paddings ? paddings : "px-6 py-3"}
    ${rounded ? rounded : "rounded-lg"}`}
    >
      {data ? data : "Contact Us"}
      <MdKeyboardArrowRight />
    </button>
  );
};

export default ContactusBtn;
