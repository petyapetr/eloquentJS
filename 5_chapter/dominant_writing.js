const SCRIPTS = require("./scripts.js") 

function dominantDirection(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0))
		return script ? script.direction : "none"
	}).filter(({name}) => name != "none")

	/* // my own solution with .some() 
	scripts.sort((firstItem, secondItem) => firstItem.count - secondItem.count)
	return scripts[scripts.length - 1].name */

	// suggested solution with .reduce()
	return scripts.reduce((previous, current) => previous.count > current.count ? previous : current).name;
}

function characterScript(symCode) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => 
			symCode >= from && symCode < to
		)) {
			return script
		}
	}
	return null
}

function countBy(items, groupName) {
	let counts = []
	for (item of items) {
		let name = groupName(item)
		let known = counts.findIndex(c => c.name === name)
		if (known === -1) {
			counts.push({name, count: 1})
		} else {
			counts[known].count++
		}
	}
	return counts
}

// tests
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, ꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁꡁ, مساء الخير"));
// → rtl



