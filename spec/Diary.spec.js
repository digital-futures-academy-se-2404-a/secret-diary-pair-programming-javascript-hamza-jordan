import Diary from "../src/Diary.js";

describe("Diary add entry:", () => {
    it("Should add a new diary entry:", () => {
        // Arrange
        const testDiary = new Diary();
        
        // Act
        testDiary.addEntry('');  
        // Assert
        expect(testDiary.getEntry().length).toBe(1);
        });
})
 