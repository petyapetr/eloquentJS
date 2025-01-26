specialForms.set = (args, scope) => {
	// Your code here.
	const [name, val] = args;
	if (args.length !== 2 || name.type !== "word") {
		throw new SyntaxError("Incorect use of set");
	}

	if (Object.hasOwn(scope, name.name)) {
		const value = evaluate(val, scope);
		scope[name.name] = value;
		return value;
	}

	const proto = Object.getPrototypeOf(scope);
	if (Object.hasOwn(proto, name.name)) {
		const value = evaluate(val, scope);
		proto[name.name] = value;
		return value;
	}

	throw new ReferenceError("Reference is not defined");
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
