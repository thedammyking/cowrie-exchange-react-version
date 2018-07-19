import React from "react";
import SlideNav from "../../../components/SlideNav";
import FormHint from "../../../components/FormHint";
import BackBtn from "../../../components/BackBtn";
import NextButton from "../../../components/NextButton";
import Input from "../../../components/Input";
import InputCta from "../../../components/InputCta";

const Slide2 = props => {
  let { set, xlmAddress, memoInput } = props;
  return (
    <div className={`slide slide--2`}>
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
            src: "./assets/img/exchange-icon-white.png",
            title: "Exchange",
            active: false
          }
        ]}
      />
      <BackBtn {...props} />
      <div className="row">
        <div className="slide__form-group slide__form-group--2">
          <Input
            placeholder="Enter your XLM address"
            value={xlmAddress}
            onChange={value => set({ state: "xlmAddress", value: value })}
          />
          <InputCta
            placeholder="Enter MEMO (optional)"
            value={memoInput}
            action="Generate"
            onChange={value => {
              if (/[^0123456789,]/gi.test(value)) {
                return null;
              } else {
                return set({ state: "memoInput", value: value });
              }
            }}
          />
          <div className="row">
            <NextButton
              onClick={() => {
                if (xlmAddress && memoInput) {
                  set({ state: "slide", value: 3 });
                  return;
                }
                return alert(
                  "Please enter the necessary details before you continue"
                );
              }}
            />
          </div>
        </div>
        <FormHint
          traits={[
            "Enter your XLM address",
            "Enter your optional memo (exchange address always require a memo",
            "Click NEXT button to generate deposite/narration reference (10-digit number)"
          ]}
        />
      </div>
    </div>
  );
};
export default Slide2;
