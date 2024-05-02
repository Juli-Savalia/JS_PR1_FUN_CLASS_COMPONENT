import { useState } from "react";
import Record from "./Record";
import { employee } from "./data";

function App() {
  const rec = () => {};
  return (
    <>
      <Record employeedata={employee} />
    </>
  );
}

export default App;
