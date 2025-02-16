import React from "react";

const JokeItem = ({ item }) => {
  return (
    <>
      <p className="card-text">{item.setup}</p>
      <h5 className="card-title">{item.punchline}</h5>
    </>
  );
};

export default JokeItem;
