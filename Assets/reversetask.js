
// Task

//First Version

function mirrorEffect(word) {
    let newstr = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newstr+=word[i];
    }
    return newstr;
}
console.log(mirrorEffect("Be the change that you wish to see in the world.")); 

//Second Version

function reverseString(str) {
    var splitSentence = str.split("");
    var reverseArr = splitSentence.reverse();
    var joinArray = reverseArr.join("");
    return joinArray;
}
console.log(reverseString("Do all things with kindness"));


//Third Version
const sentence = 'Happiness is a butterfly';
function reverse(sentence) {
    return sentence.split('').reduce((x, y) => y + x);
}
const change = reverse(sentence);
console.log(change);



