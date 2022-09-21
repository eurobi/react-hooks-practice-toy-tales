import React from "react";

function ToyCard({ handleLike, handleDelete, toy }) {
  function onDelete(e){
    handleDelete(toy.id)
  }
  function onLike(e){
    handleLike(toy.id, toy.likes)
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={onLike} className="like-btn">Like {"<3"}</button>
      <button onClick={onDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
