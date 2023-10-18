import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const Cards = ({ data }) => {
  const header = <img alt="Card" src={data.sprites.other.home.front_default} />;
  {
    console.log(data);
  }
  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
    </>
  );
  {
  }

  return (
    <div className="card flex justify-content-center " style={{ width: "28%" }}>
      <Card
        title={data.name.toUpperCase()}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0" style={{ fontWeight: "bold" }}>
          Especie : {data.species.name}
        </p>
        <p className="m-0" style={{ fontWeight: "bold" }}>
          Experiencia : {data.base_experience}
        </p>
      </Card>
    </div>
  );
};
