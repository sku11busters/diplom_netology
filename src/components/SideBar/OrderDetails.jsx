import React from "react";
import { useSelector } from "react-redux";
import QuantityPassBlock from "./QuantityPassBlock";
import SideBlock from "./SideBlock";
import { Title, CardTitle } from "../Atoms/Atoms";
import { formattedPrice } from "../../utils/trainSelectionUtils";
const OrderDetails = () => {
  const { dataSeats, totalPrice } = useSelector((state) => state.passengers);
  const { from, to } = useSelector(
    (state) => state.catalogTrains.searchData.travelData
  );

  return (
    <div className="order-details-block_wrap">
      <div className="order-details-block_header">
        <Title className="order-details-block_title" text="Детали поездки" />
      </div>
      <SideBlock
        type="departure"
        parent="order-details"
        date={from.date}
        side="start"
      />
      <SideBlock
        type="arrival"
        parent="order-details"
        date={to.date}
        side="end"
      />
      <QuantityPassBlock data={dataSeats} />
      <div className="order-details-block_footer">
        <CardTitle className="order-details price" text="Итог" />
        <span className="order-details price-text">
          {formattedPrice(totalPrice)}
        </span>
        <svg
          className="order-details currency_icon"
          width="26"
          height="32"
          viewBox="0 0 26 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.50073 19.2081C6.50073 20.2833 6.50073 21.3372 6.50073 22.4039C9.20503 22.4039 11.9007 22.4039 14.6093 22.4039C14.6093 23.4749 14.6093 24.5331 14.6093 25.6083C11.9093 25.6083 9.20936 25.6083 6.50073 25.6083C6.50073 27.746 6.50073 29.8666 6.50073 32C5.41294 32 4.33815 32 3.24603 32C3.24603 29.8751 3.24603 27.7502 3.24603 25.6168C2.15824 25.6168 1.08779 25.6168 0.00433382 25.6168C0.00433382 24.5459 0.00433382 23.4877 0.00433382 22.4125C1.07912 22.4125 2.15391 22.4125 3.23303 22.4125C3.23303 21.3415 3.23303 20.2876 3.23303 19.2166C2.15824 19.2166 1.08345 19.2166 0 19.2166C0 18.1414 0 17.0832 0 16.0122C1.07479 16.0122 2.14957 16.0122 3.23736 16.0122C3.23736 10.6744 3.23736 5.34944 3.23736 0.0159157C3.30237 0.0116489 3.34571 0.00738204 3.39338 0.00738204C7.7272 0.00738204 12.061 -0.0139521 16.3948 0.0159157C18.8954 0.032983 21.071 0.933282 22.8999 2.61441C24.4341 4.02246 25.4222 5.74625 25.8122 7.77726C26.3539 10.6062 25.7212 13.1876 23.9443 15.4746C22.7265 17.0448 21.136 18.1286 19.2292 18.7473C18.2974 19.0502 17.3396 19.2081 16.3602 19.2081C13.1401 19.2123 9.92444 19.2081 6.70442 19.2123C6.63941 19.2081 6.5744 19.2081 6.50073 19.2081ZM6.50506 3.2075C6.50506 7.48712 6.50506 11.7454 6.50506 16.008C6.55273 16.008 6.59174 16.008 6.63074 16.008C9.88111 16.008 13.1315 16.0165 16.3818 15.9994C16.8846 15.9952 17.4003 15.9226 17.8857 15.7989C21.3224 14.9029 23.3636 11.5747 22.5835 8.17408C21.9161 5.27264 19.2898 3.2075 16.2648 3.2075C13.0795 3.2075 9.89411 3.2075 6.70875 3.2075C6.64374 3.2075 6.57874 3.2075 6.50506 3.2075Z"
            fill="#E5E5E5"
          />
        </svg>
      </div>
    </div>
  );
};
export default OrderDetails;
