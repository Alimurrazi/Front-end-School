"use strict"

var body = document.getElementsByTagName('body')[0];
var modal;
var container;
var currentIndex;
var currentCategory = "all";
var isEdit = false;

function init() {
    containerView();
    modalView();
}

function containerView() {
    var containerContent = '<div class="container" id="container"></div>';
    body.innerHTML += containerContent;

    container = document.getElementById('container');
    titleIconView();
}

function titleIconView() {
    var titleIconContent = '<div class="grid title-icon">' +
        '<i class="fa fa-check" aria-hidden="true"></i>' +
        '</div>';
    container.innerHTML += titleIconContent;
    titleView();
}

function titleView() {
    var titleContent = '<div class="grid title">' +
        '<h2>To do</h2>' +
        '</div>';
    container.innerHTML += titleContent;
    typeTaskView();
}

function typeTaskView() {
    var typeTaskContent = '<div class="grid type-task">' +
        '<input type="text" name="" placeholder="type task" class="type-new-task id="typeNewTask">' +
        '</div>';
    container.innerHTML += typeTaskContent;
    addTaskView();
}

function addTask() {
    var value = document.getElementsByTagName('input')[0].value;

    if (value != "") {
        if (isEdit == true) {
            updateTask();
        } else {
            console.log(value);
            var allTask = JSON.parse(localStorage.getItem("allTask"));

            if (allTask == null)
                allTask = [];

            var newTask = {
                "title": value,
                "status": 0
            };

            allTask.push(newTask);
            localStorage.setItem("allTask", JSON.stringify(allTask));
            showData();
        }
    }
    else
    {
       alert("Please Write Some Text!");
    }
}

function updateTask() {
    var allTask = JSON.parse(localStorage.getItem("allTask"));
    allTask[currentIndex].title = document.getElementsByTagName('input')[0].value;
    localStorage.setItem("allTask", JSON.stringify(allTask));
    isEdit = false;
    document.getElementsByTagName('input')[0].value = "";
    var addBtn = document.getElementById('add-btn');
    addBtn.innerHTML = "Add New Task";

    showData();
}

function showData() {
    
   // currentCategory = this.getAttribute("id");
   //var currentClicked = document.getElementsByClassName("clicked")[0];
   //currentClicked.classList.remove("clicked");
   //console.log(currentClicked.classList);

   if(currentCategory == "all")
   {
   // var currentCategoryClass = document.getElementById("all");
   // currentCategoryClass.classList.add("clicked");
    allData();
   }
   if(currentCategory == "completed")
   {
   // var currentCategoryClass = document.getElementsByClassName("completed")[0];
   // currentCategoryClass.classList.add("clicked");
    completed();
   }
   if(currentCategory == "active")
   {
    // var currentCategoryClass = document.getElementsByClassName("active")[0];
    // currentCategoryClass.classList.add("clicked");
     active();
   }

}

function addTaskView() {
    var addTaskContent = '<div class="grid add-task">' +
        '<button id="add-btn" onclick="addTask()">Add New Task</button>'
    '</div>';
    container.innerHTML += addTaskContent;
    taskCategoryView();
}

function taskCategoryView() {
    var taskCategoryContent = '<div class="grid task-category">' +
        '<nav>' +
        '<span class="all clicked" id="all" onclick="allData()" >' +
        'All' +
        '</span>' +
        '<span class="completed" id="completed" onclick="completed()" >' +
        'Completed' +
        '</span>' +
        '<span class="active" id="active" onclick="active()" >' +
        'Active' +
        '</span>' +
        '</nav>' +
        '</div>';
    container.innerHTML += taskCategoryContent;
    //document.getElementsByClassName("all")[0].addEventListener("click",showData);
    //document.getElementById("completed").addEventListener("click",showData);
    //document.getElementById("active").addEventListener("click",showData);
    taskListView();
}

function taskListView() {
    var taskListContent = '<div class="grid task-list">' +
        '<ul id="taskList">' +
        '</ul>' +
        '</div>'
    container.innerHTML += taskListContent;
    showData();
}

function modalView() {
    var modalContent = '<div class="modal">' +
        '<div class="modal-content">' +
        '<div class="edit" onclick="editTask()">' +
        '<i class="fa fa-pencil" aria-hidden="true"></i><span class="edit-label">Edit</span>' +
        '</div>' +
        '<div class="interval">' +
        'interval' +
        '</div>' +
        '<div class="delete" onclick="deleteTask()">' +
        '<i class="fa fa-trash" aria-hidden="true"></i><span class="delete-label">Delete</span>' +
        '</div>' +
        '</div>' +
        '</div>'

    body.innerHTML += modalContent;

    addClickModal();
}

function addClickModal() {
    var allTrigger = document.getElementsByClassName("trigger");

    for (var i = 0; i < allTrigger.length; i++) {
        allTrigger[i].addEventListener("click", updateListItem);
    }
    window.addEventListener("click", windowOnClick);
}

function updateListItem() {
    currentIndex = this.parentNode.getAttribute('id');
    toggleModal();
}

function toggleModal() {
    modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function deleteTask() {
    var allTask = JSON.parse(localStorage.getItem("allTask"));
    allTask.splice(currentIndex, 1);
    localStorage.setItem("allTask", JSON.stringify(allTask));
    toggleModal();
    showData();
}

function editTask() {
    var allTask = JSON.parse(localStorage.getItem("allTask"));
    var taskValue = allTask[currentIndex];
    document.getElementsByTagName('input')[0].value = taskValue.title;
    document.getElementById('add-btn').innerHTML = "Save";
    isEdit = true;
    toggleModal();
}

function changeState(index) {
    currentIndex = index;
    var allTask = JSON.parse(localStorage.getItem("allTask"));
    if (allTask[currentIndex].status == 0)
        allTask[currentIndex].status = 1;
    else
        allTask[currentIndex].status = 0;
    localStorage.setItem("allTask", JSON.stringify(allTask));
    
    showData();
}

function allData()
{
    //var id = document.querySelectorAll('*[id]')[2].getAttribute("id");
   // if(id=="all")
   // console.log("equal");
   // console.log(document.querySelector("#all"));
     // document.getElementById("all").classList.add("clicked");
    document.getElementsByClassName("clicked")[0].classList.remove("clicked");
    document.getElementById("all").classList.add("clicked");
    
    currentCategory = "all";

    var allTask = JSON.parse(localStorage.getItem("allTask"));
    var taskListContent = document.getElementById("taskList");
    taskListContent.innerHTML = "";
    var count = 0;

    if (allTask != null) {
        for (var i = 0; i < allTask.length; i++) {
            var specificTaskContent;
            if (allTask[i].status == 1) {
                count++;
                specificTaskContent = '<li class="specific-task" id="' + i + '">' +
                    '<span class="category-icon" onclick="changeState(' + i + ')">' +
                    '<i class="fa fa-circle-o" aria-hidden="true"></i></span>' +
                    '<span class="category-label">' + allTask[i].title + '</span>' +
                    '<span class="category-modal-icon trigger">' +
                    '<i class="fa fa-ellipsis-v">' +
                    '</i><i class="fa fa-ellipsis-v"></i></span></li>';

                taskListContent.innerHTML += specificTaskContent;

                if (count == allTask.length)
                    addClickModal();
            } else {
                count++;
                specificTaskContent = '<li class="specific-task" id="' + i + '">' +
                    '<span class="category-icon" onclick="changeState(' + i + ')">' +
                    '<i class="fa fa-check-circle" aria-hidden="true"></i></span>' +
                    '<span class="category-label">' + allTask[i].title + '</span>' +
                    '<span class="category-modal-icon trigger">' +
                    '<i class="fa fa-ellipsis-v">' +
                    '</i><i class="fa fa-ellipsis-v"></i></span></li>';

                taskListContent.innerHTML += specificTaskContent;

                if (count == allTask.length)
                    addClickModal();
            }
        }
    }
}

function completed() {
    
    document.getElementsByClassName("clicked")[0].classList.remove("clicked");
    document.getElementById("completed").classList.add("clicked");

    currentCategory = "completed";

    var allTask = JSON.parse(localStorage.getItem("allTask"));
    var taskListContent = document.getElementById("taskList");
    taskListContent.innerHTML = "";

    if (allTask != null) {
        for (var i = 0; i < allTask.length; i++) {
            var specificTaskContent;
            if (allTask[i].status == 1) {
                    specificTaskContent = '<li class="specific-task" id="' + i + '">' +
                    '<span class="category-icon" onclick="changeState(' + i + ')">' +
                    '<i class="fa fa-circle-o" aria-hidden="true"></i></span>' +
                    '<span class="category-label">' + allTask[i].title + '</span>' +
                    '<span class="category-modal-icon trigger">' +
                    '<i class="fa fa-ellipsis-v">' +
                    '</i><i class="fa fa-ellipsis-v"></i></span></li>';

                taskListContent.innerHTML += specificTaskContent;
            }
            if (i == allTask.length - 1)
                addClickModal();
        }
    }
}

function active() {
    
    document.getElementsByClassName("clicked")[0].classList.remove("clicked");
    document.getElementById("active").classList.add("clicked");

    currentCategory = "active";

    var allTask = JSON.parse(localStorage.getItem("allTask"));
    var taskListContent = document.getElementById("taskList");
    taskListContent.innerHTML = "";
    console.log(taskListContent);

    if (allTask != null) {
        for (var i = 0; i < allTask.length; i++) {
            var specificTaskContent;
            if (allTask[i].status == 0) {
                specificTaskContent = '<li class="specific-task" id="' + i + '">' +
                    '<span class="category-icon" onclick="changeState(' + i + ')">' +
                    '<i class="fa fa-check-circle" aria-hidden="true"></i></span>' +
                    '<span class="category-label">' + allTask[i].title + '</span>' +
                    '<span class="category-modal-icon trigger">' +
                    '<i class="fa fa-ellipsis-v">' +
                    '</i><i class="fa fa-ellipsis-v"></i></span></li>';

                taskListContent.innerHTML += specificTaskContent;
            }
            if (i == allTask.length - 1)
                addClickModal();
        }
    }
}