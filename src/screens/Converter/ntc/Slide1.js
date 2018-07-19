import React from "react";
import SlideNav from "../../../components/SlideNav";
import BackBtn from "../../../components/BackBtn";
import InputDropdown from "../../../components/InputDropdown";
import NextButton from "../../../components/NextButton";

const Slide1 = props => {
  let { set, animation, ngnAmount, xlmAmount } = props;
  return (
    <div className={`slide slide--1 ${animation}`}>
      <SlideNav
        traits={[
          {
            src: "./assets/img/amount-icon-blue.png",
            title: "Amounts",
            active: true
          },
          {
            src: "./assets/img/wallet-icon-white.png",
            title: "Wallet Details",
            active: false
          },
          {
            src: "./assets/img/exchange-icon-white.png",
            title: "Exchange",
            active: false
          }
        ]}
      />
      <BackBtn {...props} />
      <div className="row">
        <h4 className="slide__text">
          Enter the amount you will like to sell to see how much you will
          receive
        </h4>
      </div>
      <div className="row">
        <form action="#">
          <div className="slide__form-group slide__form-group--1">
            <InputDropdown
              label="You have"
              value={ngnAmount}
              selected="NGN"
              placeholder="Enter Amount"
              onChange={value => {
                if (/[^0123456789,]/gi.test(value)) {
                  return null;
                } else {
                  return set({ state: "ngnAmount", value: value });
                }
              }}
              list={[]}
            />
            <InputDropdown
              label="You receive"
              value={xlmAmount}
              selected="XLM"
              placeholder="Enter Amount"
              onChange={value => {
                if (/[^0123456789,]/gi.test(value)) {
                  return null;
                } else {
                  return set({ state: "xlmAmount", value: value });
                }
              }}
              list={[]}
            />
            <NextButton
              onClick={() => {
                if (ngnAmount && xlmAmount) {
                  set({ state: "animation" });
                  set({ state: "slide", value: 2 });
                  return;
                }
                return alert(
                  "Please enter the necessary details before you continue"
                );
              }}
            />
          </div>
        </form>
      </div>
      <div className="row">
        <div className="conversion-rate">
          <ul className="conversion-rate__list">
            <li className="conversion-rate__item">Rate: 1 XLM = 123 NGN</li>
            <li className="conversion-rate__item">Transfer Fee: NGN 1,000</li>
            <li className="conversion-rate__item">Total spend: XLM 100</li>
            <li className="conversion-rate__item">Total receive: NGN 12,300</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Slide1;
