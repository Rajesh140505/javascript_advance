let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, consequatur ab. Libero voluptates possimus repellat perspiciatis odio eaque consequuntur vel, qui debitis autem aliquid repudiandae cupiditate in dicta expedita totam.";
let highestWordLength = 0;
let highestWord = "";
let words = sentence.split(" ");
for(let i = 0; i < words.length; i++){
    if(words[i].length > highestWordLength){
        highestWordLength = words[i].length;
        highestWord = words[i];
    }
}
console.log(highestWord);