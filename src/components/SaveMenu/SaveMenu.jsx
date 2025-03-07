import React from "react";

import classes from "./SaveMenu.module.css";
const SaveMenu = ({ cookiesps }) => {
  return (
    <ul className={classes.wrapper}>
      <li>
        <p id="cookie_per_sec">cookies/second : {cookiesps}</p>
      </li>
      <li id="export_save">
        <a>Export Save</a>
      </li>
      <li id="import_save">
        <a>Import Save</a>
      </li>
      <li
        id="reset"
        onClick={() => {
          window.location.reload();
        }}
      >
        <a>Reset</a>
      </li>
      <li>
        <a>Numbers On</a>
      </li>
      <li>
        <a>Flashing On</a>
      </li>
      <p id="version">running on v.0.1251</p>
    </ul>
  );
};

export default SaveMenu;
