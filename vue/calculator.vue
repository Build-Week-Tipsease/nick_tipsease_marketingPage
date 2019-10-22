let earnings = document.querySelector('#earnings-input').value

console.log(earnings);

var calculator = new Vue ({
    el: '.pricing-calculator',
    data: {
        cost-low: earnings * 0.8,
        cost-medium: earnings * 0.6,
        cost-high: earnings * 0.4,
    }
})