
const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('lists');

/**
 * Add a list item to the list container (lists)
 */
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

/**
 * Line-through the task when task is finished(clicked)
 * Toggle a task when the user clicks on the span (cross)
 * 
 */
listContainer.addEventListener('click', function(e) {    
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked-task');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);