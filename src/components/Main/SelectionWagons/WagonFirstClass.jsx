import React from "react";
import { useSelector } from "react-redux";
import {
  getDisabled,
  getClassName,
  getSeatsArr,
} from "../../../utils/WagonSelectionUtils";
import { nanoid } from "nanoid";

const WagonFirstClass = ({ data, selectedTypeTicket, onClick }) => {
  const dataSeats = useSelector((state) => state.passengers.dataSeats);
  const passengers = useSelector((state) => state.passengers.passengers);
  const seatsBtnsArr = getSeatsArr(data.coach.class_type);

  return (
    <div className="wagon_item wagon-first_class">
      <div className="wagon_template-block">
        <span className="template-text">
          19 человек выбирают места в этом поезде
        </span>
      </div>
      <div className="utils-wagon_wrap wagon-first_class_wrap">
        <div className="utils-wagon-wagon-first_class_sector">
          <div className="utils-wagon-wagon-first_class_sector-row">
            {seatsBtnsArr.map((item) => {
              return (
                <div
                  key={nanoid()}
                  className="utils-wagon_buttons-block_box first_class-buttons-block_box"
                >
                  <button
                    data-id={item[0]}
                    data-wagon_id={data.coach._id}
                    data-price={data.coach.bottom_price}
                    className={
                      "utils-wagon_button_box wagon-first_class_seat-btn" +
                      getClassName(item[0], data, passengers)
                    }
                    onClick={(event) => onClick(event, selectedTypeTicket)}
                    disabled={getDisabled(
                      item[0],
                      data.seats,
                      dataSeats,
                      selectedTypeTicket
                    )}
                  >
                    {item[0]}
                  </button>
                  <button
                    data-id={item[1]}
                    data-wagon_id={data.coach._id}
                    data-price={data.coach.bottom_price}
                    className={
                      "utils-wagon_button_box wagon-first_class_seat-btn" +
                      getClassName(item[1], data, passengers)
                    }
                    onClick={(event) => onClick(event, selectedTypeTicket)}
                    disabled={getDisabled(
                      item[1],
                      data.seats,
                      dataSeats,
                      selectedTypeTicket
                    )}
                  >
                    {item[1]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WagonFirstClass;
