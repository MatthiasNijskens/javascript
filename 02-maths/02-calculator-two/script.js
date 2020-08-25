/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    //switch is only needed once and will SWITCH between CASEs until it finds a match.
    var performOperation = function (operation) {
        switch (operation){
            case "addition":
                checkinput();
                alert(numberone + numbertwo);
                break;

            case "substraction":
                checkinput();
                alert(numberone - numbertwo);
                break;

            case "multiplication":
                checkinput();
                alert(numberone * numbertwo);
                break;

            case "division":
                checkinput();
                alert(numberone / numbertwo);
                break;
        }};

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

function checkinput(){
    numberone = parseInt(document.getElementById("op-one").value);
    numbertwo = parseInt(document.getElementById("op-two").value);
}
