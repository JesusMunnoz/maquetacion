class Professional{
    //Constructor
    constructor (name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
}

let pf1 = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Actor", "img/tarantino.jpg");
let pf2 = new Professional ("Brad Pitt", 61, 80, 1.80, false, "United States", 2, "Actor", "img/brad.jpg");
let pf3 = new Professional ("Leonardo DiCaprio", 49, 85, 1.70, false, "United States", 1, "Actor", "img/leo.jpg");
let pf4 = new Professional ("Margot Robbie", 33, 80, 1.83, false, "Australia", 0, "Actor", "img/margot.jpg");

let arrActores = [pf1, pf2, pf3, pf4];

const contenedor = document.getElementById("listaActores");

for (let i= 0; i < arrActores.length; i++){
    contenedor.innerHTML += `<li> <img src=${arrActores[i].photo}> ${arrActores[i].name}, ${arrActores[i].age}años, ${arrActores[i].weight}kg, ${arrActores[i].height}cm, ${arrActores[i].nationality}, ${arrActores[i].oscarsNumber} premios Oscars, ${arrActores[i].profession} como profesión principal </li></br>`

}