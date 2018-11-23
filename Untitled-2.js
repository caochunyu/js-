//string对象的length属性，测量字符串长度
var str1 = "this is a string";
console.log(str1.length);

var num1 = 1.45;//打印对象
console.log(typeof num1);

//从字符串中提取一个列表，以冒号开始，句点结束
//使用string和substring
var sentence = "This is one sentence.This is a sentence with a list of items:cherries,oranges,apples,bananas. That was the list of items.";
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start+1);
var listStr = sentence.substring(start+1, end);
//使用string的split方法将字符分割成一个数组
var fruits = listStr.split(',');
console.log(fruits);
