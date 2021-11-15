function Main(){
    
    const lastName = document.getElementById("lastName").value;
    const firstName = document.getElementById("firstName").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    const URL = `https://deces.matchid.io/deces/api/v1/agg?firstName=${firstName}&lastName=${lastName}&deathCity=${city}&deathCountry=${country}&fuzzy=false&aggs=firstName`;
    console.log(URL);

    document.location(URL)
};

function getData() {


};

function buildURL(lastName, firstName, country, city){
    //https://deces.matchid.io/deces/api/v1/agg?firstName=Raphael&deathCountry=France&fuzzy=false&aggs=firstName
};

