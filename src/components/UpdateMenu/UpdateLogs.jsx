import React from "react";

import classes from "./UpdateLogs.module.css";

const UpdateLogs = () => {
  const combinedLogs = [
    {
      data: "06.09.2013",
      version: "0.126",
      logs1: "-technical fixes",
      logs2: "-better servers!",
    },
    {
      data: "",
      version: "0.125",
      logs1: "-added a new object",
      logs2: "-welp I'm going back to work",
    },
    {
      data: "",
      version: "0.124",
      logs1:
        "-elder pledge is cheaper and now buffs grandmas and clicking while active",
      logs2: "-page title now displays cookies",
    },
    {
      data: "",
      version: "0.123",
      logs1: "-added cookies per second",
      logs2: "-reworked grandmas",
      logs3: "-still not the big update",
    },
    {
      data: "",
      version: "0.122",
      logs1: "-technical fixes",
      logs2: "-better servers!",
    },
    {
      data: "13.08.2013",
      version: "0.121",
      logs1: "-import/export save",
      logs2: "-ask confirm on reset",
      logs3: "-speed tweaks",
    },
  ];
  return (
    <>
      {combinedLogs.map(({ data, version, logs1, logs2, logs3, index }) => {
        return (
          <ul key={version} className={classes.wrap}>
            <li class="data">{data}</li>
            <li className={classes.black} class="version">
              {version}
            </li>
            <li class="log1">{logs1}</li>
            <li class="log2">{logs2}</li>
            <li class="log3">{logs3}</li>
          </ul>
        );
      })}
    </>
  );
};

export default UpdateLogs;
