// Exercice 5.1

function askTvSerie(){
    let titleSeries = window.prompt("enter the title of your series");
    let yearSeries = window.prompt("enter the year of your series");
    let cast = [];
    // let nbr = window.prompt("enter the number of cast members");
    // for(i=0; i<nbr; i++){
    //     cast[i] = window.prompt("enter the name of the cast member n°"+(i+1));
    // }
    while(true){
        const member = prompt("Enter the name of a cast member (or leave empty to stop):");
        if (member === "") {
            break;
        }
        cast.push(member);
    }
    let series = {
        title : titleSeries,
        year : yearSeries,
        members : cast
    };
    return series;
}

console.log(JSON.stringify(askTvSerie()));

// Exercice 5.2
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