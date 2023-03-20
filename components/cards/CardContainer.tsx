import Link from "next/link";
import React from "react";
import CardList from "./CardList";


interface Props {
  details?: any;
  style1?:any;
  style2?:any;
  style3?:any;
  hoverStyle?:any
}

function CardContainer({ details, style1, style2, style3, hoverStyle }:Props) {
  return (
    <div className={`feature-images-wrapper ${style3}`}>
      <div className="container">
        <CardList
          data={details}
          style1={style1}
          style2={style2}
          hoverStyle={hoverStyle}
        />
        <div className="section-under-heading text-center section-space--mt_80">
          Challenges are just opportunities in disguise.
          <Link href="/contact-us">Take the challenge!</Link>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
