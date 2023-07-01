import React from "react";
import { Link, useParams } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useData } from "../../Context/DataContext";

const Card = (props) => {
  const { dispatch } = useData();
  const { id, recipeName, cuisine, image, ingredients, instructions } = props;
  return (
    <article className="relative flex flex-col gap-3 p-4 bg-blue-50 rounded-md text-blue-950">
      <div className="absolute right-0 flex gap-3">
        <Button
          sx={{ background: "#000", opacity: "80%" }}
          onClick={() => {
            dispatch({ type: "DELETE", payload: id });
          }}
        >
          <DeleteIcon />
        </Button>
        <Button sx={{ background: "#000", opacity: "80%" }}>
          <EditIcon />
        </Button>
      </div>

      <div className="w-[300px] h-[200px] bg-[#ddd] border border-blue-950">
        {/* <img src={image} alt={recipeName} /> */}
      </div>
      <h3 className="text-center text-2xl">{recipeName}</h3>
      <p className="flex justify-between gap-2">
        <strong>Cuisine Type</strong>
        <span>{cuisine}</span>
      </p>
      <p className="flex justify-between gap-2">
        <strong>Ingredients</strong>
        <Link className="flex gap-2" to={`/${id}`}>
          <span>See Recipe</span>
          <ArrowForwardIosIcon className="text-sm w-[10px]" />
        </Link>
      </p>
      <p className="flex justify-between gap-2">
        <strong>Instructions</strong>
        <Link className="flex gap-2" to={`/${id}`}>
          <span>See Recipe</span>
          <ArrowForwardIosIcon className="text-sm w-[10px]" />
        </Link>
      </p>
    </article>
  );
};

export default Card;
