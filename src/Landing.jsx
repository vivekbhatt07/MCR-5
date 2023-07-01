import React, { useState } from "react";

import Filter from "./Components/Filter/index";
import { recipeList } from "./Data/data";
import Card from "./Components/Card";
import { useData } from "./Context/DataContext";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalProvider from "./Components/ModalProvider";

const Landing = () => {
  const { filterByList } = useData();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const [modalData, setmodalData] = useState({
    dishImage: "",
    dishName: "",
    dishType: "",
    dishIngredients: "",
    dishInstructions: "",
    postImageName: "",
  });

  const handleModalData = (event) => {
    const { name, type, files, value } = event.target;
    setmodalData((prevAddModalData) => {
      return {
        ...prevAddModalData,
        [name]:
          type == "file" && files.length !== 0
            ? URL.createObjectURL(files[0])
            : value,
        postImageName:
          type == "file" && files.length !== 0 ? files[0].name : "",
      };
    });
  };

  console.log(modalData);

  const submitHandler = (event) => {
    event.preventDefault();
    closeAddModal();
  };

  return (
    <div className="bg-blue-950 min-h-screen text-blue-50 ">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
        <Filter />
        <div className="flex flex-col gap-6">
          <h1>All Recipies</h1>
          <div className="flex p-4">
            <ModalProvider
              modalTitle={"ADD DISH"}
              isOpen={isAddModalOpen}
              closeModal={closeAddModal}
              modalBtnVariant={
                <Button sx={{ background: "#fff" }} onClick={openAddModal}>
                  <AddIcon />
                </Button>
              }
            >
              <form className="flex flex-col gap-3" onSubmit={submitHandler}>
                <label className="flex flex-col gap-2 text-blue-950">
                  <input
                    type="file"
                    accept="image/*"
                    name="dishImage"
                    onChange={(event) => {
                      handleModalData(event);
                    }}
                  />
                </label>

                <label className="flex flex-col gap-2 text-blue-950">
                  <span>NAME</span>
                  <input
                    name="dishName"
                    value={modalData.dishName}
                    onChange={handleModalData}
                    className="text-blue-950"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-blue-950">
                  <span>CUISINE</span>
                  <input
                    name="dishType"
                    value={modalData.dishType}
                    onChange={handleModalData}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-blue-950">
                  <span>INGREDIENTS</span>
                  <textarea
                    name="dishIngredients"
                    value={modalData.dishIngredients}
                    onChange={handleModalData}
                  />
                </label>
                <label className="flex flex-col gap-2 text-blue-950">
                  <span>INSTRUCTIONS</span>
                  <textarea
                    name="dishInstructions"
                    value={modalData.dishInstructions}
                    onChange={handleModalData}
                  />
                </label>
                <Button sx={{ background: "#fff" }} type="submit">
                  ADD
                </Button>
              </form>
            </ModalProvider>
          </div>
          <div className="flex flex-wrap gap-4">
            {filterByList.map((currentRecipe) => {
              return <Card {...currentRecipe} key={currentRecipe.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
