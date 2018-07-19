import React from "react";
import SlideNav from "../../../components/SlideNav";
import FormHint from "../../../components/FormHint";
import BackBtn from "../../../components/BackBtn";
import InputCta from "../../../components/InputCta";

const Slide3 = props => {
  let { set } = props;
  return (
    <div className={`slide slide--3`}>
      <SlideNav
        traits={[
          {
            src: "./assets/img/amount-icon-blue.png",
            title: "Amounts",
            active: true
          },
          {
            src: "./assets/img/bank-icon-blue.png",
            title: "Bank Details",
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
          <p>12,300 NGN</p>
        </div>
      </div>
      <div className="row">
        <div className="trans-details__text">
          <p>You will receive:</p>
        </div>
        <div className="trans-details__text--big">
          <p>100 XLM</p>
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
            disable={true}
            value="0000001349545683432"
            label="Memo"
            action="Copy"
          />
          <InputCta
            value="0x234fsdjkb89745n24878932ndfu2939hfwe7344443q4jb"
            label="Our XLM Address"
            action="Copy"
            disable={true}
          />
        </div>
        <FormHint
          traits={[
            "Copy the memo (16-digit) and our XLM address",
            "For your XLM wallet, make payment using 16-digit memo and our XLM address as the destination",
            "Your bank account will be credited with the equivalent NGN within few minutes (E.T.A 2 minutes)"
          ]}
        />
      </div>
    </div>
  );
};
export default Slide3;
