// Write code here to communicate with Github
fetch("https://api.github.com/users/estebanmedina2020/repos", {
  method: "get"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var reposCountNode = document.querySelector("#repos-count");
    reposCountNode.innerText = data.length;
    var reposListNode = document.querySelector("#repos-list");
    data.forEach(element => {
      const reposListElement = document.createElement("li");
      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("href", element.url);
      anchorElement.innerHTML = element.name;
      reposListElement.appendChild(anchorElement);
      reposListNode.appendChild(reposListElement);
    });
  })
  .catch(function(err) {
    // Error :(
  });
