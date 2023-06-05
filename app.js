console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");

let button = document.querySelector("#submitSearch");
let pFeedback = document.querySelector("#paragraph");


const api_key="Gr5oQbfPpf0Q3SV6IvxmCjblpsnkCrDO"

function gifFetch(){

    let searchInput = document.querySelector("#searchWord");
    console.log(searchInput);
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchInput.value}`)
    .then((response)=> {
        const result = response.json()
        console.log(result)
        return result;
    })
    
    .then((objectReturned)=> {
        console.log(objectReturned);
        const img = document.querySelector("#giphyImage");
        img.src = objectReturned.data.images.original.url;
        searchInput.value = "";
    })
    .catch((err)=> {
        console.log(err.message);
        pFeedback.textContent = err.message;
    })
}

button.addEventListener("click", gifFetch)