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
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
            
        }

        let joinedTasks = tasksHtmlList.join("\n");
        const taskli = document.getElementById('ul');
        //let ul = document.getElementById('ul');           
        //let newLi = document.createElement('li');
        //ul.appendChild(newLi);
        taskli.innerHTML = joinedTasks;

        console.log(joinedTasks);
        console.log(tasksHtmlList);
    }
}


