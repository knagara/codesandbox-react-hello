import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("Start");
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(false);

  const onClickCountUp = () => setNum(num + 1);
  const onClickSwitchFlag = () => setFlag(!flag);

  useEffect(() => {
    console.log("Fisrt");
  }, []);

  useEffect(() => {
    if (num % 3 === 0) {
      flag || setFlag(true);
    } else {
      flag && setFlag(false);
    }
  }, [num]);

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <>
      <h1 style={contentStyle}>Hello</h1>
      <ColorfulMessage color="blue">World</ColorfulMessage>
      <ColorfulMessage color="#ff00ff">World</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {flag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
