function addTask() {
    var task = document.getElementById("task").value;
    var assignee = document.getElementById("assignee").value;
    var li = document.createElement("li");
    li.classList.add("item");

    var taskHolder = document.createElement("p");
    taskHolder.classList.add("taskHolder");
    taskHolder.textContent = "Task: " + task;

    var assigneeHolder = document.createElement("p");
    assigneeHolder.classList.add("assigneeHolder");
    assigneeHolder.textContent = "Assignee: " + assignee;

    var taskWrapper = document.createElement("div");
    taskWrapper.classList.add("taskWrapper");

    var assigneeWrapper = document.createElement("div");
    assigneeWrapper.classList.add("assigneeWrapper");

    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-times-circle");
    
    deleteIcon.onclick = function() {
        alert("Are you sure you want to delete this task?");//needs to be fixed
        li.parentNode.removeChild(li);
    }
    
    var doneIcon = document.createElement("i");
    doneIcon.classList.add("fas");
    doneIcon.classList.add("fa-check");

    taskWrapper.appendChild(taskHolder);
    taskWrapper.appendChild(deleteIcon);
    
    assigneeWrapper.appendChild(assigneeHolder);
    assigneeWrapper.appendChild(doneIcon);
    
    li.appendChild(taskWrapper);
    li.appendChild(assigneeWrapper);
    
    document.getElementById("list").appendChild(li);
}

function searchTodo() { //still not working
    var search = document.getElementById("search");
    var els = document.getElementById(".taskHolder");
    Array.prototype.forEach.call(els, function(p) {
        if (taskHolder.textContent.trim().indexOf(search.value) > -1)
        taskHolder.style.display = 'block';
        else taskHolder.style.display = 'none';
      });
}