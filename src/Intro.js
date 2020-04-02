import "./Intro.css";
import { useSpring, useTransition, animated } from "react-spring";
import React, { useState } from "react";

function Intro() {
  const [clicked1, setbutton1] = useState(false);
  const [clicked2, setbutton2] = useState(false);
  const { scale1 } = useSpring({ scale1: clicked1 ? 0.8 : 1 });
  const { scale2 } = useSpring({ scale2: clicked2 ? 0.8 : 1 });

  const [items, set] = useState([{ key: 1, text: "MAFIA" }]);
  const transitions = useTransition(items, item => item.key, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      color: "red",
      transform: "perspective(600px) translate3d(0,-40px,0)"
    },
    enter: {
      opacity: 1,
      height: 80,
      innerHeight: 80,
      color: "white",
      transform: "perspective(600px) translate3d(0,250px,0)"
    }
  });
  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {item.text}
        </animated.div>
      ))}
      <div className="btn">
        <animated.button
          onMouseDown={() => setbutton1(true)}
          onMouseUp={() => setbutton1(false)}
          style={{
            backgroundColor: "white",
            height: "50px",
            width: "100px",
            color: "red",
            fontFamily: "Ubuntu",
            fontSize: "15px",
            transform: scale1.interpolate(s => `scale(${s})`)
          }}
          children="Start Game"
        />
        <br />
        <animated.button
          onMouseDown={() => setbutton2(true)}
          onMouseUp={() => setbutton2(false)}
          style={{
            backgroundColor: "red",
            height: "50px",
            width: "100px",
            color: "#FFF",
            fontFamily: "Ubuntu",
            fontSize: "15px",
            transform: scale2.interpolate(s => `scale(${s})`)
          }}
          children="Join Room"
        />
      </div>
    </div>
  );
}

export default Intro;
