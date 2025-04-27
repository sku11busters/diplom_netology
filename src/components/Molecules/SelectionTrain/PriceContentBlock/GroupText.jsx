import React from "react";

const GroupText = ({ className, name, amount }) => {
  return (
    <div className={className + "_group-text"}>
      <span className={className + "_name"}>{name}</span>
      <span className={className + " text-center"}>{amount}</span>
    </div>
  );
};
export default GroupText;
