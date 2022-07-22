const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const caracteres = document.querySelector("#caracteres");
const pResult = document.querySelector("#result");

// btn.addEventListener('click', btnOnClick)
/* form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  // console.log({ event });
  event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
} */
input1.addEventListener("input", mostrarOperacion)
input2.addEventListener("paste", mensaje)
btn.addEventListener("click", sumarInputValues);

function mensaje(e) {
    e.preventDefault()
    alert('Hey no debes copiar y pegar')
}

function mostrarOperacion() {
    caracteres.innerText = input1.value
}

function sumarInputValues(event) {
  console.log({ event });
  // event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}
