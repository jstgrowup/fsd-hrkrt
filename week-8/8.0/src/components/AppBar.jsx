import React from "react";
import SearchBar from "./SearchBar";

const AppBar = () => {
  return (
    <div className=" flex justify-between">
      {" "}
      <div>Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>Youtube</div>
    </div>
  );
};

export default AppBar;
