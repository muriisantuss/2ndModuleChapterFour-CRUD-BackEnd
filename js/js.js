// alternativa 1
$.getJSON("https://api.imgflip.com/get_memes", (response) => {
  for (var m of response.data.memes) {
    document.getElementById("memes").innerHTML += 
    `<div class="card m-auto p-3 px-5 mt-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${m.name}</h5>
        </div>
        <img src="${m.url}" class="card-img-top shadow rounded-2" alt="meme">
      </div>`;
  }
});

// alternativa 2
// fetch("https://api.imgflip.com/get_memes").then((reponse) => console.log(reponse.json()));
