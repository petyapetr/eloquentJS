class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	plus(value) {
		this.x += value.x
		this.y += value.y
		return this
	}

	minus(value) {
		this.x -= value.x
		this.y -= value.y
		return this
	}

	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5