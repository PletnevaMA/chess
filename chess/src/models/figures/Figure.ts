import { Colors } from "../Colors";
import logo from "../../assets/white-king.png";
import { Cell } from "../Cell";

export enum figureNames {
  FIGURE = "figure",
  KING = "king",
  KNIGHT = "knight",
  PAWN = "pawn",
  QUEEN = "queen",
  ROOK = "rook",
  BISHOP = "bishop",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: figureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = figureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {}
}
