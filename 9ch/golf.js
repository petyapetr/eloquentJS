const one = /ca[rt]/;

console.log("carpool cataclysm".match(one));

const two = /pr?op/;

console.log("pop culture proposition".match(two));

const three = /ferr(et|y|ari)/;

console.log("ferret ferry Ferrari".match(three));

const four = /\b\w+ious\b/;

console.log("vious rebioust ferrious ious".match(four));

const five = /\s[.,:;]/;

console.log("... . ,: ;".match(five));

const six = /\b\w{7,}\b/;

console.log("tenet four rebellious federal season".match(six));

const seven = /\b[^\We]+\b/i;

console.log("cat bat rebel mischief".match(seven));