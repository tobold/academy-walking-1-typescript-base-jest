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

enum Command {
  M = 'M',
  Left = 'L',
  Right = 'R',
}

const directionMapper = {
  0: Direction.North,
  1: Direction.East,
  2: Direction.South,
  3: Direction.West,
}

const commandDirectionMapper = {
  [Command.Left]: -1,
  [Command.Right]: 1,
}

export interface Position {
  x: number
  y: number
  direction: Direction
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
    commands.forEach((command: Command) => {
      const currentDirection = directionMapper[this.position.direction]
      if (command === Command.M) {
        this.position.y += 1
        return
      }
      this.position.direction = currentDirection + commandDirectionMapper[command]
    })
    return this.position;
  }
}
