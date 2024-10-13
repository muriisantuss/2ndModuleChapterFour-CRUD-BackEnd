let userHistory = [];

function search() {
  var user = document.getElementById("inputUserName").value;
  let url = `https://api.github.com/users/${user}`;

  $.getJSON(url, (u) => {
    clearError();
    setUserData(u);
    if (isNew(u)) {
      save(u);
      getHistory(u);
    }
  }).fail(() => {
    clearUserData();
    showError("ERROR 404 - USUARIO NÃO ENCONTRADO");
  });
}


function save(u) {
  userHistory.push(u);
}
function isNew(u) {
  return userHistory.filter((user) => user.login === u.login).length == 0;
}
function getHistory(u) {
  document.getElementById("history").innerHTML += `
    <div class="col"><img src=${u.avatar_url} alt="" width="110" height="100" class="rounded-3 shadow"></div>`;
}
function showError(msg) {
  console.log("Erro:", msg); 
  document.getElementById("errorMessage").innerHTML = msg;
}
function clearError() {
  document.getElementById("errorMessage").innerHTML = "";
}
function setUserData(u) {
  document.getElementById("name").innerHTML = u.name || "";
  document.getElementById("url").innerHTML = u.html_url || "";
  document.getElementById("company").innerHTML = u.company || "";
  document.getElementById("avatar_url").innerHTML = u.avatar_url
    ? `<img src=${u.avatar_url} alt="" width="200" height="200" class="rounded-3 shadow">`
    : "";
}

function clearUserData() {
  document.getElementById("name").innerHTML = "";
  document.getElementById("url").innerHTML =  "";
  document.getElementById("company").innerHTML = "";
  document.getElementById("avatar_url").innerHTML = ""
}


