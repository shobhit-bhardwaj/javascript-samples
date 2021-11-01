let array1 = ['first', 'second', 'third'];
let array2 = ['forth', 'fifth'];

let combinedArray = [...array1, ...array2];
console.log(combinedArray);

combinedArray = [...array1, ...array2, 'sixth'];
console.log(combinedArray);



let object1 = {name: 'Shobhit'};
let object2 = {designation: 'Software Developer'};

let combinedObject = {...object1, ...object2};
console.log(combinedObject);

combinedObject = {...object1, ...object2, location: 'Gurgaon'};
console.log(combinedObject);
