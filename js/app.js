// //Implement a JavaScript function to validate your form fields
const submitButton = document.getElementById('submitButton');


const validFormFieldInput = (data) => {
    const task = document.querySelector('#newTaskNameInput').value;
    const description = document.querySelector('#newTaskDescription').value;
    const assignedTo = document.querySelector('#assignedTo').value;
    const dueDate = document.querySelector('#dueDate').value;
    const selectedStatus = document.querySelector('#selectedStatus').value;
    if( task == '' ) {
        toggleAlert();
    }
}

//Changed submit button to normal button type and adding event listener
submitButton.addEventListener('click', validFormFieldInput);

function toggleAlert() {
    let alert = document.getElementById('alert');
    alert.style.display = "block";
}

//add an alery pop up after submitting if there is an error in the form
submitButton.addEventListener('click', toggleAlert);
