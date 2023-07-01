import React, { createContext, useContext, useReducer } from "react";
import { recipeList } from "../Data/data";

const DataContext = createContext();

const InitialState = {
  recipeArray: [...recipeList],
  searchFont: "",
  searchType: "recipeName",
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return { ...state, searchFont: action.payload };
    }
    case "SET_TYPE": {
      return { ...state, searchType: action.payload };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);

  const simpleString = (str) => {
    return str.trim().split(" ").join("").toLowerCase();
  };

  let originalList = state.recipeArray;
  const filterByList = originalList.filter((currentRecipe) => {
    let ingredients = "";
    if (state.searchType == "ingredients") {
      ingredients = currentRecipe[state.searchType].join(" ").toLowerCase();
    } else {
      ingredients = currentRecipe[state.searchType].toLowerCase();
    }
    return ingredients.includes(state.searchFont.toLowerCase());
  });

  return (
    <DataContext.Provider value={{ state, dispatch, filterByList }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
