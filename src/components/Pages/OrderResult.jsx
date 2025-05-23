import React from "react";

import { useSelector } from "react-redux";
import Banner from "../Molecules/Banner";
import ControlBlockFeedBack from "../Main/OrderResult/ControlBlockFeedBack";
import banner_order_page from "../../img/banner/banner_order_page.png";

import { Title } from "../Atoms/Atoms";
import Card from "../Main/CardsBlock/Card";
import {
  CardTop,
  CardBody,
  CardBottom,
} from "../Main/CardsBlock/CardsMolecules";
import Puncts from "../Main/OrderResult/Puncts";
import Appeal from "../Main/OrderResult/Appeal";
import "../Main/OrderResult/orderResult.css";

const OrderResult = () => {
  const { first_name, patronymic } = useSelector(
    (state) => state.passengers.contributor
  );
  const totalPrice = useSelector((state) => state.passengers.totalPrice);

  const amount = Array(5)
    .fill()
    .map((_, i) => i + 1);
  return (
    <>
      {" "}
      <Banner
        className=" banner banner-order-result_page"
        banner={banner_order_page}
      />
      {first_name && (
        <section className="order-result_wrap">
          <div className="order-result_block">
            <Title
              text="Благодарим Вас за заказ!"
              className="order-result_title"
            />
            <Card className="order-result">
              <CardTop className="order-result">
                <div className="order-result_number-wrap">
                  <span className="order_number">№Заказа 225AA</span>
                </div>
                <div className="order-result_price-wrap">
                  <span className="price_text">{"cумма "}</span>
                  <span className="price total-price">{totalPrice}</span>
                  <svg
                    className="order-result_price-currency"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00056 14.4061C5.00056 15.2125 5.00056 16.0029 5.00056 16.8029C7.08079 16.8029 9.15436 16.8029 11.2379 16.8029C11.2379 17.6062 11.2379 18.3998 11.2379 19.2062C9.16103 19.2062 7.08413 19.2062 5.00056 19.2062C5.00056 20.8095 5.00056 22.3999 5.00056 24C4.1638 24 3.33704 24 2.49695 24C2.49695 22.4063 2.49695 20.8127 2.49695 19.2126C1.66019 19.2126 0.83676 19.2126 0.00333371 19.2126C0.00333371 18.4094 0.00333371 17.6158 0.00333371 16.8093C0.830093 16.8093 1.65685 16.8093 2.48694 16.8093C2.48694 16.0061 2.48694 15.2157 2.48694 14.4125C1.66019 14.4125 0.833427 14.4125 0 14.4125C0 13.606 0 12.8124 0 12.0092C0.826759 12.0092 1.65352 12.0092 2.49028 12.0092C2.49028 8.00583 2.49028 4.01208 2.49028 0.0119368C2.54028 0.00873665 2.57362 0.00553653 2.61029 0.00553653C5.944 0.00553653 9.2777 -0.010464 12.6114 0.0119368C14.535 0.0247372 16.2085 0.699961 17.6153 1.96081C18.7954 3.01684 19.5555 4.30969 19.8556 5.83295C20.2723 7.95462 19.7855 9.89069 18.4187 11.606C17.482 12.7836 16.2585 13.5964 14.7917 14.0604C14.0749 14.2877 13.3382 14.4061 12.5847 14.4061C10.1078 14.4093 7.63419 14.4061 5.15724 14.4093C5.10724 14.4061 5.05723 14.4061 5.00056 14.4061ZM5.00389 2.40562C5.00389 5.61534 5.00389 8.80905 5.00389 12.006C5.04056 12.006 5.07057 12.006 5.10057 12.006C7.60085 12.006 10.1011 12.0124 12.6014 11.9996C12.9881 11.9964 13.3848 11.942 13.7582 11.8492C16.4018 11.1771 17.972 8.68105 17.3719 6.13056C16.8586 3.95448 14.8383 2.40562 12.5114 2.40562C10.0611 2.40562 7.61085 2.40562 5.16058 2.40562C5.11057 2.40562 5.06057 2.40562 5.00389 2.40562Z"
                      fill="#928F94"
                    />
                  </svg>
                </div>
              </CardTop>
              <CardBody className="order-result">
                <Puncts />
                <Appeal data={first_name + " " + patronymic} />
              </CardBody>
              <CardBottom className="order-result">
                <ControlBlockFeedBack
                  className="order-result"
                  amount={amount}
                />
              </CardBottom>
            </Card>
          </div>
        </section>
      )}
    </>
  );
};

export default OrderResult;
