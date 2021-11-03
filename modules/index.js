//  Default     ->  import ... from '';
//  Named       ->  import { ... } from '';
//  Mixed       ->  import ..., { ... } from '';
//  Import *    ->  import * as alias from ''

import Person from "./person.js";
import { addition, subtraction, PI } from "./calculator.js";

const person = new Person("Shobhit Bhardwaj", 30);
person.showInfo();

let add = addition(12, 5);
console.log(add);

let subtract = subtraction(12, 5);
console.log(subtract);

console.log(PI);
