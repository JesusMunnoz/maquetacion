class Movie{
    //Costructor
    constructor (title, releaseYear, actors, nationality, director, writer, language, platform, isMCU, mainCharacterName, producer, distributor, genre, photo){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nationality = nationality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.platform = platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.photo = photo;
    }
}

let mv1 = new Movie ("Once Upon a Time in Hollywood", 2019, ["Tarantino", "Brad", "Leonardo", "Margot"], "United States", "Tarantino", "Tarantino", "English", "Netflix", "False", "Margot & Leo", "Tarantino", "Sony Pictures", "Comedy/Drama", "img/hollywood.jpg");
let mv2 = new Movie ("Django", 2013, ["Tarantino", "Christoph Waltz", "Jamie Fox", "Leonardo DiCaprio"], "United States", "Tarantino", "Tarantino", "English", "Netflix", "False", "Jamie Fox & Christoph Waltz", "Tarantino", "Sony Pictures", "Comedy/Drama/Action", "img/django.jpg");
let mv3 = new Movie ("Thor Ragnarok", 2017, ["Chris Hemsworth", "Tom Hiddleston", "Mark Ruffalo", "Cate Blanchett", "Jeff Goldblum"], "United States", "Taika Waititi", "Taika Waititi", "English", "Disney", "True", "Chris Hemsworth, Tom Hiddleston & Mark Ruffalo", "Disney", "Disney", "Action/Comedy", "img/t.jpg");
let arrMovie = [mv1, mv2, mv3];

const contenedor = document.getElementById("listaPelis");  //listaPelis es el id de <ul>

for (let i = 0; i < arrMovie.length; i++){
    contenedor.innerHTML += `<li> <img src=${arrMovie[i].photo}> ${arrMovie[i].title}, year of release ${arrMovie[i].releaseYear}, actors ${arrMovie[i].actors}, nacionality ${arrMovie[i].nationality},
     director ${arrMovie[i].director}, writer ${arrMovie[i].writer}, language ${arrMovie[i].language}, platform ${arrMovie[i].platform}, is MCU ${arrMovie[i].isMCU}, Main character/s ${arrMovie[i].mainCharacterName},
    producer ${arrMovie[i].producer}, distributor ${arrMovie[i].distributor}, genre ${arrMovie[i].genre}</li></br>`
}

let newList = document.getElementById("lP"); // lP es id de <ul> para meter más pelis
let newArrMovie = [];

function addFilm(){
    let nombre = document.getElementById("name").value;
    let anno = document.getElementById("anno").value;
    let actor = document.getElementById("actor").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let director = document.getElementById("director").value;
    let escritor = document.getElementById("escritor").value;
    let idioma = document.getElementById("idioma").value;
    let plataforma = document.getElementById("plataforma").value;
    let mcu = document.getElementById("mcu").value;
    let main = document.getElementById("main").value;
    let productor = document.getElementById("productor").value;
    let distribuidor = document.getElementById("distribuidor").value;
    let genero = document.getElementById("genero").value;
    let foto = document.getElementById("foto").value;

    let newMV = new Movie (nombre, anno, actor, nacionalidad, director, escritor, idioma, plataforma, mcu, main, productor, distribuidor, genero, foto);

    arrMovie.push(newMV);
    //console.log(arrMovie);

    let newList = document.getElementById("lP");
    newList.innerHTML += `<li> <img src=${newMV.photo}>  ${newMV.title}, year of release ${newMV.releaseYear}, actors ${newMV.actors}, nacionality ${newMV.nationality},
    director ${newMV.director}, writer ${newMV.writer}, language ${newMV.language}, platform ${newMV.platform}, is MCU ${newMV.isMCU}, Main character/s ${newMV.mainCharacterName},
   producer ${newMV.producer}, distributor ${newMV.distributor}, genre ${newMV.genre}</li></br>`;
}

