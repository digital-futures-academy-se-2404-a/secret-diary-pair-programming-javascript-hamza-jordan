import Diary from "../src/Diary.js";

describe("Diary tests:", () => {
  let testDiary;

  beforeEach(() => {
    testDiary = new Diary();
  });
  afterEach(() => {
    testDiary = undefined;
  });

  describe("Diary add entry:", () => {
    describe("Diary add entry:", () => {
      it("Should add a new diary entry:", () => {
        // Arrange

        // Act
        testDiary.addEntry("");
        // Assert
        expect(testDiary.getEntry().length).toBe(1);
      });
    });

    describe("Correct entry added to Diary:", () => {
      it("Should check if the correct entry added to the diary:", () => {
        // Arrange

        // Act
        testDiary.addEntry("Test text");

        // Assert
        expect(testDiary.getEntry()[0]).toBe("Test text");
      });
    });

    describe("NULL entry added to Diary:", () => {
      it("Should throw an error if NULL is added to Diary:", () => {
        // Arrange

        // Act
        testDiary.addEntry(null);

        // Assert
        expect(testDiary.getEntry().length).toBe(0);
      });
    });
  });
    
    
describe("View Diary entry:", () => {
      it("Should display all entries ", () => {
        // Arrange
        testDiary.addEntry("Test Test")
        // Act
        testDiary.getEntry();

        // Assert
        expect(testDiary.getEntry()).toEqual(["Test Test"]);
      });
});
});