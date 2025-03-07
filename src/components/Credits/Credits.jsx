import React from "react";

import classes from "./Credits.module.css";

const Credits = () => {
  return (
    <div className={classes.credits} id="credits">
      <b id="brand">Cookie Clicker</b> © <a href="/">Orteil</a>, 2013 - hosted by
      <a href="/" class="link"> DashNet</a> | check out my
      <a href="/" class="link"> Twitter</a> and <a href="/">tumblr</a> | also : 
      <a href="/" class="link"> Nested</a> | the big update is <a href="/">out</a>!
    </div>
  );
};

export default Credits;