const isValid = require("./challenge3.js");

test("should check if the letter is valid or not", () => {
	expect(isValid("bici coche (balón) bici coche peluche")).toBe(true);
	expect(isValid("bici coche (balón) () bici coche peluche")).toBe(false);
	expect(isValid("peluche (bici [coche) bici coche balón")).toBe(false);
});
