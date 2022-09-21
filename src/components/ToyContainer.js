import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ handleLike, handleDelete, toys }) {
  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard handleLike={handleLike} handleDelete={handleDelete} key={toy.name} toy={toy}></ToyCard>)}</div>
  );
}

export default ToyContainer;
