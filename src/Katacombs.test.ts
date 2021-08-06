import { Katacombs } from "./Katacombs";
import { BasicWorld, EustonWorld } from "./Location";

describe("Katacombs", () => {
  describe("executing commands", () => {
    let katacombs: Katacombs;

    beforeEach(() => {
      katacombs = new Katacombs();
    });

    it("should not understand bad commands", () => {
      const response = katacombs.execute("something wrong");
      expect(response).toEqual("I don't understand that. English please!");
    });

    it("should show you the title and description of the starting location", () => {
      const response = katacombs.start(BasicWorld);
      expect(response).toEqual(
        "LOST IN SHOREDITCH.\nYOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
      );
    });

    describe("should be able to look on the BasicWorld", () => {
      it("north", () => {
        katacombs.start(BasicWorld);
        const response = katacombs.execute("LOOK N");
        expect(response).toEqual("BAGELSHOP.\nSELLS BAGELS AND CAKES.");
      });

      it("east", () => {
        katacombs.start(BasicWorld);
        const response = katacombs.execute("LOOK E");
        expect(response).toEqual("RICHMIX.\nCINEMA.");
      });

      it("south", () => {
        katacombs.start(BasicWorld);
        const response = katacombs.execute("LOOK S");
        expect(response).toEqual("LIVERPOOL ST STATION.\nTRAINS.");
      });

      it("west", () => {
        katacombs.start(BasicWorld);
        const response = katacombs.execute("LOOK W");
        expect(response).toEqual("ALDGATE.\nLOTS OF NEW BUILDINGS.");
      });
    });

    describe("should be able to look on the EustonWorld", () => {
      it("north", () => {
        katacombs.start(EustonWorld);
        const response = katacombs.execute("LOOK N");
        expect(response).toEqual("BOXPARK.\nSOME SHIPPING CONTAINERS.");
      });

      it("east", () => {
        katacombs.start(EustonWorld);
        const response = katacombs.execute("LOOK E");
        expect(response).toEqual("LOST IN SHOREDITCH.\nFINDING ITEMS.");
      });

      it("south", () => {
        katacombs.start(EustonWorld);
        const response = katacombs.execute("LOOK S");
        expect(response).toEqual("SOMEWHERE.\nA.");
      });

      it("west", () => {
        katacombs.start(EustonWorld);
        const response = katacombs.execute("LOOK W");
        expect(response).toEqual("LIVERPOOL ST STATION.\nTRAINS.");
      });
    });
  });
});
