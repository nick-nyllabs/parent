var cool = require('cool-ascii-faces');
var chalk = require('chalk');

console.log(chalk.blue("If you get cool faces, it's working!"));
for(var i = 0; i < 3; i++) console.log(chalk.red(cool()));
console.log('');