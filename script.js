function firstWord(str) {
    // Trim leading spaces
    str = str.trimStart();

    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');

    // If no space found, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Return the substring from start to the first space
    return str.substring(0, spaceIndex);
}
console.log(firstWord('see and stop'));    // Output: 'see'
console.log(firstWord(' Hello World!'));   // Output: 'Hello'
console.log(firstWord('12345'));           // Output: '12345'
console.log(firstWord(''));                // Output: ''