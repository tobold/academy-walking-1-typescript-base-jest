import { World, Location } from "./Location";

enum Direction {
  N = "N",
  E = "E",
  S = "S",
  W = "W",
}

enum Instruction {
  LOOK = "LOOK",
  GO = "GO",
}

export class Katacombs {
  constructor(private world: World) {}

  execute(command: string) {
    const [instruction, direction] = command.split(" ");

    if (instruction === Instruction.LOOK) {
      if (direction === Direction.N) {
        const location: Location = this.world[0][1];
        return location.toString();
      }
      if (direction === Direction.E) {
        const location: Location = this.world[1][2];
        return location.toString();
      }
      if (direction === Direction.S) {
        const location: Location = this.world[2][1];
        return location.toString();
      }
      if (direction === Direction.W) {
        const location: Location = this.world[1][0];
        return location.toString();
      }
      return;
    }

    if (instruction === Instruction.GO) {
      if (direction === Direction.N) {
        const location: Location = this.world[0][1];
        return "You are now at the " + location.toString();
      }
      if (direction === Direction.E) {
        const location: Location = this.world[1][2];
        return "You are now at the " + location.toString();
      }
      if (direction === Direction.S) {
        const location: Location = this.world[2][1];
        return "You are now at the " + location.toString();
      }
      if (direction === Direction.W) {
        const location: Location = this.world[1][0];
        return "You are now at the " + location.toString();
      }
      return;
    }

      return "I don't understand that. English please!";
  }

  start() {
    return "LOST IN SHOREDITCH.\nYOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.";
  }
}
