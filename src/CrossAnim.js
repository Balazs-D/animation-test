import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "./Context/Context";

import BG001 from "./graphics/BG01.jpg";
import BG002 from "./graphics/BG02.jpg";
import BG003 from "./graphics/BG03.jpg";
import BG004 from "./graphics/BG04.jpg";

const Main = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 300;
    position: absolute;
    top: 0;
  }
  @media (min-width: 800px) {
    align-items: center;

    z-index: 0;
  }
`;

const MasterDiv = styled.div`
  width: 85vw;
  height: 100%;

  position: absolute;
  will-change: transform;
`;

const Div2 = styled(MasterDiv)`
  background-image: url(${BG001});
  background-size: 100%;
`;
// Feed
const Div3 = styled(MasterDiv)`
  background-image: url(${BG002});
  background-size: 100%;
`;
const Div4 = styled(MasterDiv)`
  background-image: url(${BG003});
  background-size: 100%;
`;
const Div5 = styled(MasterDiv)`
  background-image: url(${BG004});
  background-size: 100%;
`;

const CrossAnim = () => {
  // let W = window.innerWidth;
  const gsap = window.gsap;

  const tl = gsap.timeline();

  const context = useContext(Context);

  let Dur = 1.5;

  useEffect(() => {
    if (context.feedActive) {
      tl.to(
        ".crossFour",
        { x: "-150%", skewX: -40, duration: Dur, autoAlpha: 0.9 },
        0
      )
        .to(
          ".crossTwo",
          { x: "150%", skewX: 40, duration: Dur, autoAlpha: 0.9 },
          0
        )
        .to(
          ".crossFive",
          { x: "150%", skewX: -40, duration: Dur, autoAlpha: 0.9 },
          0
        )
        .to(
          ".crossThree",
          { x: "7%", skewX: 10, duration: Dur, autoAlpha: 1 },
          0
        );
    }
    if (context.rosterActive) {
      tl.to(
        ".crossThree",
        { skewX: -40, x: "150%", duration: Dur, autoAlpha: 0.5 },
        0
      )
        .to(
          ".crossTwo",
          { x: "150%", skewX: 40, duration: Dur, autoAlpha: 0.5 },
          0
        )
        .to(
          ".crossFive",
          { x: "-150%", skewX: -40, duration: Dur, autoAlpha: 0.5 },
          0
        )
        .to(
          ".crossFour",
          { x: "7%", skewX: -10, duration: Dur, autoAlpha: 1 },
          0
        );
    }
    if (context.contactActive) {
      tl.to(
        ".crossFour",
        { x: "150%", skewX: -40, duration: Dur, autoAlpha: 0.9 },
        0
      )
        .to(
          ".crossTwo",
          { x: "150%", skewX: -40, duration: Dur, autoAlpha: 0.9 },
          0
        )
        .to(
          ".crossThree",
          { x: "-150%", skewX: 40, duration: Dur, autoAlpha: 0.9 },
          0
        )
        .to(
          ".crossFive",
          { x: "8%", skewX: -10, duration: Dur, autoAlpha: 1 },
          0
        );
    }
    if (context.formActive) {
      tl.to(
        ".crossFour",
        { x: "150%", skewX: 44, duration: Dur, autoAlpha: 0.9 },
        0
      )
        .to(
          ".crossThree",
          { x: "150%", skewX: -24, duration: Dur, autoAlpha: 0.9 },
          0
        )
        .to(
          ".crossFive",
          { x: "-150%", skewX: 24, duration: Dur, autoAlpha: 0.9 },
          0
        )
        .to(".crossTwo", { x: 120, skewX: 0, duration: Dur, autoAlpha: 1 }, 0);
    }
    // eslint-disable-next-line
  }, [
    context.feedActive,
    context.rosterActive,
    context.contactActive,
    context.formActive,
    tl,
  ]);

  return (
    <Main>
      <Div2 className="crossTwo"></Div2>
      <Div3 className="crossThree"></Div3>
      <Div4 className="crossFour"></Div4>
      <Div5 className="crossFive"></Div5>
    </Main>
  );
};

export default CrossAnim;
