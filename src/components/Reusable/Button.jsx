import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
const Button = () => {
  return (
    <Link to="/contact">
      <button
        type="button"
      // onClick={()=> navigate("/contact#spe")}
      className={`bg-[#653e98] px-6 py-4 font-roboto font-medium rounded-full text-white text-[14px]`}
    >
        GET IN TOUCH
      </button>
    </Link>
  );
};

export default Button;