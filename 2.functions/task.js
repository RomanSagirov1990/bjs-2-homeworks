// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));

  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {

  let sum;
  sum = arr.reduce((sum, el) => sum + el, 0)
  return sum;

  // Ваш код

}

function makeWork(arrOfArr, func) {
  let max;
  let mapArr = arrOfArr.map(el => func(el))
  max = Math.max.apply(null,mapArr);
  return max;
}

// Задание 3
function worker2(arr) {
  
    let difference
    difference =  Math.abs(Math.max.apply(null, arr) - Math.min.apply(null, arr))
    return difference
  
  
  // Ваш код
}
