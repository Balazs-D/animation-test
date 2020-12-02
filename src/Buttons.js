import React, { useContext } from "react";

import { Context } from "./Context/Context";

const Buttons = () => {
  const context = useContext(Context);

  const one = () => {
    context.setFeedActive(true);
    context.setRosterActive(false);
    context.setContactActive(false);
    context.setFormActive(false);
  };

  const two = () => {
    context.setFeedActive(false);
    context.setRosterActive(true);
    context.setContactActive(false);
    context.setFormActive(false);
  };

  const three = () => {
    context.setFeedActive(false);
    context.setRosterActive(false);
    context.setContactActive(true);
    context.setFormActive(false);
  };
  const four = () => {
    context.setFeedActive(false);
    context.setRosterActive(false);
    context.setContactActive(false);
    context.setFormActive(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        zIndex: 1000,
      }}
    >
      <button onClick={() => one()} style={{ margin: 20 }}>
        1
      </button>
      <button onClick={() => two()} style={{ margin: 20 }}>
        2
      </button>
      <button onClick={() => three()} style={{ margin: 20 }}>
        3
      </button>
      <button onClick={() => four()} style={{ margin: 20 }}>
        4
      </button>
    </div>
  );
};

export default Buttons;
