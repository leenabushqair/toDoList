// 1) Store all classes in one object.
// 2) Store all ids in one object.
// 3) Store all elements that will be accessed in one object
// 4) Create a model for the task ( shape of data ).
// [{
//     id: ,
//     taskName: ,
//     assignee: ,
//     status: ,
// }, {
//     id: ,
//     taskName: ,
//     assignee: ,
//     status: ,
// }, {
//     id: ,
//     taskName: ,
//     assignee: ,
//     status: ,
// }]
// TODO: Why we don't have a place to hold data ?
// TODO: use small functions as much as possible
// TODO: try to separate the code to small modules
// TODO: derive the UI from the data ( not the opposite)

function addTask() {
    // TODO: change var to const/ let.
    // TODO: Use template instead of create everything inside javascript
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

    // TODO: move to another function and use event listeners
    deleteIcon.onclick = function() {
        li.parentNode.removeChild(li);
        var countToDo = document.getElementById("list").children.length;
        document.getElementById("count1").innerText= countToDo;
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

    // TODO: move to another function
    doneIcon.onclick = function() {
        // Good one
        var copied = li.cloneNode(true);
        // TODO: done items should have the ability to be deleted.
        copied.firstChild.lastElementChild.remove();
        copied.lastElementChild.lastElementChild.remove();
        document.getElementById("doneList").appendChild(copied);
        li.parentNode.removeChild(li);

        var countToDo = document.getElementById("list").children.length;
        document.getElementById("count1").innerText= countToDo;

        var countDone = document.getElementById("doneList").children.length;
        document.getElementById("count2").innerText= countDone;
    }

    document.getElementById("list").appendChild(li);
    var countToDo = document.getElementById("list").children.length;
    document.getElementById("count1").innerText= countToDo;
}

// TODO: change the way of searching based on new model described at line 4
function searchTodo() { //repeat!
    var search = document.getElementById("search");
    var els = document.getElementById(".taskHolder");
    Array.prototype.forEach.call(els, function(p) {
        if (taskHolder.textContent.trim().indexOf(search.value) > -1)
        taskHolder.style.display = 'block';
        else taskHolder.style.display = 'none';
      });
}

