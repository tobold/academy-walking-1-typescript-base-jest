interface Grid {
  width: number
  length: number
}

enum Direction {
  North,
  East,
  South,
  West,
}

interface Position {
  x: number
  y: number
  direction: Direction
}

describe('Rover', () => {
  it('should accept a move command and return its position', () => {
    const grid: Grid = {length: 10, width: 10}
    const startingPosition: Position = {direction: Direction.North, x: 0, y: 0};
    const rover = new Rover(grid, startingPosition)
    const newPosition: Position = rover.manoeuver('M');
    expect(newPosition).toBe({x: 0, y: 1, direction: Direction.North})
  });
});