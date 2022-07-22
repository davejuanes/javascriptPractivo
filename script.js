const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

function btnOnClick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);

    pResult.innerText = 'Resultado: ' + sumaInputs;
}

// h1 { color: red }
// .parrafito { ... }
// #parrafito { ... }

/* const h1 = document.querySelector('h1')
const pAll = document.querySelectorAll('p')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    pAll,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo"
h1.innerText = "Patito <br> Feo" */
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo')

/* h1.classList.add('rojo')
h1.classList.remove('verde') */
// h1.classList.toggle('verde')
// h1.classList.contains('verde')

/* input.value = "456"

const img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1658387946801-23283c3ac442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60')
console.log(img);
pid.innerHTML = ""
pid.append(img) */