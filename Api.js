//searchinput
//searchbtn

const dictionary = (word)=> {
   
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db65d39cbfmsh5f73b77d9226092p1c6472jsn71fe162f765c',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};
 fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(response => response.json())
    .then((response) => {
        wordheading.innerHTML = response.word;
        definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("2.", "<br>3.").replace("2.", "<br>4.");
    
    } )

    .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)

})