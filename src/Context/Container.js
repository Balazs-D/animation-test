import React, { Fragment, useState } from "react";
import { Context } from "./Context";

//We pass in props to the Container so we can access the children
const Container = (props) => {
  // Route Active States
  const [feedActive, setFeedActive] = useState(true);
  const [rosterActive, setRosterActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [adminActive, setAdminActive] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    //Pass the states and setState functions through the context.provider. Wrap around the children.
    <Context.Provider
      value={{
        infoOpen,
        setInfoOpen,
        feedActive,
        setFeedActive,
        rosterActive,
        setRosterActive,
        contactActive,
        setContactActive,
        formActive,
        setFormActive,
        adminActive,
        setAdminActive,
      }}
    >
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
