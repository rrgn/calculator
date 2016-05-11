/*
Logic:

* when a number is clicked, add a digit to the display.
* when an operator is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. store the result (but don't display it)
  4. clear the display for the user to input the next number
* when "=" is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. update the display to show the result
* when "C" is clicked
  1. unset the operator
  2. unset the current number
  3. clear the display

*/

var currentNumber;
var operator;

$(function () {
  $('.number').click(function () {
    debugger
    var number = $(this).text();
    var currentDisplay = $('#display').val();
    var newDisplay = currentDisplay + number;
    $('#display').val(newDisplay);
  });

  $('.operator').click(function () {
    debugger
    var newNumber = Number($('#display').val());
    if (operator && currentNumber) {
      currentNumber = performOperation(newNumber);
    } else {
      currentNumber = newNumber;
    }
    operator = $(this).text();
    $('#display').val('');
  });

  $('.evaluate').click(function () {
    debugger
    var newNumber = Number($('#display').val());
    if (operator && currentNumber) {
      currentNumber = performOperation(newNumber);
      operator = null;
      $('#display').val(currentNumber);
    }
  });
});

function performOperation(newNumber) {
  var result;
  if (operator === '+') {
    result = newNumber + currentNumber;
  } else if (operator === '-') {
    result = currentNumber - newNumber;
  } else if (operator === 'x') {
    result = currentNumber * newNumber;
  } else if (operator === '/') {
    result = currentNumber / newNumber;
  }
  return result;
}
