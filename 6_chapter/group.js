class Group {
	constructor() {
		this.set = []
	}

	add(value) {
		if (!this.set.includes(value)) this.set.push(value)
	}
	has(value) {
		return this.set.includes(value)
	}
	// recomended solution with filter
	delete(value) {
		this.set = this.set.filter((s) => s !== value)
	}
/* my solution with indexOf and splice
	delete(value) {
		let index = this.set.indexOf(value)
		if (index !== -1) {
			this.set.splice(index, 1)
		}
		return this
	} */

	static from(values) {
		let self = new Group()
		for (let value of values) {
			self.add(value)
		}
		return self
	}
}

//tests

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false