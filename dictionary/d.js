const goBtn = document.querySelector(".header img");
const container = document.querySelector(".container");
goBtn.addEventListener("click", () => {
    container.classList.remove("active");
})

infoText = document.querySelector(".text");
search = document.querySelector(".search");
let sound = document.querySelector(".word img");

function data(result) {
    //when dictionary not found the meaning of word the it returns title
    if (result.title) {
        search.classList.replace("pending", "error");
        infoText.innerHTML = `Can't find the meaning !!! please try again`;
    }
    else {
        container.classList.add("active");
        let word = document.querySelector(".word h3")
        word.innerText = result[0].word;
        let type1 = document.querySelector(".type1")
        type1.innerText = result[0].meanings[0].partOfSpeech;
        let type2 = document.querySelector(".type2");
        type2.innerText = result[0].phonetic;

        //let d = result[0].meanings[0].definitions[0];
        let meaning = document.querySelector(".meaning p");
        meaning.innerText = result[0].meanings[0].definitions[0].definition;

        let synonym1 = document.querySelector(".s1");
        synonym1.innerText = result[0].meanings[0].synonyms[0];

        let synonym2 = document.querySelector(".s2");
        synonym2.innerText = result[0].meanings[0].synonyms[1];

        let antonym1 = document.querySelector(".a1");
        antonym1.innerText = result[0].meanings[0].antonyms[0];

        let antonym2 = document.querySelector(".a2");
        antonym2.innerText = result[0].meanings[0].antonyms[1];

        let audio = new Audio (result[0].phonetics[0].audio);
        sound.addEventListener("click", ()=> {
            audio.play();
        })
    }
    console.log(result);

}

function fetchApi(word) {
    //here word will be same as e.target.value
    search.classList.add("pending");
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    // fetch(url).then(response => response.json()).then(result => console.log(result));
    fetch(url).then(response => response.json()).then(result => data(result));

}

const searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", e => {
    if (e.key == "Enter" && e.target.value != "") {
        //console.log(e.target.value);
        fetchApi(e.target.value);
    }
})
// searchText.addEventListener("keyup", e => {
//     if (e.key == "Enter" && searchText.value != "") {
//         console.log(searchText.value);
//     }
// })
//we can write in this way also

