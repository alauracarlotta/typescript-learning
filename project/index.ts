const input1 = document.querySelector('[data-input="number1"]') as HTMLInputElement;
const input2 = document.querySelector('[data-input="number2"]') as HTMLInputElement;
const button = document.querySelector('[data-button]')!;

const sum = (n1: number, n2: number) => {
	return n1 + n2;
}

button.addEventListener('click', function () {
	console.log(sum(Number(input1.value), Number(input2.value)));
});
