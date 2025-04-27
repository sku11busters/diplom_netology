import React from "react";
import { formattedPrice } from "../../../../utils/trainSelectionUtils";
const GroupPrice = ({ className, price }) => {
  return (
    <div className={className + "_price"}>
      <span className={className + "_min-price"}>
        {formattedPrice(price)}
        <i
          className="fa fa-rub card-trains-menu-item-bottom-icon currency-icon "
          aria-hidden="true"
        ></i>
      </span>
    </div>
  );
};

export default GroupPrice;
