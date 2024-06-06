function getArrayParams(...arr) {
    let min = Infinity; 
    let max = -Infinity; 
    let sum = 0; 


    arr.forEach(element => {
        if (element > max) {
            max = element; 
        }
        if (element < min) {
            min = element;
        }
        sum += element;
    });


    const avg = sum / arr.length;


    return { min: Math.round(min), max: Math.round(max), avg: parseFloat(avg.toFixed(2)) };
}


function summElementsWorker(...arr) {
     if (!arr.length) return 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function differenceMaxMinWorker(...arr) {
    if (!arr.length) return 0; // Проверка наличия элементов
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
     if (!arr.length) return 0; // Проверка наличия элементов
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
    if (!arr.length) return 0; // Проверка наличия элементов
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

    // Перебор всех элементов массива arrOfArr
    for (let i = 0; i < arrOfArr.length; i++) {
        const currentData = arrOfArr[i];
        
        const result = func(...currentData);
        
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    
    return maxWorkerResult;
