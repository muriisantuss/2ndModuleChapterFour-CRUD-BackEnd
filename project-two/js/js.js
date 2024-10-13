function search() {
  
  var user = document.getElementById("inputUserName").value;
  let url = `https://api.github.com/users/${user}`;

  $.getJSON(url, (u) => {
    document.getElementById("name").innerHTML = u.name;
    document.getElementById("url").innerHTML = u.html_url;
    document.getElementById("company").innerHTML = u.company;
    document.getElementById("avatar_url").innerHTML = `
      <img src=${u.avatar_url} alt="" width="200" height="200" class="rounded-3 shadow">
    `;
  });
}
