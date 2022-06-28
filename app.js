const pizzaSelect = document.querySelector('#pizzas');
if (pizzaSelect.checked == false) {
    for (let i = 0; i < 15; i++) {
        // console.log(i);
        document.getElementsByClassName("x")[i].disabled = true;
    }
}
document.querySelectorAll('.pzt').forEach(item => {
    item.addEventListener('click', event => {
        for (let i = 0; i < 15; i++) {
            document.getElementsByClassName("x")[i].disabled = false;
        }
    });
});

// for (let i = 0; i < 3; i++){
//     var pzt = document.getElementsByClassName('pzt')[i].value;
//     console.log(pzt)
// }

if (document.querySelector('input[name="pizza-type"]')) {
    document.querySelectorAll('input[name="pizza-type"]').forEach((item) =>
        item.addEventListener('change', function (event) {
            pizzaPrice = event.target.value;
        })
    );
};

