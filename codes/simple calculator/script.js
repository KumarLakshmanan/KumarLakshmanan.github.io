var buttons = document.querySelectorAll(".button");
var calcTextBox = document.getElementById("answer");

buttons.forEach(element => {
    element.addEventListener("click" , myFunction)
});

function myFunction(e) {
    if (e.target.innerHTML == "c") {
        calcTextBox.value = ''; 
    }
    else if(e.target.innerHTML == "←"){
        calcTextBox.value = calcTextBox.value.substr(0 , calcTextBox.value.length - 1);
    }
    else if(e.target.innerHTML == "+" || 
            e.target.innerHTML == "-" || 
            e.target.innerHTML == "/" ||
            e.target.innerHTML == "*" ){
        let LastString = calcTextBox.value.charAt(calcTextBox.value.length - 1)
        if (LastString == "."||LastString == "+" || LastString == "-" || LastString == "*" || LastString == "/") {
            calcTextBox.value = calcTextBox.value.substr(0 , calcTextBox.value.length - 1);
            calcTextBox.value += e.target.innerHTML; 
        }
        else {
            calcTextBox.value += e.target.innerHTML; 
        }
    }
    else if (e.target.innerHTML == "=") {
        if(calcTextBox.value.length != 0){
           calcTextBox.value = eval(eval(calcTextBox.value).toPrecision(2));
        }
        else{calcTextBox.value = "0";}
    }
    else{
        calcTextBox.value += e.target.innerHTML; 
    }
}
