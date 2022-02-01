import React from "react";
import { render } from "react-dom";

import IconComponent from "./components/IconComponent";

const App = () => {
  return <IconComponent name="searchMinus" color="blue" />;
};

render(<App />, document.getElementById("root"));
