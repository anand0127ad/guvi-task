class movie {
    constructor(title="",studio="",rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }

    getPG (movie=[movie]){
        var filteredArry=[];
        movie .foreach((movie)=>{
           if (movie.rating==="PG"){
            filteredArry.push(movie);
           }
        });
    
    return filteredArry;
    }

}


console.log(movie);
const CASINOROYAL1 =new movie("CASINOROYAL","EON PRODUCTION");
const CASINOROYAL2 =new movie("CASINOROYAL","EON PRODUCTION");
const CASINOROYAL3 =new movie("CASINOROYAL","EON PRODUCTION","PS13");


console.log(CASINOROYAL1(CASINOROYAL1,CASINOROYAL2,CASINOROYAL3));
















