// const text = `I told you that: 'U gotta get movin' fast'. He's furious. Kittens' mittens. Gotta take that`;
let text = "'I'm the cook,' he said, 'it's my job.'";

const regexp = /'(?!\w)|(\W|^)'/g;

const result = text.replace(regexp, '"');

console.log(result);
