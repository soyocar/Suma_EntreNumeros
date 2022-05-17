import "./styles.css";
let btnEnv = document.getElementById("enviar");
let num1: number = document.getElementById("dato1");
let num2: number = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let numero1: number = Number(num1.value);
  let numero2: number = Number(num2.value);
  let suma, inicio, final: number;
  if (numero1 < numero2) {
    inicio = numero1;
    final = numero2;
  } else {
    inicio = numero2;
    final = numero1;
    suma = 0;
  }

  for (inicio; inicio < final; inicio++) {
    suma += inicio;
  }
  console.log("La suma de numeros es " + suma);

  //}
});
