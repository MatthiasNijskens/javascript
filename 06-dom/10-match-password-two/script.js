/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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
            alert("Passwords match!");
        }
        else {
            left.classList.add("error");
            right.classList.add("error");
            alert("Incorrect password!")
        }
    })
    function checkInput() {
        left = document.getElementById("pass-one");
        right = document.getElementById("pass-two");
    }

})();
