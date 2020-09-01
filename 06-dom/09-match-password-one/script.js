/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function (){
        checkInput();
        if (left.value === right.value) {
            left.style.border = "";
            right.style.border = "";
            alert("Passwords match!");
        }
        else {
            left.style.border = "1px solid red";
            right.style.border = "1px solid red";
        }
    })

    function checkInput(){
        left = document.getElementById("pass-one");
        right = document.getElementById("pass-two");
    }

})();
