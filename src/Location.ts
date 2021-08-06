export class Location {
  constructor(public title: string, public description: string) {
  }

  toString() {
    return `${this.title}.\n${this.description}.`;
  }
}

export type World = Location[][];

export const BasicWorld: World = [
  [
    new Location("BOXPARK", "SOME SHIPPING CONTAINERS"),
    new Location("BAGELSHOP", "SELLS BAGELS AND CAKES"),
    new Location("MAKERS", "TEACH YOU HOW TO CODE"),
  ],
  [
    new Location("LIVERPOOL ST STATION", "TRAINS"),
    new Location(
      "LOST IN SHOREDITCH",
      "YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \nAROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \nA SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
    ),
    new Location("RICHMIX", "CINEMA"),
  ],
  [
    new Location("SOMEWHERE", "A"),
    new Location("ALDGATE", "LOTS OF NEW BUILDINGS"),
    new Location("SOMEWHEREELSEELSE", "C"),
  ],
];

export const EustonWorld: World = [
  [
    new Location("BAGELSHOP", "SELLS BAGELS AND CAKES"),
    new Location("BOXPARK", "SOME SHIPPING CONTAINERS"),
    new Location("MAKERS", "TEACH YOU HOW TO CODE"),
  ],
  [
    new Location("LIVERPOOL ST STATION", "TRAINS"),
    new Location("RICHMIX", "CINEMA"),
    new Location("LOST IN SHOREDITCH", "FINDING ITEMS"),
  ],
  [
    new Location("ALDGATE", "LOTS OF NEW BUILDINGS"),
    new Location("SOMEWHERE", "A"),
    new Location("SOMEWHEREELSEELSE", "C"),
  ],
];
