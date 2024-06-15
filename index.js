function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hey"));


function countingString(str){
    return str.length;
}
console.log(countingString("Hey")); 


function Uppercase(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(Uppercase("Hey"));



function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([4, 8, 11, 16, 21, 27, 30]));



function findMin(arr){
    return Math.min(...arr);
}
console.log(findMin([5, 8, 11, 16, 20, 25]));



const numbers = [3, 5, 8, 11, 14, 17, 20];
let sumUp = 0;
numbers.forEach((num) => {
    sumUp += num;
});
console.log(sumUp);


let arr = [5, 8, 10, 12, 15, 20];
let filtered = arr.filter((num) => num > 6);
console.log(filtered);


function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(generateFibonacci(3)); 



function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(29));














// function reverseString(str) {
//     return str.split('').reverse("").join("");
//   }
//   console.log(reverseString("hello"));
  
//   // Counting of String
//   function countingString(str){
//     return str.length;
//   }
//   console.log(countingString("hello"));
  
  
  
//   function Uppercase(str){
  
//     return str.charAt(0).toUpperCase() + str.slice(1)
//   }
//   console.log(Uppercase("hello"));



//   // Find Maximum and Minimum:
// function findMax(arr){
//     return Math.max(...arr)
  
//   }
//    // let number = Number(findMax[1,2,3,4,5,6,7,8,9,10])
//   console.log(findMax([1,2,3,4,5,6,7,8,9,10]))
  
//   function findMin(arr){
//     return Math.min(...arr)
//   }
//   console.log(findMin([1,2,3,4,5,6,7,8,9,10]))

  

//   // Sum of Array

//   const numbers = [1,2,3,4,5,6,7,8,9,10]
//   let sumUp = 0
//    numbers.forEach((num) => {
//     sumUp +=num
//   })
//   console.log(sumUp)

  
//   // Filter Array
//   let arr = [1,3,4,5,6,7,8,9,10]
//   let filtered = arr.filter((arr) => arr > 5);
//   console.log(filtered)


//   // Fibonacci
//   function generateFibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     if (n === 2) return [0, 1];
  
//     let sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//       sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence;
//   }
//   console.log(generateFibonacci(5));  

//   // Prime
//   function isPrime(num) {
//     if (num <= 1) {
//       return false; 
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false; 
//       }
//     }
//     return true; 
//   }
//   console.log(isPrime(7));