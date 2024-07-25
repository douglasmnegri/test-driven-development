const capitalize = require('../src/capitalize.js');
console.log(capitalize);

test("Capitalize first character", () => {
    expect(capitalize("capitalize only THE FIRST character")).toBe("Capitalize only the first character");
});
