// Exercice 5.1

// function askTvSerie(){
//     let titleSeries = window.prompt("enter the title of your series");
//     let yearSeries = window.prompt("enter the year of your series");
//     let nbr = window.prompt("enter the number of cast members");
//     let disMembers = [];
//     for(i=0; i<nbr; i++){
//         disMembers[i] = window.prompt("enter the name of the cast member n°"+(i+1));
//     }
//     let series = {
//         title : titleSeries,
//         year : yearSeries,
//         members : disMembers
//     };
//     return series;
// }

// console.log(JSON.stringify(askTvSerie()));

// Exercice 5.2
// Créez une fonction nommée randomizeCast(tvSerie)qui prendra comme argument la structure de données que vous avez définie dans l'exercice précédent et renverra une liste du même cast mais dans un ordre aléatoire.

// Créez un programme qui utilisera randomizeCast(tvSerie)et askTvSerie()pour interroger l'utilisateur sur une série télévisée puis affichera une liste aléatoire de la distribution précédente qui formera la nouvelle distribution de votre prochaine série.

function askTvSerie(){
    let titleSeries = window.prompt("enter the title of your series");
    let yearSeries = window.prompt("enter the year of your series");
    let nbr = window.prompt("enter the number of cast members");
    let disMembers = [];
    for(i=0; i<nbr; i++){
        disMembers[i] = window.prompt("enter the name of the cast member n°"+(i+1));
    }
    let serie = {
        title : titleSeries,
        year : yearSeries,
        members : disMembers
    };
    return serie;
}
let rand10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function randomizeCast(tvSerie){    
    let series = {
        title : tvSerie.title,
        year : tvSerie.year,
        members : (tvSerie.members).sort(()=> Math.random() - 0.5)
    };
    // for(let i=0; i<tvSerie.members.length; i++){
    //     series.members[i] = tvSerie.members[rand10(0, tvSerie.members.length)];
    // }
    return series;
}

console.log(randomizeCast(askTvSerie()));