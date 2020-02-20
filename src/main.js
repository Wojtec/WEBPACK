const {$} = require("./module-b.js");
const {Person,fun} = require("./module-a.js");
import './style/main.scss';

fun("Function");
var test = new Person();
test.sayName();