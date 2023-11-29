import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import "./email.css";

const Email = () => {
  return (
    <div className="Email_input">
      <form>
        <div className="email">
          <input type="email" required={true}></input>
          <label>Email Address</label>
          <button>
            GET STARTED
            <VscChevronRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
