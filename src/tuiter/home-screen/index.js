import React from "react";
import "./index.css";
import TuitsList from "../tuits";
import WhatsHappening from "../whats-happening";

function HomeScreen() {
  return (
    <>
      <h2>Home</h2>
      <WhatsHappening />
      <TuitsList />
    </>
  );
}
export default HomeScreen;
