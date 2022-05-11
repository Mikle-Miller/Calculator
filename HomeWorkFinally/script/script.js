let calc = document.querySelector('.calc');
let calcOutput = document.querySelector('.calc_output p');
let clear = document.querySelector('.calc_clear');
let calcRefresh = document.querySelector('.calc_refresh');
let interest = document.querySelector('.calc_interest');
let delet = document.querySelector('.calc_delete');

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let symbols = ['+', '-', '*', '/'];

let numsOne = '';
let numsTwo = '';
let symbol = '';
let finish = false;

clear.addEventListener('click', () => {
    numsOne = '';
    numsTwo = '';
    symbol = '';
    finish = false;
    calcOutput.textContent = 0;
});
calcRefresh.addEventListener('click', () => {
    if (numsOne == calcOutput.textContent) {
        numsOne = numsOne * -1;
        calcOutput.textContent = numsOne;
        return;
    } else if (numsTwo == calcOutput.textContent) {
        numsTwo = numsTwo * -1;
        calcOutput.textContent = numsTwo;
        return;
    }

});
interest.addEventListener('click', () => {
    if (numsOne && numsTwo) {
        let res = numsOne / 100 * numsTwo;
        numsOne = Number(numsOne);
        if (symbol == '+') {
            numsOne = numsOne + res;
        } else if (symbol == '-') {
            numsOne = numsOne - res;
        }
        calcOutput.textContent = numsOne;
        numsTwo = '';
        symbol = '';
        return;
    }
});
delet.addEventListener('click', () => {
    if (calcOutput.textContent == numsOne) {
        numsOne = numsOne.substring(0, numsOne.length - 1);
        calcOutput.textContent = numsOne;
    } else if (calcOutput.textContent == numsTwo) {
        numsTwo = numsTwo.substring(0, numsTwo.length - 1);
        calcOutput.textContent = numsTwo;
    }
});

calc.addEventListener('click', (event) => {

    let target = event.target.textContent;

    if (numbers.includes(target)) {
        if (numsTwo === '' && symbol === '') {
            numsOne += target;

            calcOutput.textContent = numsOne;

        } else if (numsOne !== '' && numsTwo !== '' && finish) {
            numsTwo = target;
            finish = false;
            calcOutput.textContent = numsTwo;

        } else {
            numsTwo = numsTwo + target;
            calcOutput.textContent = numsTwo;
        }
        //console.log(numsOne, numsTwo, symbol);
        return;
    }

    if (symbols.includes(target)) {
        if (symbol) {
            if (symbol) {
                if (symbol == '+') {
                    numsOne = (+numsOne) + (+numsTwo);
                } else if (symbol == '-') {
                    numsOne = numsOne - numsTwo;
                } else if (symbol == '*') {
                    numsOne = numsOne * numsTwo;
                } else if (symbol == '/') {
                    if (numsTwo == '0') {
                        calcOutput.textContent = 'Ошибка';
                        numsOne = '';
                        numsTwo = '';
                        symbol = '';
                        return;
                    }
                    numsOne = numsOne / numsTwo;
                }
                finish = true;

                calcOutput.textContent = numsOne;
                //console.log(numsOne, numsTwo, symbol);

            }
        }
        symbol = target;
        calcOutput.textContent = symbol;
        //console.log(numsOne, numsTwo, symbol);
        return;
    }
    if (target === '=') {
        if (symbol == '+') {
            numsOne = (+numsOne) + (+numsTwo);
        } else if (symbol == '-') {
            numsOne = numsOne - numsTwo;
        } else if (symbol == '*') {
            numsOne = numsOne * numsTwo;
        } else if (symbol == '/') {
            if (numsTwo == '0') {
                calcOutput.textContent = 'Ошибка';
                numsOne = '';
                numsTwo = '';
                symbol = '';
                return;
            }
            numsOne = numsOne / numsTwo;
        }
        finish = true;
        numsTwo = '';
        numsOne = Number(numsOne.toFixed(8));
        calcOutput.textContent = String(numsOne);
        //console.log(numsOne, numsTwo, symbol);
        //console.log(typeof (numsOne));

    }
});