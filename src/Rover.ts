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

export class Rover {
    private grid: Grid;
    private startingPosition: Position;
    constructor(grid: Grid, startingPosition: Position) {
        this.grid = grid;
        this.startingPosition = startingPosition;
    }


    manoeuver(movement: string): Position {
        return {direction: Direction.North, x: 0, y: 1};
    }
}
