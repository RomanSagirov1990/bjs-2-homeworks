function solveEquation(a, b, c) {
  let arr;
  "use strict";
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = []
  };
  if (d === 0) {
    let x = -b / (2 * a);
    arr = [x];
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  "use strict"
  let per = parseInt(percent) / 100 / 12;
  let con = parseInt(contribution);
  let am = parseInt(amount);
  if (isNaN(per) || per < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(con) || con < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(am) || am < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {

    let today = new Date();
    if (today.getFullYear() > date.getFullYear()) {
      return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
    } else {
      let s = am - con;
      let n = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()));
      let pay = s * (per + per / (((1 + per) ** n) - 1));
      let totalAmount = (pay * n).toFixed(2);

      return +totalAmount;
    }
  }
}
