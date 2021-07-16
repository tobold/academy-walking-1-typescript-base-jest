import { Direction, Grid, Position, Rover } from "./Rover";

describe('Rover', () => {
  it.each([
    ['M', {x: 0, y: 1, direction: Direction.North}],
    ['MM', {x: 0, y: 2, direction: Direction.North}],
    ['R', {x: 0, y: 0, direction: Direction.East}]
  ])
  ('should accept %s and return %s', (input, output) => {
    const grid: Grid = {length: 10, width: 10}
    const startingPosition: Position = {direction: Direction.North, x: 0, y: 0};
    const rover = new Rover(grid, startingPosition)
    const newPosition: Position = rover.manoeuver(input);
    expect(newPosition).toEqual(output)
  });
})
;
