const inputText = document.querySelector("#add-book input");
const link = document.querySelector("button");
const checkBox = document.querySelector("#hide input");
const heading = document.querySelectorAll(".title")[1];
const ul = document.querySelector("ul");
const spanDelete = `<span class="delete"> حذف</span>`;

inputText.value = "";

link.addEventListener("click", function (e) {
  const spanName = document.createElement("span");
  spanName.className = "name";
  spanName.textContent = inputText.value;

  const li = document.createElement("li");

  li.appendChild(spanName);
  li.innerHTML += spanDelete;

  ul.appendChild(li);

  storeToLocalStorege(inputText.value);

  inputText.value = "";
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function (e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let item of tasks) {
    const spanName = document.createElement("span");
    spanName.className = "name";
    spanName.textContent = item;

    const li = document.createElement("li");

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);
  }
});

function storeToLocalStorege(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  tasks.push(task);

  localStorage.setItem("tasks", tasks);
}

checkBox.addEventListener("click", function (e) {
  if (checkBox.checked) {
    heading.style.display = "none";
    ul.style.display = "none";
  } else {
    heading.style.display = "initial ";
    ul.style.display = "initial";
  }
});
