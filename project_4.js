let input = document.getElementById('inputBox');
// select the portion using id
let buttons = document.querySelectorAll('button');
// will give all the buttons in this variable button
let string = "";
// final result will be stored here
let arr = Array.from(buttons);
// makes an array of all the buttons
arr.forEach(button => {
    button.addEventListener('click', (e) => {// with add event, the function to be used is written in "" then with , function name
        if (e.target.innerHTML == '=') {//The target property returns the element where the event occured.
            string = eval(string);//eval is in-built funnction returns whatever presents in the string after evaluating it
            input.value = string;//returns the value of input and stored it in string

        }
        else if (e.target.innerHTML == 'AC') {
            string = " ";//empty the string
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;//keeps on adding new target to already existing string
            input.value = string;
        }

    })
})