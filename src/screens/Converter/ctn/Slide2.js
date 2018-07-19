import React from "react";
import SlideNav from "../../../components/SlideNav";
import FormHint from "../../../components/FormHint";
import BackBtn from "../../../components/BackBtn";
import NextButton from "../../../components/NextButton";
import Input from "../../../components/Input";
import InputCta from "../../../components/InputCta";
import Dropdown from "../../../components/Dropdown";

const Slide2 = props => {
  let { set, bank, acctNumber, acctInfo } = props;
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
            src: "./assets/img/bank-icon-blue.png",
            title: "Bank Details",
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
          <Dropdown
            onSelect={bank => set({ state: "bank", value: bank })}
            selected={bank}
            placeholder="Please select your bank"
            list={[
              "Access Bank",
              "Diamond Bank",
              "Fidelity Bank",
              "GTBank",
              "UBA",
              "Zenith Bank"
            ]}
          />
          <InputCta
            placeholder="Enter your account number"
            action="Lookup"
            value={acctNumber}
            onChange={value => {
              if (/[^0123456789,]/gi.test(value)) {
                return null;
              } else {
                return set({ state: "acctNumber", value: value });
              }
            }}
          />
          <Input
            placeholder="Account information"
            value={acctInfo}
            onChange={value => {
              return set({ state: "acctInfo", value: value });
            }}
          />
        </div>
        <FormHint
          traits={[
            "From the list, select your bank where you want your funds remitted into",
            "Enter your account number and click Lookup to verify the account name and generate a memo",
            "Click Next to sell your XLM"
          ]}
        />
      </div>
      <div className="row">
        <NextButton
          onClick={() => {
            if (acctInfo && acctNumber && bank) {
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
  );
};
export default Slide2;
