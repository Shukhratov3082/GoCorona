import React from "react";
import Cub1 from "../assets/images/Experts/cub-small.svg";
import Cub2 from "../assets/images/Experts/cub-medium.svg";
import Cub3 from "../assets/images/Experts/cub-big.svg";
import Bg from "../assets/images/Experts/experts-bg.svg";
const Experts = () => {
  return (
    <div className="experts">
      <div className="experts__header">
        <div className="header__text">
          <span>2m</span>
          <p>Users</p>
        </div>
        <div className="header__text">
          <span>78</span>
          <p>Countries</p>
        </div>
        <div className="header__text">
          <span>10,000+</span>
          <p>Medical experts</p>
        </div>
        <img className="header__img img1" src={Cub1} alt="" />
        <img className="header__img img2" src={Cub2} alt="" />
        <img className="header__img img3" src={Cub3} alt="" />
      </div>
      <div className="experts__info">
        <div className="info__content">
          <h1>
            Talk to <span>experts.</span>
          </h1>
          <p>
            Book appointments or submit queries into thousands of forums
            concerning health issues and prevention against noval Corona Virus.
          </p>
          <button>Features</button>
        </div>
        <div className="info__img">
          <img src={Bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experts;
