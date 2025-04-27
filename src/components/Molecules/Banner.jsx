import React from "react";
import { Title } from "../Atoms/Atoms";
import { useLocation } from "react-router-dom";

const Banner = ({ banner, className, children }) => {
  const location = useLocation();

  return (
    <div className={className}>
      {location.pathname === "/diplom_netology" ? (
        <Title
          text="Вся жизнь - "
          strongText={"путешествие!"}
          className={"banner_title"}
        />
      ) : null}
      <img src={banner} className="img-banner" alt="train-banner" />
    </div>
  );
};

export default Banner;
