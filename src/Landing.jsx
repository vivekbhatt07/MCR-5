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
              <label>
                <input />
              </label>
              <label>
                <input />
              </label>
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
