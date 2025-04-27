import React from "react";
import ContentBlockItem from "./ContentBlockItem";
import GroupText from "./GroupText";
import GroupPrice from "./GroupPrice";
import { nanoid } from "nanoid";

const ContentBlock = ({ className, template }) => {
  return (
    <div className={className + "_block"}>
      {template.seats.length > 0 &&
        template.seats.map((item) => {
          return (
            <ContentBlockItem key={nanoid()} className={className}>
              <GroupText
                key={nanoid()}
                className={className}
                name={item.name}
                amount={template.amount}
              />
              <GroupPrice
                key={nanoid()}
                className={className}
                price={item.price}
              />{" "}
            </ContentBlockItem>
          );
        })}
    </div>
  );
};
export default ContentBlock;
