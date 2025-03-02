import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const ContactusBtn = ({ data, paddings, rounded }) => {
  return (
    <Link to="/contactus">
      <button
        className={`bg-[#ff8a53] text-sm flex items-center cursor-pointer text-white group sm:text-base
     
    ${paddings ? paddings : "px-6 py-3"}
    ${rounded ? rounded : "rounded-lg"}`}
      >
        {data ? data : "Contact Us"}
        <MdKeyboardArrowRight className="group-hover:ml-2" />
      </button>
    </Link>
  );
};

export default ContactusBtn;
