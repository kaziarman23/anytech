import { MdKeyboardArrowRight } from "react-icons/md";

const ContactusBtn = ({ data }) => {
  return (
    <button className="px-6 py-3 rounded-lg bg-[#ff8a53] text-2xl flex items-center gap-2 cursor-pointer text-white">
      {data ? data : "Contact Us"} <MdKeyboardArrowRight />
    </button>
  );
};

export default ContactusBtn;
