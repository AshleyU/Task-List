// //Implement a JavaScript function to validate your form fields
const submitButton = document.getElementById('submitButton');
const alert = document.getElementById('alert');
const form = document.getElementById('form');

const validFormFieldInput = (data) => {
    alert.style.display = 'none';
    return data !== null && data !== ""
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = document.querySelector('#newTaskNameInput').value;
    const description = document.querySelector('#newTaskDescription').value;
    const assignedTo = document.querySelector('#assignedTo').value;
    const dueDate = document.querySelector('#dueDate').value;
    const selectedStatus = document.querySelector('#selectedStatus').value;
    
    if(!validFormFieldInput(task) || !validFormFieldInput(description) || !validFormFieldInput(assignedTo)) {
        alertPopup('All sections much be filled out.');
    } else if (selectedStatus === '' || selectedStatus === 'Select Status') {
        alertPopup('Please select a status.');
    } else if (dueDate === '') {
        alertPopup('Please select a due date.');
    } else {
        form.reset();
        let TaskMan = new TaskManager();
        TaskMan.addTask(task, description, assignedTo, dueDate, selectedStatus);
        TaskMan.render();
    } 
});

function alertPopup(message = 'Missing information in the form.') {
    alert.style.display = "block";
    alert.innerHTML = message;
}
let taskHtml = createTaskHtml();





















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