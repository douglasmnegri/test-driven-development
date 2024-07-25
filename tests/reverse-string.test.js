const reverseString = require('../src/reverse-string');

test("Reverse a string", () => {
    expect(reverseString("This is reversed")).toBe("desrever si sihT");
});