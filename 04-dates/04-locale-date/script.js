/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let date = new Date;
    let month =  date.toLocaleString("default", {month: "long"});
    let day = date.toLocaleDateString("default", { weekday: "long"});
    let currentDate = day + " " + date.getDate() + " " + month + " " + date.getFullYear() + ", " + date.getHours() + "h" + date.getMinutes();
    document.getElementById("target").innerHTML = currentDate;

})();
