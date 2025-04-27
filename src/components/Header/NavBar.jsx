import React from "react";

import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm pl-0 navbar-dark bg-dark"
      id="navBar"
    >
      <div className="collapse navbar-collapse" id="navbarMain">
        <ul className="navbar-nav mr-auto nav-list">
          <li className="nav-item active">
            <Link className="nav-link" to="/diplom_netology#about">
              О нас
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/diplom_netology#howItWorks">
              Как это работает
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/diplom_netology#feedback">
              Отзывы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#footer">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
