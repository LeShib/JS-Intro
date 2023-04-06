// Exercice 4.1
/*
 * [calcSurface -> calcule l'aire d'un rectangle]
 * @param  {[int]} length [longueur du rectangle]
 * @param  {[int]} width  [largeur du rectangle]
 * @return {[int]}        [aire du rectangle (longueur x largeur)]
 */
// let calcSurface = (length, width) => length * width
// console.log(calcSurface(4, 3));


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

// length = window.prompt("Enter a size for the array : ");
// while(length<=0 || length>arr.length){
//     length = window.prompt("Enter a new size for the array (between 0 and "+arr.length+") :");
// }
// console.log(pickLearner(arr, length));


// Exercice 4.5
// Créez une fonction nommée calcDistance qui prend les coordonnées de deux points différents A et B dans un espace 2D. Cette fonction doit renvoyer la distance entre ces deux points.

// Exemples de résultats :
// Point A = [1, 1], point B = [2, 2] => 1,41
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5,65
// Créez un programme pour utiliser cette fonction.
// Ecrire une documentation pour la calcDistancefonction.
// Remarque : Vous devez probablement effectuer une recherche sur Google pour connaître la formule mathématique permettant de le faire. Vous aurez aussi probablement besoin de chercher des fonctions utiles en JavaScript pour vous aider à faire des formules mathématiques complexes...

function calcDistance(a, b){
    
}


// Exercice 4.6
// Créez une fonction factorial(a)qui renvoie la factorielle d'un nombre.
// Cette fonction doit être récursive.
