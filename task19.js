let str = "madam";
let reversedStr = str.split("").reverse().join("");
if(reversedStr === str){
    console.log("The string is a palindrome");
}  
else{
    console.log("The string is not a palindrome");
}

console.log(reversedStr);