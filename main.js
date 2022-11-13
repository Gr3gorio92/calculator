const output = document.getElementById("result");
const number0 = document.getElementById('numero0');
const number1 = document.getElementById('numero1');
const number2 = document.getElementById('numero2');
const number3 = document.getElementById('numero3');
const number4 = document.getElementById('numero4');
const number5 = document.getElementById('numero5');
const number6 = document.getElementById('numero6');
const number8 = document.getElementById('numero7');
const number7 = document.getElementById('numero8');
const number9 = document.getElementById('numero9');
const sum = document.getElementById('somma');
const subtraction = document.getElementById('sottrai');
const divide = document.getElementById('dividi');
const clear = document.getElementById('cancella');
const multiply = document.getElementById('moltiplica');
const equal = document.getElementById('uguale');
const tastiera = document.getElementById('pad');
const point = document.getElementById('punto');

console.log(output)

number0.addEventListener('click', e =>{
    e.preventDefault();
    display(number0.value);
});
number1.addEventListener('click', e =>{
    e.preventDefault();
    display(number1.value);
});
number2.addEventListener('click', e =>{
    e.preventDefault();
    display(number2.value);
});
number3.addEventListener('click', e =>{
    e.preventDefault();
    display(number3.value);
});
number4.addEventListener('click', e =>{
    e.preventDefault();
    display(number4.value);
});
number5.addEventListener('click', e =>{
    e.preventDefault();
    display(number5.value);
});
number6.addEventListener('click', e =>{
    e.preventDefault();
    display(number6.value);
});
number7.addEventListener('click', e =>{
    e.preventDefault();
    display(number7.value);
});
number8.addEventListener('click', e =>{
    e.preventDefault();
    display(number8.value);
});
number9.addEventListener('click', e =>{
    e.preventDefault();
    display(number9.value);
});

sum.addEventListener('click', e=>{
    e.preventDefault();
    display(sum.value);
});
divide.addEventListener('click', e=>{
    e.preventDefault();
    display(divide.value);
});
multiply.addEventListener('click',e=>{
    e.preventDefault();
    display(multiply.value);
});
subtraction.addEventListener('click',e=>{
    e.preventDefault();
    display(subtraction.value);
});

equal.addEventListener('click',e=>{
    e.preventDefault();
    solve();
})

point.addEventListener('click',e=>{
    e.preventDefault();
    display(point.value);
})

function display(val){
    document.getElementById("result").value += val
}
function solve(){
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
};
/*
number0.keydown = myFunction(event);
number1.keydown = myFunction(event);
number2.keydown = myFunction(event);
number3.keydown = myFunction(event);
number4.keydown = myFunction(event);
number5.keydown = myFunction(event);
number6.keydown = myFunction(event);
number7.keydown = myFunction(event);
number8.keydown = myFunction(event);
number9.keydown = myFunction(event);
subtraction.keydown = myFunction(event);
sum.keydown = myFunction(event);
divide.keydown = myFunction(event);
multiply.keydown = myFunction(event);

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+'
        || event.key == '*' || event.key == '/' || event.key == '-')
        output.innerHTML += event.value;
};*/



//cancella il calcolo a video
clear.onclick = function () {
    document.getElementById("result").value ='';
    };
