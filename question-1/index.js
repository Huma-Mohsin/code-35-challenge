// //Question 103: Write a function that returns a random boolean value, true or false.
// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false
function boolean() {
    var randomNumber = Math.random(); //The Math.random() function generates a floating-point number between 0 (inclusive) and 1 (exclusive). 
    console.log(randomNumber);
    if (randomNumber > 0.1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(boolean());
