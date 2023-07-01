import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("recipeName");
  const { dispatch } = useData();

  return (
    <div className="flex border border-blue-50 rounded-md overflow-hidden gap-4">
      <input
        placeholder="Search Items"
        className="w-72 text-blue-950"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
          dispatch({ type: "SET_TEXT", payload: event.target.value });
        }}
      />
      <fieldset className="flex gap-3">
        <legend>Filters</legend>
        <label className="flex gap-2">
          <input
            type="radio"
            name="searchByCategory"
            value="recipeName"
            checked={"recipeName" == category}
            onChange={(event) => {
              setCategory(event.target.value);
              dispatch({ type: "SET_TYPE", payload: event.target.value });
            }}
          />
          <span>Name</span>
        </label>
        <label className="flex gap-2">
          <input
            type="radio"
            name="searchByCategory"
            value="ingredients"
            checked={"ingredients" == category}
            onChange={(event) => {
              setCategory(event.target.value);
              dispatch({ type: "SET_TYPE", payload: event.target.value });
            }}
          />
          <span>Ingredients</span>
        </label>
        <label className="flex gap-2">
          <input
            type="radio"
            name="searchByCategory"
            value="cuisine"
            checked={"cuisine" == category}
            onChange={(event) => {
              setCategory(event.target.value);
              dispatch({ type: "SET_TYPE", payload: event.target.value });
            }}
          />
          <span>Cuisine</span>
        </label>
      </fieldset>
    </div>
  );
};

export default Filter;
