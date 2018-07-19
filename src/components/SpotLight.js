import React from "react";

const SpotLight = () => (
  <section className="section-spot-light">
    <div className="row">
      <div className="col-1-of-3">
        <div className="spot-light__card">
          <img
            className="spot-light__card-img"
            src="./assets/img/icon1.png"
            alt="Cowrie Exchange Icon"
          />
          <p className="spot-light__card-text">
            Cowrie Exchange is brought to you by Cowrie Integrated Systems. We
            are a team made up of financial and technology professionals with a
            strong tack record in the fintech and crypto space.
          </p>
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="spot-light__card">
          <img
            className="spot-light__card-img"
            src="./assets/img/icon2.png"
            alt="Cowrie Exchange Icon"
          />
          <p className="spot-light__card-text">
            At Cowry exchange, we offer the fairest and lowest fees for
            cryptocurrency transactions. You can also by cryptocurrency directly
            from your bank account thereby eliminating all forms of bank card
            charges.
          </p>
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="spot-light__card">
          <img
            className="spot-light__card-img"
            src="./assets/img/icon3.png"
            alt="Cowrie Exchange Icon"
          />
          <p className="spot-light__card-text">
            Transactions occur extremely fast and you can be sure to get value
            within 5 max minutes of initiating your transaction. All our
            payments are automated and there are absolutely no wait times.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SpotLight;
