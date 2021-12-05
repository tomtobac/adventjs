const listGifts = require("./challenge2.js");

const carta = "bici coche balón _playstation bici coche peluche";

test("should count the amount of gifts and exclude the ones that start with underscore", () => {
	const expected = {
		bici: 2,
		coche: 2,
		balón: 1,
		peluche: 1,
	};
	expect(listGifts(carta)).toEqual(expected);
});
