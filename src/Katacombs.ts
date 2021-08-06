import { World } from "./Location";

export class Katacombs {
  execute(command: string) {
    const [instruction, direction] = command.split(" ");

    if (instruction === "LOOK") {
      if (direction === "N") {
        return "BAGELSHOP.\nSELLS BAGELS AND CAKES."
      }

      if (direction === "E") {
        return "RICHMIX.\nCINEMA."
      }

      return;
    }

    return "I don't understand that. English please!"
  }

  start(world: World) {
    return "LOST IN SHOREDITCH.\nYOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
  }
}