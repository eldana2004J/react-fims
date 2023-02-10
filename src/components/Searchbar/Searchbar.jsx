import React, { useState } from "react";
export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <div className="searchbar_box">
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <input
            className="SearchForm-input SearchForm-inputt"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}
