import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figureNames } from "./Figure";
import blackLogo from "../../assets/black-khight.png";
import whiteLogo from "../../assets/black-khight.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figureNames.KNIGHT;
  }
}
