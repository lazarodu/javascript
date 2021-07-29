var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tarefas = ["Fazer Café", "Estudar"];
var tarefas = JSON.parse(localStorage.getItem("list")) || [];

function renderTarefas() {
  listElement.innerHTML = "";

  for (tarefa of tarefas) {
    var tarefaElement = document.createElement("li");
    var tarefaText = document.createTextNode(tarefa);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var pos = tarefas.indexOf(tarefa);
    linkElement.setAttribute("onclick", "deleteTarefa(" + pos + ")");

    var linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    tarefaElement.appendChild(tarefaText);
    tarefaElement.appendChild(linkElement);
    listElement.appendChild(tarefaElement);
  }
}
renderTarefas();

function addTarefas() {
  var tarefaText = inputElement.value;

  tarefas.push(tarefaText);
  inputElement.value = "";
  renderTarefas();
  saveToStorage();
}

buttonElement.onclick = addTarefas;

function deleteTarefa(pos) {
  tarefas.splice(pos, 1);
  renderTarefas();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list", JSON.stringify(tarefas));
}
