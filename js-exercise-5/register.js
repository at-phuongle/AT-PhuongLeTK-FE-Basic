// get btn next
var $btnNext = document.getElementById('js-next');
// get btn back
var $btnBack = document.getElementById('js-back');
// get array step
var $arrStep = document.getElementsByClassName('step');
// add event next step
$btnNext.addEventListener('click', nextStep);
// add event back step
$btnBack.addEventListener('click', backStep);
// declare current step
var currentStep = 0;
// declare get code
var getCode = 0;
// declare array input
var $arrInp = [];
// declare array warning
var $warning = [];
// get array input code
var arrInpCode = $arrStep[2].getElementsByClassName('inp-code');
for (var k = 0; k < arrInpCode.length; k++) {
  arrInpCode[k].addEventListener('input',changFocusCode);
}
// change focus input code
function changFocusCode() {
  for (var k = 0; k < arrInpCode.length-1; k++) {
    if (arrInpCode[k].value.length === 1) {
      arrInpCode[k + 1].focus();
    }
  }
}
// get array input number
var arrInpNumber = $arrStep[1].getElementsByClassName('inp-number');
for (var p = 0; p < arrInpNumber.length; p++) {
  arrInpNumber[p].addEventListener('input', checkPhone);
}

// check phone number have enough 10 number => turn on button next step 1
function checkPhone() {
  if (arrInpNumber[0].value.length === 4 && arrInpNumber[1].value.length === 3 && arrInpNumber[2].value.length === 3) {
    $btnNext.disabled = false;
  } else {
    $btnNext.disabled = true;
  }
}

// show step
function showStep(x) {
  // get array warning from current step
  $warning = $arrStep[currentStep].getElementsByClassName('warning');
  // get array input from current step
  $arrInp = $arrStep[currentStep].getElementsByClassName('inp');
  if (x === 0) {
    $arrStep[x].style.display = 'block';
    $btnBack.style.display = 'none';
  } else {
    $arrStep[x - 1].style.display = 'none';
    if (x === 1) {
      $arrStep[x].style.display = 'block';
      $btnBack.style.display = 'block';
    } else if (x === 4) {
      $arrStep[4].style.display = 'block';
      $btnBack.style.display = 'none';
      $btnNext.style.display = 'none';
    } else {
      $btnNext.innerHTML = "Next";
      $arrStep[x].style.display = 'block';
      $btnBack.style.display = 'block';
      // if x is end
      if (x === 3) {
        // btn next change to submit
        $btnNext.innerHTML = "Submit";
      }
    }
  }
  // show point step
  showPointStep(x);
}
showStep(currentStep);

// click next
function nextStep() {

  if (checkValidForm()) {
    switch (currentStep) {
      case 0:
        if ((document.getElementById('js-password').value) !== (document.getElementById('js-confirmpass').value)) {
          document.getElementById('js-warning-confim').style.display = 'block';
          document.getElementById('js-warning-confim').innerHTML = 'Confim password is not corect';
          removeWarning();
        } else {
          currentStep += 1;
          showStep(currentStep);
          checkPhone();
        }
        break;
      case 1:
        if (checkNumber()) {
          currentStep += 1;
          showStep(currentStep);
          getCode = randomCode();
          alert('Your code: ' + getCode);
        }
        break;
      case 2:
        if (checkCode()) {
          currentStep = currentStep + 1;
          showStep(currentStep);
          showInfo();
        } else {
          alert('Code is not correct!');
        }
        break;
      default:
        currentStep = currentStep + 1;
        showStep(currentStep);
        break;
    }
  }
}
// back step
function backStep() {
  currentStep = currentStep - 1;
  showStep(currentStep);
  $arrStep[currentStep + 1].style.display = 'none';
  $btnNext.disabled = false;
}

// check input form
function checkValidForm() {
  var check = true;
  for (var i = 0; i < $arrInp.length; i++) {
    if (!($arrInp[i].value)) {
      check = false;
      $warning[i].style.display = 'block';
      removeWarning('warning');
    }
  }
  return check;
}

// check input number
function checkNumber() {
  var checkNum = true;
  for (var j = 0; j < arrInpNumber.length; j++) {
    if (isNaN(arrInpNumber[j].value)) {
      checkNum = false;
      $warning[j].innerHTML = 'Please input number!';
      $warning[j].style.display = 'block';
      removeWarning('warning');
    }
  }
  return checkNum;
}

// check code
function checkCode() {
  var inpCode = '';
  var checkCode = false;
  for (var j = 0; j < arrInpCode.length; j++) {
    inpCode = inpCode + arrInpCode[j].value;
  }
  if (inpCode === getCode) {
    checkCode = true;
  }
  console.log(checkCode);
  return checkCode;
}

// show point step
function showPointStep(n) {
  var i, x = document.getElementsByClassName("point-step");
  for (i = 0; i < x.length; i++) {
    x[i].style.background = '#ebebeb';
  }
  x[n].style.background = '#4fa52e';
}

// remove warning after 3s
var elems = document.getElementsByClassName('warning');
removeWarning();
function removeWarning() {
  setTimeout(
    function () {
      for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
      }
    }, 2000);
}

// get random code
function randomCode() {
  return Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10);
}

// show info
function showInfo() {
  var name = document.getElementById('js-firstname').value + ' ' + document.getElementById('js-lastname').value;
  var email = document.getElementById('js-email').value;
  var password = document.getElementById('js-password').value;
  var $arrInfo = document.getElementsByClassName('form-info');
  var phoneNumber = '';
  for (var p = 0; p < arrInpNumber.length; p++) {
    phoneNumber = phoneNumber + arrInpNumber[p].value;
  }
  var account = {
    name: name,
    email: email,
    password: password,
    phoneNumber: phoneNumber
  }
  localStorage.setItem('user', JSON.stringify(account));
  var getAccount = JSON.parse(localStorage.getItem('user'));
  $arrInfo[0].innerHTML = getAccount.name;
  $arrInfo[1].innerHTML = getAccount.email;
  $arrInfo[2].innerHTML = getAccount.password;
  $arrInfo[3].innerHTML = getAccount.phoneNumber;
}
