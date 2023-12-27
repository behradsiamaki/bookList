const inputText = document.querySelector('#add-book input');
const link = document.querySelector("button");
const checkBox = document.querySelector('#hide input');
const heading = document.querySelectorAll('.title')[1];
const ul = document.querySelector('ul');
const spanDelete = `<span class="delete"> حذف</span>`

inputText.value = '';

link.addEventListener('click', function(e){
    const spanName = document.createElement('span');
    spanName.classname = 'name';
    spanName.textContent = inputText.value;

    const li = document.createElement('li');
    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);

    inputText.value = '';

    e.preventDefault();
})

checkBox.addEventListener('click', function(e){
    if(checkBox.checked){
        heading.style.display = 'none';
        ul.style.display = 'none';
    }else{
        heading.style.display = 'initial ';
        ul.style.display = 'initial';
    }
})






