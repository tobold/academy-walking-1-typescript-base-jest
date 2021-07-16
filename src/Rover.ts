export interface Grid {
  width: number
  length: number
}

export enum Direction {
  North,
  East,
  South,
  West,
}

// let directionMapper = {
//     0 : Direction.North,
//     1 : Direction.East,
//     2 : Direction.South,
//     3 : Direction.West,
// }
//
// let commandDirectionMapper = {
//     'L' : -1,
//     'R' : 1,
// }

export interface Position {
  x: number
  y: number
  direction: Direction
}

enum Command {
  M = 'M',
  Left = 'L',
  Right = 'R',
}

export class Rover {
  private grid: Grid;
  private position: Position

  constructor(grid: Grid, startingPosition: Position) {
    this.grid = grid;
    this.position = startingPosition;
  }

  manoeuver(movement: string): Position {
    const commands = movement.split('') as Command[]
    commands.forEach(command => {
      switch (command) {
          case Command.Right:
              this.position.direction = Direction.East;
              break;
          default:
              this.position.y += 1
      }
    })
    return this.position;
  }
}
