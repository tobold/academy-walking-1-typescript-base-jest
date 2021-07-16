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

export interface Position {
  x: number
  y: number
  direction: Direction
}

enum Command {
  M = 'M'
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
      this.position.y += 1
    })
    return this.position;
  }
}
