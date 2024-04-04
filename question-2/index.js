// Question 104: Create a function that generates a random hexadecimal color code.
// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.
function generateHexCode() {
    // // Define the characters used in hexadecimal representation
    var hexavalues = "0123456789ABCDEF"; //HEXADECIMAL REPRESENTATION
    var hexColor = "#"; //hexcolor is a variable,it has # init as avalue.
    // Generate a random hexadecimal digit 6 times to form a 6-digit hex code because color code is 6 digit
    for (var i = 0; i < 6; i++) {
        // Get a random hexadecimal color code from 0 to 15 to pick a character from the 'hex values' string
        var random_hexa_decimal_colorcode = Math.floor(Math.random() * 16);
        // Append the selected character to the hex color code string
        hexColor += hexavalues[random_hexa_decimal_colorcode];
    }
    //return generatedd hexcolor
    return hexColor;
}
console.log(generateHexCode());
//Author-Huma Mohsin
