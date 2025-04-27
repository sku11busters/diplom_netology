import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePassenger } from "../../features/passengersSlice";
import Banner from "../Molecules/Banner";
import Info from "../Molecules/Info";
import banner3 from "../../img/banner/banner3.png";
import MainForm from "../Forms/MainForm";

import SideBar from "../SideBar/SideBar";
import ProgressBar from "../Molecules/ProgressBar";
import AddPassenger from "../Main/Passengers/AddPassengerBlock";

import BlockItem from "../Main/Passengers/BlockItem";
import { Button } from "../Atoms/Atoms";
import { validatePass } from "../../utils/formsValidator";
import "../Main/Passengers/passengersInfo.css";

const PassengersInfo = () => {
  const { totalCount, passengers } = useSelector((state) => state.passengers);
  const navigate = useNavigate();
  const [count, setCount] = useState(
    Array(totalCount)
      .fill()
      .map((e, i) => i + 1)
  );
  const [showError, setShowError] = useState(false);

  const cardRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  let showInfo = true;
  let isValidData;
  validatePass(passengers) ? (isValidData = false) : (isValidData = true);

  useEffect(() => {}, [passengers, isValidData]);
  const clickHandler = (event) => {
    cardRef.current = event.target.parentElement.nextSibling;
    cardRef.current.classList.toggle("active-show");
    cardRef.current.classList.contains("active-show")
      ? event.target.classList.add("expand-button")
      : event.target.classList.remove("expand-button");
  };

  const updateCounter = (arr, id) => {
    const newArr = arr.filter((o) => o !== id);
    return newArr.map((item, idx) => {
      const elem = idx + 1;
      return elem;
    });
  };

  const clickDelete = (id) => {
    dispatch(deletePassenger({ id: id }));
    const state = updateCounter(count, id);
    setCount(state);
  };

  const onClickHandler = () => {
    validatePass(passengers) === true
      ? navigate({
          pathname: `/diplom_netology/personal_information/${params.id}`,
          search: location.search,
        })
      : setShowError(true);
  };

  return (
    <>
      <Banner className="banner banner-tickets" banner={banner3} />
      <div className="passengers-info_wrapper">
        <MainForm className="search-tickets_form" />
        <div className="passengers-info_content">
          <ProgressBar />
          <SideBar />
          <section className="passengers-info_block" ref={cardRef}>
            {count.length > 0 ? (
              count.map((item) => (
                <BlockItem
                  key={item}
                  id={item}
                  clickHandler={clickHandler}
                  clickDelete={clickDelete}
                  showInfo={showInfo}
                />
              ))
            ) : (
              <Info
                type="info"
                text="Вы не выбрали ни одного места в вагоне "
                onClick={() =>
                  navigate({
                    pathname: `/diplom_netology/seats/${params.id}`,
                    search: location.search,
                  })
                }
              />
            )}
            {count.length > 0 ? (
              <AddPassenger state={count} setState={setCount} />
            ) : null}
            <div className="passengers-info_section_control">
              {showError && (
                <Info
                  type="error"
                  text="Количество и типы пассажиров должны соответствовать количеству посадочных мест и типам билетов"
                  onClick={() => setShowError(false)}
                />
              )}
              {count.length > 0 ? (
                <Button
                  text="Далее"
                  type="next-block"
                  disabled={!passengers.length ? true : false}
                  onClick={onClickHandler}
                ></Button>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PassengersInfo;
