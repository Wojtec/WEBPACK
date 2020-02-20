const {$} = require("./module-b.js");
const {Person,fun} = require("./module-a.js");


$("#test").html("sec-test");
fun("wojtek");
var test = new Person();
test.sayName();