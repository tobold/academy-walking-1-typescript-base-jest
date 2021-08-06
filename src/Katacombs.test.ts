import { Katacombs } from "./Katacombs";
import { BasicWorld } from "./Location";

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
      expect(response).toEqual(`LOST IN SHOREDITCH.
YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. 
AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. 
A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.`);
    });

    describe("describes where you look", () => {
      it("north", () => {
        katacombs.start(BasicWorld);
        const response = katacombs.execute("LOOK N");
        expect(response).toEqual(`BAGELSHOP.
SELLS BAGELS AND CAKES.`);
      });
      it("east", () => {
        katacombs.start(BasicWorld);
        const response = katacombs.execute("LOOK E");
        expect(response).toEqual(`RICHMIX.
CINEMA.`);
      });
    });
  });
});
