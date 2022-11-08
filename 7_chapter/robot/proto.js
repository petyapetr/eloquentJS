import { VillageState } from "./state.js";

const state = new VillageState(
	"Grete's House",
  [
    { place: "Bob's House", address: "Cabin" },
    { place: 'Post Office', address: "Grete's House" },
    { place: "Ernie's House", address: "Ernie's House" }
  ]
);

console.log(state);
state.test('Proto works');
const newState = state.move("Ernie's House");
console.log(newState)

class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }

	test(msg) {
		return console.log(msg)
	}
}

// const black = new Color(0, 0, 0);
// console.log(black);
// black.test('Prototypes suck');