
const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('lists');

function addNewTask() {
    const inputValue = inputBox.value == '';
    if (inputValue)
        alert('Please enter a task!');
    else {
        let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
        let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span);
    }
    inputBox.value = ''
}