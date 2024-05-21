'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }
  let monthPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let totalPayment = monthPayment * countMonths;
  return +totalPayment.toFixed(2);
}
