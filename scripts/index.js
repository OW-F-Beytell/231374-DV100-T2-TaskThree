calculate = () =>{
    let operation = document.getElementById("operation").value;
    let answer = 0;

    if (operation === "Plus") {
        answer = +document.getElementById("valueOne").value + +document.getElementById("valueTwo").value;
    }
    if (operation === "Minus") {
        answer = +document.getElementById("valueOne").value - +document.getElementById("valueTwo").value;
    }
    if (operation === "Times") {
        answer = +document.getElementById("valueOne").value * +document.getElementById("valueTwo").value;
    }
    if (operation === "Divide") {
        answer = +document.getElementById("valueOne").value / +document.getElementById("valueTwo").value;
    }

    console.log(answer);
}