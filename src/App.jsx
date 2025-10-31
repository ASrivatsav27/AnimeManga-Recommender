import React, { useState, useEffect } from "react"; // <-- FIX
import Navbar from "./Components/Navbar";
import VideDis from "./Components/VideDis";
import { Outlet } from "react-router-dom";

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
      <Outlet context={{ searchQuery: debouncedQuery }} />{" "}
      {/* Pass the debounced query */}
      <VideDis />
    </div>
  );
};

export default App;
