// //Exercice 1.1
// let a = 3;
// let b = 10;

// console.log(a+b);
// console.log(b-a);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);


// //Exercice 1.2
// let fName = "Nikko";

// console.log(fName);


// //Exercice 1.3
// let firstName = "Nikko";
// let name = "Di Bernardo";
// let city = "Montignies/Sambre"

// console.log("Vous vous appelez "+firstName+" "+name+ " et vous habitez à "+city+".");


// //Exercice 2.1
// age = window.prompt("What is your age");
// if(age > 18){
//     console.log("Your are major");
// }else{
//     console.log("Your are minor");
// }


// //Exercice 2.2
// min = window.prompt("enter a minimum : ");
// max = window.prompt("enter a maximum : ");

// if(min >= max){
//     console.log("You understand nothing");
// }
// else{
//     current = window.prompt("enter a number : ");
//     if(current<max && current>min){
//         console.log(current+" is between "+min+" and "+max);
//     }
//     else{
//         console.log(current+" isn't between "+min+" and "+max);
//     }
// }


// //Exercice 2.3 v1

// let j = 1;
// while(j<101){
//     if((j%2)==0){
//         console.log(j);
//     }
//     j++;
// }

// //Exercice 2.3 v2

// for (let i = 2; i <= 100; i += 2){
//     console.log(i);
// }


// //Exercice 2.4 

// for(let i = 1; i < 101; i++){
//     if((i%2)==0){
//         console.log(i + "/2 = " + i/2);
//     }
//     else{
//         console.log(i + "x3 = " + i*3);
//     }
// }



// //Exercice 2.5

// nbr = window.prompt("enter your favorite number :");

// while(nbr != 42){
//     nbr = window.prompt("Are you sure?");
// }


// //Exercice 2.6

// nbr = window.prompt("enter a number between 1 and 7 included:");
// if(nbr == 1){
//     console.log("Monday");
// }
// else if(nbr == 2){
//     console.log("Tuesday");
// }
// else if(nbr == 3){
//     console.log("Wednesday");
// }
// else if(nbr == 4){
//     console.log("Thursday");
// }
// else if(nbr == 5){
//     console.log("Friday");
// }
// else if(nbr == 6){
//     console.log("Saturday");
// }
// else{
//     console.log("Sunday");
// }


// //Exercice 2.7

// n = Number(window.prompt("enter a number :"));
// let total = 0;

// for(let i=n ; i > 0 ; i--){
//     total+=i;
// }
// console.log(total);


//Exercice 3.0

// let arr = ["Abel","Alexandra","Anthony","Benjamin","Bruno","Delphine","Emilien","Ethan","Ismaël","Jodie","Julien","Louka","Loïc","Luciano","Marine","Nikko","Noa","Steve","Sylvain","Thomas","Willy"];

// for(let prs of arr){
//     console.log(prs);
// } 


// // Exercice 3.1

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [100, 101, 102];
// let total1 = 0;
// let total2 = 0;

// for(let i of arr1){
//     total1 += i; 
// }
// console.log("Sum : "+total1);

// for(let i of arr2){
//     total2 += i; 
// }
// console.log("Sum : "+total2);


// // Exercice 3.2

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [100, 101, 102];
// let total1 = 0;
// let total2 = 0;

// for(let i of arr1){
//     total1 += i; 
// }
// console.log("Average : "+total1/arr1.length);

// for(let i of arr2){
//     total2 += i; 
// }
// console.log("Average : "+total2/arr2.length);


// // Exercice 3.3

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];

// for(let i=0; i < arr1.length; i++){
//     arr2.push(arr1[i]);
//     console.log(arr2[i]);
// }

// // Méthode 2

// let arr1 = [1, 2, 3, 4, 5];
// arr1copy = arr1.map((x) => x);

// console.log(arr1copy);


// Exercice 3.4

let arr1 = [1, 2, 3, 4, 5, -8, 786];
let min = arr1[0];
let max = arr1[0];

for(let i of arr1){
    if(i<min){
        min = i;
    }
    else if(i>max){
        max = i;
    }
}
console.log("minimum : "+min);
console.log("maximum : "+max);