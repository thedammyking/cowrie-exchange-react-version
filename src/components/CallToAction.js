import React from "react";

const CallToAction = props => {
  return (
    <section className="section-cta">
      <div className="row">
        <h1 className="cta__text">
          The Fastest Way to trade Cryptocurrency with Naira at the
          <span className="cta__text-bold">best rate</span>
        </h1>
      </div>

      <div className="row">
        <div
          className="cta__btn"
          onClick={async () => {
            await props.selectConverter("ctn");
            props.setLeave();
            setTimeout(() => {
              props.history.replace("/converter");
            }, 200);
          }}
        >
          <p className="cta__btn-text"> I want to convert</p>
          <p>
            <span className="cta__btn-text--pupple">Crypto</span> to
            <span className="cta__btn-text--pupple">NGN</span>
          </p>
        </div>

        <div
          className="cta__btn"
          onClick={async () => {
            await props.selectConverter("ntc");
            props.setLeave();
            setTimeout(() => {
              props.history.replace("/converter");
            }, 100);
          }}
        >
          <p className="cta__btn-text"> I want to convert</p>
          <p>
            <span className="cta__btn-text--pupple">NGN</span> to
            <span className="cta__btn-text--pupple">Crypto</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
