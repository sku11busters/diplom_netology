import React from "react";

import { useSelector } from "react-redux";

import TrainsMenuCard from "../../Main/SelectionTrain/TrainsMenu/TrainsMenuCard";

const ScreenTrain = () => {
  const { selectedTrain } = useSelector((state) => state.catalogTrains);

  return (
    <div className="screening-block screening-block_train">
      <TrainsMenuCard departure={selectedTrain} />
    </div>
  );
};

export default ScreenTrain;
