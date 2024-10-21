
// function FizzBuzz(num) {
//     if (num < 1 || num > 100){
//         console.log('Numarul trebuie sa fie cumprins intre 1 si 100')
//         return;
//     }
//     if (num % 3 === 0 && num % 5 === 0){
//         console.log('FizzBuzz');
//     } else if (num % 3 === 0){
//         console.log('Fizz');
//     } else if (num % 5 === 0){
//         console.log('Buzz');
//     } else { 
//         console.log(num);
//     }
   
// }

// FizzBuzz(3)
// FizzBuzz(5)
// FizzBuzz(15)
// FizzBuzz(1)
// FizzBuzz(20)
// FizzBuzz(101)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function trueFalse(list, k) {
//     const verificare = list.filter(listItem => listItem === k);

//     if (verificare.length > 0) {
//         return true; 
//     } else {
//         return false; 
//     }
// }

// console.log(trueFalse(arr, 12))
// console.log(trueFalse(arr, 20))


// const arr =[1,3,5,4,4,2,6,1,8,7,6,4,3]

// const arr =[1,3,5,4,4,2,6,1,8,7,6,4,3]
// const arr1 =[1,2,3,4,5,6,7,8,9,10,11,12,13]

// function unice (list) {
//    return !list.some((item,index) => list.indexOf(item) !== index);   
        
// }

// console.log(unice(arr))
// console.log(unice(arr1))



// const str = 'frctl drgnl';

// function vocale(str) {
//     const voc = str.match(/[aeiouAEIOU]/g);

//     return voc ? voc.length : 'nu sunt vocale';
// }

// console.log(vocale(str))


const str = ['mere','banane','mandarine','frunctul dragonului','cocos']


function bigLength(list){
   return list.sort((a,b) => a.length - b.length);
}

console.log(bigLength(str))
