class Location {
  constructor(private title: string, private description: string) {
  }
}

export type World = Location[][]

export const BasicWorld: World = [
  [
    new Location('BOXPARK', 'SOME SHIPPING CONTAINERS'),
    new Location('BAGELSHOP', 'SELLS BAGELS AND CAKES'),
    new Location('MAKERS', 'TEACH YOU HOW TO CODE')
  ],
  [
    new Location('LIVERPOOL ST STATION', 'TRAINS'),
    new Location('LOST IN SHOREDITCH', 'YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \nAROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \nA SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.'),
    new Location('RICHMIX', 'CINEMA')
  ],[
    new Location('SOMEWHERE', 'A'),
    new Location('ALDGATE', 'LOTS OF NEW BUILDINGS'),
    new Location('SOMEWHEREELSEELSE', 'C')
  ]
]