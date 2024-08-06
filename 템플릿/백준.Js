// input 한 줄에 하나일 때 (ex. 2541)
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

// // input 한 줄에 여러개일 때 (ex. 2 3 4)
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

// // input 여러줄일 때 (ex. 2 3 4 / 5 6 7)
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
