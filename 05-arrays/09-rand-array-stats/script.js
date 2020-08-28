/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("button").onclick = function (event) {
        let numbers = [];
        for (x = 0; x < 10; x++){
            numbers.push(Math.floor(Math.random() * Math.floor(100)));
        }
        for (i = 1; i <=10; i++) {
            document.getElementById("n-"+i).innerHTML = numbers[i-1];
        }
        let min = Math.min(...numbers);
        let max = Math.max(...numbers);
        let sum = numbers.reduce((a, b) => a + b, 0);
        let avg = sum/10;
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = avg;
    }
})();
