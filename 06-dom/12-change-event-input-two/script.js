/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    checkInput();

    function passLength() {
        let val = document.getElementById("pass-one").value
        if (val.match(/[0-9]{2,}/) && val.length >= 8) {
        document.getElementById("validity").innerHTML = "Ok"
        }
        else {
            document.getElementById("validity").innerHTML = "Not ok"
        }
    }

    function checkInput(){
        input = document.getElementById("pass-one").addEventListener("keyup", passLength);
    }
})();

