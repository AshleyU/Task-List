const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    const taskHtml = `<li class="list-group-item" data-task-id = "${id}">
    <div class="card-body" id="data-task-id">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
        <p class="card-text">${assignedTo}</p>
        <p class="card-text">${dueDate}</p>
        <span class="badge badge-pill badge-success pull-right" id="green-status">${status}</span>
        <button type="button" class="btn btn-secondary btn-sm done-button">Done</button>
    </div>
</li>`
return taskHtml;
}

class TaskManager {
    constructor (currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
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
        
        for (let i = 0; i < this.tasks.length; i++) {
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.dueDate);
            let formattedDate = (date.getMonth()+1) + '/' + (date.getDate()+1) + '/' + date.getFullYear();
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, currentTask.id);
            tasksHtmlList.push(taskHtml);
    
        }
        let joinedTasks = tasksHtmlList.join("\n");
        const taskli = document.getElementById('ul');
        taskli.innerHTML = joinedTasks;

    } getTaskById(taskId) {
        let foundTask;

        for(let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];

            if(task.id === taskId) {
                foundTask = task;
            }
        }
        
        return foundTask;
    } 
}
