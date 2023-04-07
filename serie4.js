// Exercice 4.1
/*
    * [calcSurface -> calcule l'aire d'un rectangle]
    * @param  {[int]} length [longueur du rectangle]
    * @param  {[int]} width  [largeur du rectangle]
    * @return {[int]}        [aire du rectangle (longueur x largeur)]
*/
// let calcSurface = (length, width) => length * width
// let lengthRect = window.prompt("Enter the length of a rectangle");
// let widthRect = window.prompt("Enter the width of a rectangle");
// console.log(calcSurface(length, width));


// Exercice 4.2
/*
    * [rand10 -> donne un nombre alétoire de 1 à 10]
    * @param  {[int]} min [nombre min]
    * @param  {[int]} max [nombre max non-inclu]
    * @return {[int]}     [retourne un nombre entier aléatoire compris entre le min et le max(non-inclu)/(max-1)]
*/
// let rand10 = (min, max) => Math.floor(Math.random() * (max - min)) + min
// console.log(rand10(1, 11));


// Exercice 4.3
/*
    * [multiRand -> donne un tableau de plusieurs nombres alétoires de 1 à 10]
    * @param  {[int]} length [taille du tableau de nombres]
    * @return {[int]}        [retourne un tableau de nombres entiers aléatoires compris entre 1 et 10]
*/
// let rand10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// // function multiRand(length){
// //     let arr = [];
// //     for(let i=0; i<length; i++){
// //         arr.push(rand10(1, 11));
// //     }
// //     return arr;
// // }
// let multiRand = (length) => {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(rand10(1, 11));
//   }
//   return arr;
// };

// let length = window.prompt("enter a size for the array :");
// console.log(multiRand(length));


// Exercice 4.4

// let arr = ["Abel","Alexandra","Anthony","Benjamin","Bruno","Delphine","Emilien","Ethan","Ismaël","Jodie","Julien","Louka","Loïc","Luciano","Marine","Nikko","Noa","Steve","Sylvain","Thomas","Willy"];

// let rand10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// // function pickLearner(inputArr, n){
// //     let newArr=[];
// //     for(let i=0; i<n; i++){
// //         newArr.push(inputArr[rand10(0, inputArr.length)]);
// //     }
// //     return newArr;
// // }
// let pickLearner = (inputArr, n) => {
//     let newArr=[];
//     for(let i=0; i<n; i++){
//         newArr.push(inputArr[rand10(0, inputArr.length)]);
//     }
//     return newArr;
// }

// let length = window.prompt("Enter a size for the array : ");
// while(length<=0 || length>arr.length){
//     length = window.prompt("Enter a new size for the array (between 0 and "+arr.length+") :");
// }
// console.log(pickLearner(arr, length));


// Exercice 4.5
/*
    * [calcDistance -> calcule la distance entre 2 points[x, y]]
    * @param  {[int[]]} a [tab contenant les positions x et y d'un point]
    * @param  {[int[]]} b [tab contenant les positions x et y d'un point]
    * @return {[int]}     [distance entre a et b]
*/

// let a = [1, 1];
// let b = [2, 2];
// let c = [3, 1];
// let d = [4, 1];
// let e = [-2, 2];
// let f = [2, -2];

// // function calcDistance(a, b){
// //     return Math.sqrt(((b[0]-a[0])*(b[0]-a[0]))+((b[1]-a[1])*(b[1]-a[1])));
// // }
// let calcDistance = (a, b) => Math.sqrt(((b[0]-a[0])*(b[0]-a[0]))+((b[1]-a[1])*(b[1]-a[1])));

// console.log(calcDistance(a, b));
// console.log(calcDistance(a, c));
// console.log(calcDistance(d, a));
// console.log(calcDistance(e, f));


// Exercice 4.6

function factorial(a){
    if(a==0){
        return 1;
    }
    else{
        return a * factorial(a-1);
    }
}

let value = window.prompt("enter the value for which you want the factorial :");
console.log(factorial(value));
