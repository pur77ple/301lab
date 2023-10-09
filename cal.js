 function calculate() {    //Handles computation operations and triggers this function when the user clicks the equal button.
            var input = document.calc.text;
            input.value = eval(input.value);
        }
        
        function calculateTrigFunction(funcName) {  //Gets the value in the current input box as an Angle and converts it to radians. Keep the result four decimal places and update it into the input box
            var input = document.calc.text;
            var value = parseFloat(input.value);
            var radians = value * (Math.PI / 180);
            input.value = Math[funcName](radians).toFixed(4);
        }
        
        function clearInput() {     //Used to clear the content in the input box
            var input = document.calc.text;
            input.value = '';
        }
        
        function deleteLastCharacter() {       //Remove the last character
            var input = document.calc.text;
            input.value = input.value.slice(0, -1);
        }
        
        function appendCharacter(event) {     //Append character
            var input = document.calc.text;
            var character = event.target.innerText;
            input.value += character;
        }