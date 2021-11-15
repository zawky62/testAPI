function Main(){
    
    const lastName = document.getElementById("lastName").value;
    const firstName = document.getElementById("firstName").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    const URL = `https://deces.matchid.io/deces/api/v1/agg?firstName=${firstName}&lastName=${lastName}&deathCity=${city}&deathCountry=${country}&fuzzy=false&aggs=firstName`;
    console.log(URL);
    

    ouvrirUrl(URL);
    //getData(URL);
    //var d1 = document.createElement("")
};

function getData(jsonObj, URL) {
    request.open('GET', URL);
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['response.total'];
    header.appendChild(myH1);
 
};

function ouvrirUrl(URL) {

    window.open(URL);
};



// function getData(URL){

//     fetch(URL)
//     .then(function(res) {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then(function(value) {
//       console.log(value);
//     })
//     .catch(function(err) {
//       // Une erreur est survenue
//     });






