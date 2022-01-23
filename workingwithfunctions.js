var obj = { num: 2 };

var add = function (a, b, c) {
	return this.num + a + b + c;
};
var arr = [1, 2, 3, 4];
console.log(add.apply(obj, arr));