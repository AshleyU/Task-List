const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const taskHtml = `<li class="list-group-item">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
        <p class="card-text">${assignedTo}</p>
        <p class="card-text">${dueDate}</p>
        <span class="badge badge-pill badge-success pull-right" id="green-status">${status}</span>
    </div>
</li>`
return taskHtml;
}

class TaskManager {
    constructor (currentId) {
        this.tasks = [];
        this.currentId = 0;
    } addTask (name, description, assignedTo, dueDate, status) {
            const newTask = {
                id: this.currentId++,
                name: name,
                description: description,
                assignedTo: assignedTo,
                dueDate: dueDate,
                status: status
            }
            this.tasks.push(newTask);
    } render () {
        let tasksHtmlList = [];
    }
}


