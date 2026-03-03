let str = "Hello World";
let count = 0;
let vowels = new Set(["a", "e", "i", "o", "u"]);
for(let char of str){
    if(vowels.has(char)){
        count++;
    }
}
console.log(count);