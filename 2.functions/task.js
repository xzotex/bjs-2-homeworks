function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
     if (!arr.length) return 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function differenceMaxMinWorker(...arr) {
    if (!arr.length) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
     if (!arr.length) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  arr.forEach(arr => {
    if (element % 2 === 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  });
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (!arr.length) return 0;
  let sumEven = 0;
  let countEven = 0;
  arr.forEach(element => {
    if (element % 2 === 0) {
      sumEven += element;
      countEven++;
    }
  });
  return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        const currentData = arrOfArr[i];
        
        const result = func(...currentData);
        
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    
    return maxWorkerResult;
}
