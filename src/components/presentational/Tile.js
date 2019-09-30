import React from "react";

const Tile = ({ id, tile, initialBoard, updateBoard }) => {
  return (
    <div className="Tile">
      <input
        type="number"
        min="1"
        max="9"
        disabled={initialBoard[id] !== "." ? true : false}
        value={tile}
        onChange={e => updateBoard(e.target.value, id)}
      />
    </div>
  );
};

export default Tile;
