import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Detail from "./Detail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:dishId" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
