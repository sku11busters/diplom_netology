import React from "react";
import { useLocation, useParams } from "react-router-dom";

import AssistantBlock from "./AssistantBlock";
import OrderDetails from "./OrderDetails";
import LastTickets from "./LastTickets";
import { useGetLastTicketsQuery } from "../../features/myApi";
import "./sidebar.css";

const SideBar = () => {
  const location = useLocation();
  const params = useParams();

  const { data = [] } = useGetLastTicketsQuery();

  if (
    location.pathname === "/diplom_netology" ||
    location.pathname === "/diplom_netology/order-result"
  ) {
    return;
  }

  const getLocation = () => {
    if (
      location.pathname === "/diplom_netology/trains" ||
      location.pathname === "/diplom_netology/trains/"
    ) {
      return true;
    } else if (location.pathname === `/diplom_netology/seats/${params.id}`) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <aside className="sidebar-wrap container p-0">
      <div className="sidebar" id="sidebar">
        {getLocation() ? <AssistantBlock /> : <OrderDetails />}
        {getLocation() && data && data.length > 0 ? (
          <LastTickets data={data.slice(0, 3)} />
        ) : null}
      </div>
    </aside>
  );
};

export default SideBar;
