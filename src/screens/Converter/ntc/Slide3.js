import React from "react";
import SlideNav from "../../../components/SlideNav";
import FormHint from "../../../components/FormHint";
import BackBtn from "../../../components/BackBtn";
import InputCta from "../../../components/InputCta";

const Slide3 = props => {
  let { set } = props;
  return (
    <div className={`slide slide--3 `}>
      <SlideNav
        traits={[
          {
            src: "./assets/img/amount-icon-blue.png",
            title: "Amounts",
            active: true
          },
          {
            src: "./assets/img/wallet-icon-blue.png",
            title: "Wallet Details",
            active: true
          },
          {
            src: "./assets/img/exchange-icon-blue.png",
            title: "Exchange",
            active: true
          }
        ]}
      />
      <BackBtn {...props} set={set} />
      <div className="row">
        <h4 className="slide__text">
          Check that all details are correct before processing
        </h4>
      </div>
      <div className="row">
        <div className="trans-details__text">
          <p>You are spending:</p>
        </div>
        <div className="trans-details__text--big">
          <p>100 XLM</p>
        </div>
      </div>
      <div className="row">
        <div className="trans-details__text">
          <p>You will receive:</p>
        </div>
        <div className="trans-details__text--big">
          <p>12,300 NGN</p>
        </div>
      </div>
      <div className="row">
        <div className="trans-details__text">
          <p>Your wallet address:</p>
        </div>
        <div className="trans-details__text--big">
          <p>0x234fsdjkb89745n24878932ndfu2939hfwe7344443q4jb</p>
        </div>
      </div>
      <div className="row">
        <ul className="conversion-rate__list conversion-rate__list--white">
          <li className="conversion-rate__item">Rate: 1 XLM = 123 NGN</li>
          <li className="conversion-rate__item">Transfer Fee: NGN 1,000</li>
        </ul>
      </div>
      <div className="row">
        <div className="slide__form-group slide__form-group--3">
          <InputCta
            value="0000001349545683432"
            label="Deposite/Narration Reference"
            action="Copy"
            disable={true}
          />
          <div className="bank-details">
            <p className="bank-details__heading">Bank Details:</p>
            <p className="bank-details__text">
              Bank: <span className="bank-details__text--big">GTBank</span>
            </p>
            <p className="bank-details__text">
              Account Name:{" "}
              <span className="bank-details__text--big">
                Cowrie Integrated Systems Limited
              </span>
            </p>
            <p className="bank-details__text">
              Account Number:{" "}
              <span className="bank-details__text--big">0174408645</span>
            </p>
            <p className="bank-details__text">
              Narration/Description:{" "}
              <span className="bank-details__text--big">
                10-digit deposite reference
              </span>
            </p>
          </div>
        </div>
        <FormHint
          traits={[
            "Copy the 10-digit) deposite reference",
            "Launch your internet/mobile banking, make a transfer",
            "Your XLM wallet will be credited within a few minutes (E.T.A 5 minutes)"
          ]}
        />
      </div>
    </div>
  );
};
export default Slide3;
