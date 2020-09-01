/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    checkInput();

    function passLength(value){
        let maxLength = 10;
        if(value.length > maxLength) return false;
        return true;
    }

    function counter(value){
        let i = value.length;
        document.getElementById("counter").innerHTML = i + "/10";
    }

    input.onkeyup = function() {

        if (!passLength(this.value)) input.value = input.value.substr(0, 10);
        counter(this.value);
    }

    function checkInput(){
        input = document.getElementById("pass-one");
    }

})();
