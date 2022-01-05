/* let inputNumbers = document.querySelectorAll('[data-input]');
let buttonCalculator = document.querySelector('[data-button]');
let arrayWithInputValues = [];

// console.log(inputNumbers);

const sum = () => {
    inputNumbers.forEach((i) => {
        console.log(i.value);
        arrayWithInputValues.push(Number(i.value));
        console.log(arrayWithInputValues);
        return arrayWithInputValues;
    });

    // console.log("novo array com os valores", arrayWithInputValues)

    const total = arrayWithInputValues.reduce((total, inputValue) => {
        return total + inputValue;
    });

    console.log("real valor somado", total);

    arrayWithInputValues.splice(0, arrayWithInputValues.length);

    // console.log(arrayWithInputValues);


    inputNumbers.values = '';
}

/* const sum = () => {
    const arrayWithInputValues = inputNumbers.reduce((acc, item) => {
        console.log(acc, item);
        return acc + item;
    })

    console.log("total", arrayWithInputValues);
} */

// buttonCalculator.addEventListener('click', sum);
