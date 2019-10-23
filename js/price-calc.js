
let input = document.getElementById('earnings-input')
let button = document.querySelector('button')
console.log(input);

function calc() {
    let amountToPay = document.getElementById('amountToPay')
    if(input.value < 1) {
        return `Error, amount can not be negative or 0!`
    } else if(input.value < 1000) {
        amountToPay.textContent = `${(input.value * 0.008).toFixed(2)}$`
    } else if(input.value < 10000) {
        amountToPay.textContent = `${(input.value * 0.006).toFixed(2)}$`
    } else {
        amountToPay.textContent = `${(input.value * 0.004).toFixed(2)}$`
    }
}


button.addEventListener('click', calc)
