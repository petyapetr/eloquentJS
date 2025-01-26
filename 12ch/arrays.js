// Modify these definitions...

topScope.array = (...values) => [...values];

topScope.length = (arr) => arr.length;

topScope.element = (arr, n) => arr[n];

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6
