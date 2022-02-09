// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balance = (str) => {     
    const strArray = str.split('');     
    const parens = []      
    for (let i = 0; i < strArray.length; i++){         
        if (strArray[i] === '(' || strArray[i] === ')'){             
            parens.push(strArray[i])         
        }     
     }      if (parens.length % 2 !== 0){         
        return false     
     } else {         
        return true     
    }      
   return parens  
}  
 
// console.log(balance(sample2));