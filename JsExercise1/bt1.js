//câu 1

var num1, num2;
function tinhTong(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return (num1 + num2);
  }
}
console.log("kq cau 1 la: " + tinhTong(2,2));

//câu 2
var soNhapVao;
function tinhHieu(soNhapVao) {
  if (soNhapVao <= 19) {
    return (19 - soNhapVao);
  } else {
    return (soNhapVao - 19) * 3;
  }
}
console.log("kq cau 2 la: " + tinhHieu(9));

//câu 3
var string = '';
var number = [];
var sum = 0;

function soChiaHetCho3(string) {
  var arrDiv3 = [];
  number = string.split('');
  number.splice(string.indexOf('*'), 1);
  for(let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  for(let a = 0; a < 10; a++) {
    var t = sum;
    t += a;
    if (t % 3 === 0) {
      arrDiv3.push(string.replace('*', a));
    }
  }
  return arrDiv3;
}
console.log("kq cau 3 la: " + soChiaHetCho3('1*9'));

//câu 4
var arrDiv6 = [];
function soChiaHetCho6(string) {
  var abc = soChiaHetCho3(string);
  for(let f = 0; f < abc.length; f++) {
    if (abc[f] % 2 === 0) {
      arrDiv6.push(abc[f]);
    }
  }
  return arrDiv6;
}
console.log("kq cau 4 la: " + soChiaHetCho6('1234567890*'));
