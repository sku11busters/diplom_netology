import React from "react";

const ContentBlockItem = ({ className, children }) => {
  return <div className={className + "-item"}>{children}</div>;
};
export default ContentBlockItem;
