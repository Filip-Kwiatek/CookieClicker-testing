import React from "react";

import classes from "./Money.module.css";

const Money = ({ money_quantity }) => {
  return (
    <div className={classes.wrapper} id="cookie__image">
      <img
        className={classes.image}
        src="https://orteil.dashnet.org/experiments/cookie/currency.png"
        alt="cookie"
      />
      <span id="money_quantity">{money_quantity}</span>
    </div>
  );
};

export default Money;