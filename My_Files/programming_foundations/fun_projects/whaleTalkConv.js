const input = 'To be, or not to be. That is the question.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++){
    if (input[i] === vowels[v]){
        if (input[i] === 'e'){
       resultArray.push('ee');
     } else if (input[i] === 'u'){
       resultArray.push('uu');
     }
      else {
       resultArray.push(input[i]);
     }
    } 
  }
}
console.log(resultArray.join('').toUpperCase());