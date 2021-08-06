import { Katacombs } from "./Katacombs";
import { BasicWorld, EustonWorld } from "./Location";

describe("Katacombs", () => {
  let katacombs: Katacombs;
  describe("executing commands", () => {
    beforeEach(() => {
      katacombs = new Katacombs(BasicWorld);
    });

    it("should not understand bad commands", () => {
      const response = katacombs.execute("something wrong");
      expect(response).toEqual("I don't understand that. English please!");
    });

    it("should show you the title and description of the starting location", () => {
      const response = katacombs.start();
      expect(response).toEqual(
        "LOST IN SHOREDITCH.\nYOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
      );
    });
  });

  describe("should be able to look on the BasicWorld", () => {
    beforeEach(() => {
      katacombs = new Katacombs(BasicWorld);
    });

    it("north", () => {
      const response = katacombs.execute("LOOK N");
      expect(response).toEqual("BAGELSHOP.\nSELLS BAGELS AND CAKES.");
    });

    it("east", () => {
      const response = katacombs.execute("LOOK E");
      expect(response).toEqual("RICHMIX.\nCINEMA.");
    });

    it("south", () => {
      const response = katacombs.execute("LOOK S");
      expect(response).toEqual("ALDGATE.\nLOTS OF NEW BUILDINGS.");
    });

    it("west", () => {
      const response = katacombs.execute("LOOK W");
      expect(response).toEqual("LIVERPOOL ST STATION.\nTRAINS.");
    });
  });

  describe("should be able to look on the EustonWorld", () => {
    beforeEach(() => {
      katacombs = new Katacombs(EustonWorld);
    });

    it("north", () => {
      const response = katacombs.execute("LOOK N");
      expect(response).toEqual("BOXPARK.\nSOME SHIPPING CONTAINERS.");
    });

    it("east", () => {
      const response = katacombs.execute("LOOK E");
      expect(response).toEqual("LOST IN SHOREDITCH.\nFINDING ITEMS.");
    });

    it("south", () => {
      const response = katacombs.execute("LOOK S");
      expect(response).toEqual("SOMEWHERE.\nA.");
    });

    it("west", () => {
      const response = katacombs.execute("LOOK W");
      expect(response).toEqual("LIVERPOOL ST STATION.\nTRAINS.");
    });
  });

  describe('should be able to go in a direction', () => {
    beforeEach(() => {
      katacombs = new Katacombs(BasicWorld);
    });

    it("north", () => {
      const response = katacombs.execute("GO N");
      expect(response).toEqual("You are now at the BAGELSHOP.\nSELLS BAGELS AND CAKES.");
    });

    it("east", () => {
      const response = katacombs.execute("GO E");
      expect(response).toEqual("You are now at the RICHMIX.\nCINEMA.");
    });

    it("south", () => {
      const response = katacombs.execute("GO S");
      expect(response).toEqual("You are now at the ALDGATE.\nLOTS OF NEW BUILDINGS.");
    });

    it("west", () => {
      const response = katacombs.execute("GO W");
      expect(response).toEqual("You are now at the LIVERPOOL ST STATION.\nTRAINS.");
    });
  });
});
