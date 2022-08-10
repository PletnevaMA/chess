import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.avaliable && cell.figure ? "green" : "" }}
    >
      {!cell.figure && cell.avaliable && <div className="avaliable"></div>}
      {cell.figure?.logo && (
        <img alt={String(cell.figure)} src={cell.figure.logo} />
      )}
    </div>
  );
};

export default CellComponent;
