const Reader= require('../../app/utils/Reader');

describe('Test for Reader class', () => {
    test("(1) Should return the contents of a file", () => {
        const obj= Reader.readFile('testfile.json');
        expect(obj).toBeDefined();
    })
});