
const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('lists');

/**
 * Add a list item to the list container (lists)
 */
const addNewTask = () =>{
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
    inputBox.value = '';
    saveTaskData();
}

/**
 * Line-through the task when task is finished(clicked)
 * Toggle a task when the user clicks on the span (cross)
 * 
 */
listContainer.addEventListener('click', function(e) {    
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked-task');
        saveTaskData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTaskData();
    }
}, false);

/**
 * Save the task(s) data into user browser
 */
const saveTaskData = () => {
    localStorage.setItem('taskData', listContainer.innerHTML)
}
/**
 * Get the task(s) data from user browser
 */
const getTaskData = () => {
    listContainer.innerHTML = localStorage.getItem('taskData');
}

/**
 * Displays the list of tasks available
 */
getTaskData();