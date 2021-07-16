import { Direction, Grid, Position, Rover } from "./Rover";

describe('Rover', () => {
  it.each([{
    input: 'M',
    output: {x: 0, y: 1, direction: Direction.North}
  }, {
    input: 'MM',
    output: {x: 0, y: 2, direction: Direction.North}
  }])('should accept a move command and return its position', ({input, output}) => {
    const grid: Grid = {length: 10, width: 10}
    const startingPosition: Position = {direction: Direction.North, x: 0, y: 0};
    const rover = new Rover(grid, startingPosition)
    const newPosition: Position = rover.manoeuver(input);
    expect(newPosition).toEqual(output)
  });
});
