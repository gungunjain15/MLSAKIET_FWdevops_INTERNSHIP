function appendCharacter(char) {
    var display = document.getElementById("display");
    display.value += char;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error";
    }
}