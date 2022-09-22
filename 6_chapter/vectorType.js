class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	plus(x, y) {
		this.x += x
		this.y +=y
	}

	minus(x, y) {
		this.x -= x
		this.y -= y
	}

	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
}

const cord = new Vector(4, 3)
console.log(cord.length) // → 5