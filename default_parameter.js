var isEqual = function(number, compare) {
	return number == compare;
}
console.log('Approach 1 - ' + isEqual(10, 10));



isEqual = function(number, compare = 10) {
	return number == compare;
}
console.log('Approach 2 - ' + isEqual(10));



isEqual = function(number, compare = number) {
	return number == compare;
}
console.log('Approach 3 - ' + isEqual(15));



isEqual = function(number = 0, compare = number) {
	return number == compare;
}
console.log('Approach 4 - ' + isEqual());
