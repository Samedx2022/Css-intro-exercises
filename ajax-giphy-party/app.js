console.log("Let's get this party started!");
const form = document.querySelector('#myForm');
const gifArea = document.getElementById("gif-area");
const searchInput = document.getElementById("search");

async function RandomGif(sGif) {
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${sGif}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)

  let results = res.data.data.length;
  if (results > 0) {
    let rdmNum = Math.floor(Math.random() * results);
    let newGif = document.createElement("img");
    newGif.src = res.data.data[rdmNum].images.original.url;
    newGif.className = "aGif";
    gifArea.appendChild(newGif);
  } else {
   alert(`No Gifs found for the term ${sGif}`);
  }
  console.log(res.data)
}

form.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let searchTerm = searchInput.value;
  searchInput.value = "";

  RandomGif(searchTerm);
});

document.getElementById("boton").addEventListener("click", function() {
  gifArea.innerHTML = "";
});

