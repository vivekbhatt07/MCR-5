import { useParams } from "react-router-dom";
import { useData } from "./Context/DataContext";

const Detail = () => {
  const { dishId } = useParams();
  const { state } = useData();

  const getDish = state.recipeArray.find((current) => {
    return current.id == dishId;
  });

  //   const { id, recipeName, cuisine, image, ingredients, instructions } = getDish;

  return (
    <div className="bg-blue-950 min-h-screen text-blue-50">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
        <h3 className="text-center">{getDish?.recipeName}</h3>
        <div className="flex gap-5 flex-col">
          <div className="w-[300px] h-[200px] bg-[#ddd] border border-blue-950">
            <img src={image} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex justify-between gap-2">
              <strong>Cuisine Type</strong>
              <span>{getDish?.cuisine}</span>
            </p>
            <p className="flex justify-between gap-2">
              <strong>Ingredients</strong>
              <span>{getDish?.ingredients.join(", ")}</span>
            </p>
            <div className="flex flex-col gap-2">
              <strong>Instructions</strong>
              <div>
                {getDish?.instructions.map((current) => {
                  return <li>{current}</li>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
