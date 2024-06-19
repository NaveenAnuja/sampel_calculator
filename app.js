

function calc() {
     let number1 = new Number(document.getElementById("number1").value);
     let number2 = new Number(document.getElementById("number2").value);
    
     let operator = document.getElementById("operator").value;
     let output = document.getElementById("output");
    
    switch(operator){
        case "+" : output.innerHTML = number1+number2; break;
        case "-" : output.innerHTML = number1-number2; break;
        case "/" : output.innerHTML = number1/number2; break;
        case "*" : output.innerHTML = number1*number2; break;
        default : output.innerHTML = "invalid Input";

    }
    console.log(typeof number1);
    console.log(typeof number2);
}

