//Obtiene los arrays de los botones
const btn1 = document.getElementById('1');
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("cero");
const btnResta = document.getElementById("minus");
const btnMult = document.getElementById("multiply");
const btnDiv = document.getElementById("divide");
const btnSuma = document.getElementById("plus");
const btnRdo = document.getElementById("equal");
const btnClear = document.getElementById("clear");
const display = document.getElementById("display"); 
const btnDcmls = document.getElementById("decimals");
const btnDelete = document.getElementById("delete")



//Definicion  de arrays donde almacenar información
let screen = "";
let askOperation = "";
let numberX = null;
let numberY = null;
let output = null;



//Función que traduce el array como "texto" para visualizar en la imagen
const showScreen = () => document.getElementById("display").innerHTML = screen; 



//Función que genera el array
const listenerGenerator = () => {
  const numericButtons = [
    btn0,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
  ];
  numericButtons.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      screen += `${index}`;
      showScreen();
    })
  })
}



//Botones extra
btnDelete.addEventListener("click", () => {
  screen = screen.toString().slice(0, -1)
  showScreen()
}); 

btnDcmls.addEventListener("click", () => { 
  if (!screen.includes(".")){
    screen += "."
  } else {
    return;
  } 
});

btnClear.addEventListener("click", () => {
  document.getElementById("display").innerHTML = "";
  screen = "";
  numberX = null;
  numberY = null;
  askOperation = "";
  output = null;
});



//Funciones y Botones operator & equal
const operations = () => {
  switch (askOperation){
    case "+":
      output = numberX + numberY
      break;
    case "-":
      output = numberX - numberY
      break;
    case "*":
      output = numberX * numberY
      break;
    case "/":
      output = numberX / numberY
  }
};



btnSuma.addEventListener("click", () => {
  if (numberX === null) {
    askOperation = "+";
    numberX = Number(screen);
    screen = "";
  } else if (numberX !== null) {
    numberY = Number(screen);
    operations();
    askOperation = "+";
    screen = output;
    showScreen();
    screen = "";
    numberX = output;
  }
});

btnResta.addEventListener("click", () => {
  if (numberX === null) {
    askOperation = "-";
    numberX = Number(screen);
    screen = "";
  } else if (numberX !== null) {
    numberY = Number(screen);
    operations();
    askOperation = "-";
    screen = output;
    showScreen();
    screen = "";
    numberX = output;
  }
});

btnMult.addEventListener("click", () => {
  if (numberX === null) {
    askOperation = "*";
    numberX = Number(screen);
    screen = "";
  } else if (numberX !== null) {
    numberY = Number(screen);
    operations();
    askOperation = "*";
    screen = output;
    showScreen();
    screen = "";
    numberX = output;
  }
});

btnDiv.addEventListener("click", () => {
  if (numberX === null) {
    askOperation = "/";
    numberX = Number(screen);
    screen = "";
  } else if (numberX !== null) {
    numberY = Number(screen);
    operations();
    askOperation = "/";
    screen = output;
    showScreen();
    screen = "";
    numberX = output;
  }
});



btnRdo.addEventListener("click", () => {
  numberY = Number(screen);
  operations();
  finalResult = output.toString();
  document.getElementById("display").innerHTML = finalResult;
});




listenerGenerator ()



