/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    var age = prompt("How old are you?")
    var gender = prompt("What is your gender?")
    var hometown = prompt("Where are you from")
    alert("Age: " + age + " gender: " + gender + " hometown: " + hometown)

    if (confirm("Please confirm")) {

    } else {
        var age = prompt("How old are you?")
        var gender = prompt("What is your gender?")
        var hometown = prompt("Where are you from")
        alert("Age: " + age + " gender: " + gender + " hometown: " + hometown)
}
    // your code here
