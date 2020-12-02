import React, { useContext } from 'react';

import { Context } from './Context/Context';

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
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <button onClick={() => one()} style={{ margin: 20 }}>
        <p> (1) Feed</p>
      </button>
      <button onClick={() => two()} style={{ margin: 20 }}>
        <p> (2) Roster</p>
      </button>
      <button onClick={() => three()} style={{ margin: 20 }}>
        <p> (3) Book now</p>
      </button>
      <button onClick={() => four()} style={{ margin: 20 }}>
        <p> (4) Contactc</p>
      </button>
    </div>
  );
};

export default Buttons;
