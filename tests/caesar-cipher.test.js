const { caesarCipher } = require("../src/caesar-cipher");

test("Caesar Cipher shifts letters correctly", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo!", 3)).toBe("KhOOr!");
  expect(caesarCipher("THE CAESAR cipher!", 5)).toBe("YMJ HFJXFW hnumjw!")
  expect(caesarCipher("OK", 0)).toBe("OK");
});
