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

function getArrayParams(...arr) {

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
