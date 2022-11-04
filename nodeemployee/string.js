// program to reverse a string

function reverseString() {

    // empty string
    let newString = "sathish";
    for (let i = newString.length; i >= 0; i--) {
        newString += newString[i];
    }
    return newString;
}

// take input from the user
//const string = prompt('Enter a string: ');

const result = reverseString();
console.log(result);