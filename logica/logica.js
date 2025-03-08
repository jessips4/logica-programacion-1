// ingresar 3 numeros
let num1 = parseFloat(prompt("número 1:"));
let num2 = parseFloat(prompt("número 2:"));
let num3 = parseFloat(prompt("número 3:"));

let numbers = [num1, num2, num3];

// ordenar los números de mayor a menor
function ordenMayor() {
    numbers.sort((a, b) => b - a); 
    console.log("mayor a menor:", numbers);   
    return numbers; 
}

// ordenar los números de menor a mayor
function ordenMenor( ) {
    numbers.reverse(); 
    console.log("menor a mayor:", numbers);
}

//Comparar si son iguales
function iguales( ){
    if (num1 == num2 && num1 == num3){
        console.log("todos los numeros son iguales",num1,num2,num3);
    }else if (num1 == num2){ 
        console.log("Estos numeros son iguales",num1,num2);

    } else if(num2 == num3){
        console.log("Estos numeros son iguales", num2,num3);

    }else if(num1 == num3){
        console.log("Estos numeros son iguales", num1,num3);
    } else {
        console.log("No hay numeros iguales");
    }
}

ordenMayor(); 
ordenMenor();
iguales();





