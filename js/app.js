// //Implement a JavaScript function to validate your form fields
const submitButton = document.getElementById('submitButton');
const alert = document.getElementById('alert');
const form = document.getElementById('form');

let TaskMan = new TaskManager();
//TaskMan.addTask('Han', 'Solo', 'Ashley', '5/13/2021', 'Working on it');
console.log(TaskMan.tasks);

const validFormFieldInput = (data) => {
    alert.style.display = 'none';
    return data !== null && data !== ""
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = document.querySelector('#newTaskNameInput').value;
    const description = document.querySelector('#newTaskDescription').value;
    const assignedTo = document.querySelector('#assignedTo').value;
    const selectedStatus = document.querySelector('#selectedStatus').value;
    const dueDate = document.querySelector('#dueDate').value;
    if(!validFormFieldInput(task) || !validFormFieldInput(description) || !validFormFieldInput(assignedTo)) {
        alertPopup('All sections much be filled out.');
    } else if (selectedStatus === '' || selectedStatus === 'Select Status') {
        alertPopup('Please select a status.');
    } else if (dueDate === '') {
        alertPopup('Please select a due date.');
    } else {
        form.reset();
    }
});

function alertPopup(message = 'Missing information in the form.') {
    alert.style.display = "block";
    alert.innerHTML = message;
}
const taskHtml = createTaskHtml();
console.log(taskHtml);





















/*
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = newTaskNameInput.value;
    const description = newDescriptionInput.value;
    const assignedTo = newAssignedToInput.value;
    const dueDate = newDueDateInput.value;
    /* Task4-#2 - Log your field inputs to verify that
    you are getting the data you need to validate.*/
    /*console.log("Name:  " , taskName);
    console.log("Description:  " , description);
    console.log("Assigned To:  " , assignedTo);
    console.log("Due Date:  " , dueDate);
    // Task4-#3 - Validating/showing errors
    const formComplete = validFormFieldInput(taskName, description, assignedTo, dueDate);
    if (formComplete) {
        warning.style.display = 'none';
        form.reset();
    } else {
        warning.style.display = 'block';
    }
    })
    */