import { MdKeyboardArrowRight } from "react-icons/md";

const ContactusBtn = ({ data, paddings, rounded }) => {
  return (
    <button
      className={`bg-[#ff8a53] text-xl flex items-center cursor-pointer text-white group
     
    ${paddings ? paddings : "px-6 py-3"}
    ${rounded ? rounded : "rounded-lg"}`}
    >
      {data ? data : "Contact Us"}
      <MdKeyboardArrowRight className="group-hover:ml-2" />
    </button>
  );
};

export default ContactusBtn;
