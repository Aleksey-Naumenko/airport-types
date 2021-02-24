import React from "react";

// components
import SearchBody from "./SearchBody";
import SearchInput from "./SearchInput";

const SearchField = () => {
  return (
    <section className="main">
      <h1 className="scoreboard__title h1-title">Search Flight</h1>

      <SearchInput />
      <SearchBody />
    </section>
  );
};

export default SearchField;
