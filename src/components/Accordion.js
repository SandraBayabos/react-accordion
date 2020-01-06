import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");
  const accordionContent = useRef(null);

  function toggleAccordion(){
    setActive(active === "" ? "active" : "");
    setHeight(active === "active"? "0px": `${accordionContent.current.scrollHeight}px`)
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${active}`} >
        <p className="accordion__title">{title}</p>
        <Chevron className={`${rotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={accordionContent}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
