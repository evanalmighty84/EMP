import React from "react";
import { render } from "react-dom";
import UserProfile from "./components/user-profile";

import data from "./data/profile.json";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <UserProfile data={data} />
  </div>
);

render(<App />, document.getElementById("root"));
