//câu 1

var num1, num2;
function sum1(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return (num1 + num2);
  }
}
console.log("result of exercise1: " + sum1(2,2));

//câu 2
var soNhapVao;
function Subtraction(soNhapVao) {
  if (soNhapVao <= 19) {
    return (19 - soNhapVao);
  } else {
    return (soNhapVao - 19) * 3;
  }
}
console.log("result of exercise2: " + Subtraction(9));

//câu 3
var string = '';
var number = [];
var sum = 0;
function Div3(string) {
  var arrDiv3 = [];
  number = string.split('');
  number.splice(string.indexOf('*'), 1);
  for (var i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  for (var a = 0; a < 10; a++) {
    var t = sum;
    t += a;
    if (t % 3 === 0) {
      arrDiv3.push(string.replace('*', a));
    }
  }
  return arrDiv3;
}
console.log("result of exercise3: " + Div3('1234567890*'));

//câu 4
var arrDiv6 = [];
function Div6(string2) {
  var abc = Div3(string2);
  for (var f = 0; f < abc.length; f++) {
    if (abc[f] % 2 === 0) {
      arrDiv6.push(abc[f]);
    }
  }
  return arrDiv6;
}
console.log("result of exercise4: " + Div6('1234567890*'));
