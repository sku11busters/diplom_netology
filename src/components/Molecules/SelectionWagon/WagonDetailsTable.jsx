import React from "react";

import { filteredSeats } from "../../../utils/trainSelectionUtils";

const WagonDetailsTable = ({ data, classType }) => {
  const currencyIcon = (
    <svg
      className="amount-seats_details-price-currency"
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.50039 10.2043C3.50039 10.7755 3.50039 11.3354 3.50039 11.9021C4.95655 11.9021 6.40805 11.9021 7.86655 11.9021C7.86655 12.471 7.86655 13.0332 7.86655 13.6044C6.41272 13.6044 4.95889 13.6044 3.50039 13.6044C3.50039 14.7401 3.50039 15.8666 3.50039 17C2.91466 17 2.33593 17 1.74786 17C1.74786 15.8712 1.74786 14.7423 1.74786 13.6089C1.16213 13.6089 0.585732 13.6089 0.00233359 13.6089C0.00233359 13.04 0.00233359 12.4778 0.00233359 11.9066C0.581065 11.9066 1.1598 11.9066 1.74086 11.9066C1.74086 11.3377 1.74086 10.7778 1.74086 10.2088C1.16213 10.2088 0.583399 10.2088 0 10.2088C0 9.6376 0 9.07545 0 8.50649C0.578731 8.50649 1.15746 8.50649 1.7432 8.50649C1.7432 5.67079 1.7432 2.84189 1.7432 0.00845521C1.7782 0.00618846 1.80154 0.00392171 1.8272 0.00392171C4.1608 0.00392171 6.49439 -0.00741203 8.82799 0.00845521C10.1745 0.0175222 11.3459 0.495806 12.3307 1.3889C13.1568 2.13693 13.6889 3.0527 13.8989 4.13167C14.1906 5.63452 13.8499 7.00591 12.8931 8.22088C12.2374 9.05505 11.3809 9.6308 10.3542 9.95948C9.85244 10.1204 9.33671 10.2043 8.80932 10.2043C7.07546 10.2066 5.34393 10.2043 3.61007 10.2066C3.57507 10.2043 3.54006 10.2043 3.50039 10.2043ZM3.50273 1.70398C3.50273 3.97753 3.50273 6.23975 3.50273 8.50423C3.52839 8.50423 3.5494 8.50423 3.5704 8.50423C5.3206 8.50423 7.07079 8.50876 8.82099 8.49969C9.09168 8.49743 9.36938 8.45889 9.63074 8.39316C11.4813 7.91714 12.5804 6.14908 12.1604 4.34248C11.801 2.80109 10.3868 1.70398 8.75798 1.70398C7.04279 1.70398 5.3276 1.70398 3.6124 1.70398C3.5774 1.70398 3.5424 1.70398 3.50273 1.70398Z"
        fill="#928F94"
      />
    </svg>
  );
  return (
    <table className="amount-seats_table">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead className={"amount-seats_table-header"}>
        <tr>
          <th scope="col" className={"amount-seats_table-title"} title="Места">
            Места
            <span className="amount-seats_round-num">
              {filteredSeats(data.seats).length}
            </span>
          </th>
          <th scope="col" title="Количество мест"></th>
          <th
            scope="col"
            className={"amount-seats_table-title"}
            title="Стоимость"
          >
            Стоимость
          </th>
          <th scope="col" title="Валюта"></th>
        </tr>
      </thead>
      {classType === "fourth" || classType === "first" ? (
        <tbody className={"amount-seats_table-body"}>
          <tr className="amount-seats_table-item">
            <td className="amount-seats_details"></td>
            <td className="amount-seats_details-num"></td>
            <td className="amount-seats_details-price">
              {data.top_price}
              {currencyIcon}
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className={"amount-seats_table-body"}>
          <tr className="amount-seats_table-item">
            <td className="amount-seats_details">Верхние</td>
            <td className="amount-seats_details-num">
              {filteredSeats(data.topSeats).length}
            </td>
            <td className="amount-seats_details-price">
              {data.top_price}
              {currencyIcon}
            </td>
          </tr>
          <tr className="amount-seats_table-item">
            <td className="amount-seats_details">Нижние</td>
            <td className="amount-seats_details-num">
              {filteredSeats(data.bottomSeats).length}
            </td>
            <td className="amount-seats_details-price">
              {data.bottom_price}
              {currencyIcon}
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default WagonDetailsTable;
