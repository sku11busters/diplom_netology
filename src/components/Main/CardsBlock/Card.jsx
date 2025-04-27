import React from "react";

const Card = ({ id, className, children }) => {
  return (
    <div id={id} className={className + "_card card"}>
      {children}
    </div>
  );
};

export default Card;
