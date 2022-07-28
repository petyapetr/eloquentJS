let obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, {here: 1, object: 2}))
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))
// → true
console.log(deepEqual(obj, null))
// → false

// сложная проверка, если одно из значений внутри объекта равно null
console.log(deepEqual({cat: true, name: undefined, gender: {male: null}}, {cat: true, name: undefined, gender: {male: null}}))
// → true

// моё изначальное решение
/* if (one === two) return true

	if (typeof one === "object" && typeof one === typeof two && one !== null && two !== null) {

		if (Object.keys(one).length !== Object.keys(two).length) {
			return false
		} else {
			for (key in one) {
				// вот где фейлится сложная проверка, так, как null приводится к false,
				// надо либо написать все восемь исключений, которые логически приводятся к false,
				// либо, как в примере, сравнивать по спискам значений
				if (!two[key]) return false
				if (typeof one[key] !== "object") {
					if (one[key] !== two[key]) return false
				} else {
					if (!deepEqual(one[key], two[key])) return false
				}
			}
			return true
		}
	} else return false
} */

// решение переписанное с учетом того, что предлагает учебник

function deepEqual(one, two) {
	if (one === two) return true

	if (typeof one !== "object" || one === null
			|| typeof two !== "object" || two === null) return false

	let oneK = Object.keys(one), twoK = Object.keys(two)

	if (oneK.length !== twoK.length) return false

	for (key of oneK) {
		if (!twoK.includes(key) || !deepEqual(one[key], two[key])) return false
	}

	return true
}