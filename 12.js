//Jacky(Wang Yanzhi)Enter 2 numbers and click the button to get the sum of the 2 numbers. If the input is not a number then an error will be displayed. 3 common functions: 1. JavaScript is very simple and easy to learn 2. JavaScript is mainly used to add interactive behavior to HTML pages 3. Dynamic. JavaScript is an event-driven scripting language that responds to user input without going through a web server. When visiting a webpage, JavaScript can directly respond to these events by clicking the mouse on the webpage, moving the mouse up and down, and moving the window.
function myFunction() {
     var x = 
    document.getElementById("myText").value;
     var y = 
    document.getElementById("Text").value;
     var z= Number(x) + Number(y);
     document.getElementById("demo").innerHTML = z ;
     const message = 
    document.getElementById("demo");
     message.innerHTML = z ;
     var z = document.getElementById("demo").value;
     try { 
     if(x == "") throw "is empty";
     if(isNaN(x)) throw "error";
     x = Number(x);
     if(y == "") throw "is empty";
     if(isNaN(y)) throw "error";
     y = Number(y);
     }
     catch(err) {
     message.innerHTML = "Please enter the number. " ;
     }
     finally {
     document.getElementById("demo").value = "";
    }
 }
