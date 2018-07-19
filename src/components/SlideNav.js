import React from "react";

const SlideNav = props => {
  let [img1, img2, img3] = props.traits;
  return (
    <div className="row">
      <div className="slide-nav">
        <div
          className={`slide-nav__icon-box${
            img1.active ? ` slide-nav__icon-box--active` : ``
          }`}
        >
          <img
            className="slide-nav__icon"
            src={img1.src}
            alt={`${img1.title} icon`}
          />
          <p className="slide-nav__icon-text">{img1.title}</p>
        </div>
        <div
          className={`slide-nav__icon-box${
            img2.active ? ` slide-nav__icon-box--active` : ``
          }`}
        >
          <img
            className="slide-nav__icon"
            src={img2.src}
            alt={`${img2.title} icon`}
          />
          <p className="slide-nav__icon-text">{img2.title}</p>
        </div>
        <div
          className={`slide-nav__icon-box${
            img3.active ? ` slide-nav__icon-box--active` : ``
          }`}
        >
          <img
            className="slide-nav__icon"
            src={img3.src}
            alt={`${img3.title} icon`}
          />
          <p className="slide-nav__icon-text">{img3.title}</p>
        </div>
      </div>
    </div>
  );
};
export default SlideNav;
