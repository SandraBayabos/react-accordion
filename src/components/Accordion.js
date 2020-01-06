import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";

const Accordion = ({ title, accordionContent }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");
  const content = useRef(null);

  function toggleAccordion(){
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
    setRotate(active ==="active" ? "accordion__icon" : "accordion__icon rotate")
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <Chevron className={`${rotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: accordionContent }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
