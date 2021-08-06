import { World } from "./Location";

enum Direction {
  N = "N",
  E = "E",
  S = "S",
  W = "W",
}

enum Instruction {
  LOOK = "LOOK",
}

export class Katacombs {
  execute(command: string) {
    const [instruction, direction] = command.split(" ");

    if (instruction === Instruction.LOOK) {
      if (direction === Direction.N) {
        return "BAGELSHOP.\nSELLS BAGELS AND CAKES.";
      }

      if (direction === Direction.E) {
        return "RICHMIX.\nCINEMA.";
      }

      if (direction === Direction.S) {
        return "LIVERPOOL ST STATION.\nTRAINS.";
      }

      if (direction === Direction.W) {
        return "ALDGATE.\nLOTS OF NEW BUILDINGS.";
      }

      return;
    }

    return "I don't understand that. English please!";
  }

  start(world: World) {
    return "LOST IN SHOREDITCH.\nYOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.";
  }
}
