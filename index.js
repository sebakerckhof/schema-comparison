const fasterSchema = require('./faster-schema');
const simpleSchema = require('./simple-schema');
const superstruct = require('./superstruct');

const toTest = require('./test.json');

console.log("SIMPLE SCHEMA");
console.log("start validate");
console.time("validate");
simpleSchema.validate(toTest);
console.timeEnd("validate");
console.log("end validate");
console.log("start clean");
console.time("clean");
simpleSchema.clean(toTest); 
console.timeEnd("clean");
console.log("end clean");

console.log("FASTER SCHEMA");
console.log("start validate");
console.time("validate");
fasterSchema.validate(toTest);
console.timeEnd("validate");
console.log("end validate");
console.log("start clean");
console.time("clean");
fasterSchema.clean(toTest); 
console.timeEnd("clean");
console.log("end clean");

console.log("SUPERSTRUCT");
console.log("start validate");
console.time("validate");
superstruct(toTest);
console.timeEnd("validate");
console.log("end validate");