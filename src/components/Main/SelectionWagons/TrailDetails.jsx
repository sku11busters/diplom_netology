import React from "react";
import GoBackBlock from "../../Molecules/SelectionWagon/GoBackBlock";

import Card from "../../Main/CardsBlock/Card";
import {
  CardBody,
  CardBottom,
  CardTop,
} from "../../Main/CardsBlock/CardsMolecules";

const TrailDetails = ({ className, data }) => {
  if (!data) {
    return;
  }

  return (
    <div className={className + "_details"}>
      <GoBackBlock className={className} type={" come-back"} />
      <Card data={data} className={"trains-block"}>
        <CardTop className={"trains-block_card-top"} data={data} />
        <CardBody className={"trains-block_body"} data={data} />
        <CardBottom className={"trains-block"} data={data.duration} />
      </Card>
    </div>
  );
};

export default TrailDetails;
