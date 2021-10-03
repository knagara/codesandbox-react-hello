import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <>
      <h1 style={contentStyle}>Hello</h1>
      <ColorfulMessage color="blue">World</ColorfulMessage>
      <ColorfulMessage color="#ff00ff">World</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
