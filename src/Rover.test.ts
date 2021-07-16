import { Direction, Grid, Position, Rover } from "./Rover";

describe('Rover', () => {
  it.each([
    ['M', {x: 0, y: 1, direction: Direction.North}, {direction: Direction.North, x: 0, y: 0}],
    ['MM', {x: 0, y: 2, direction: Direction.North}, {direction: Direction.North, x: 0, y: 0}],
    ['R', {x: 0, y: 0, direction: Direction.East}, {direction: Direction.North, x: 0, y: 0}],
    ['L', {x: 0, y: 0, direction: Direction.North}, {direction: Direction.East, x: 0, y: 0}],
    ['RR', {x: 0, y: 0, direction: Direction.South}, {direction: Direction.North, x: 0, y: 0}],
    ['RM', {x: 0, y: 0, direction: Direction.North}, {direction: Direction.East, x: 1, y: 0}],
  ])
  ('should accept %s and return %s', (input: string, output: Position, startingPosition: Position) => {
    const grid: Grid = {length: 10, width: 10}
    const rover = new Rover(grid, startingPosition)
    const newPosition: Position = rover.manoeuver(input);
    expect(newPosition).toEqual(output)
  });
})
;
