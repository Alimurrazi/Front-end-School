 "use strict"

   var body = document.getElementsByTagName('body')[0];
   var modal ;
   var container;
   var currentIndex;

 function init()
 {
    containerView();
    modalView();
 }

 function containerView()
 {
    var containerContent = '<div class="container" id="container"></div>';
    body.innerHTML += containerContent;

    container = document.getElementById('container');
    titleIconView();
 }

 function titleIconView(){
     var titleIconContent = '<div class="grid title-icon">'+
            '<i class="fa fa-check" aria-hidden="true"></i>'+
         '</div>';    
     container.innerHTML += titleIconContent;
      titleView();
 }

 function titleView()
 {
    var titleContent = '<div class="grid title">'+
            '<h2>To do</h2>'+
         '</div>';
    container.innerHTML += titleContent;
    typeTaskView();
 }

 function typeTaskView()
 {
    var typeTaskContent =          '<div class="grid type-task">'+
            '<input type="text" name="" placeholder="type task" class="type-new-task> id="typeNewTask"'+
         '</div>';
    container.innerHTML += typeTaskContent;
    addTaskView();     
 }

window.addEventListener('input', function (e) {
    var addBtnLabel = document.getElementById('addBtnLabel');
    var typeNewTaskValue = document.getElementsByTagName('input')[0].value;
    if(typeNewTaskValue == "")
    {
       addBtnLabel.innerHTML = "Add New Task";
    }
    else
    {
       addBtnLabel.innerHTML = "Save";
    }
}, false);

 function addTask()
 {
    var value = document.getElementsByTagName('input')[0].value;
    if(value!=null)
    {
        console.log(value);
    var allTask=JSON.parse(localStorage.getItem("allTask"));
 
    if(allTask==null)
        allTask = [];

    var newTask={
        "title": value,
        "status": 0
    };

    allTask.push(newTask);
    localStorage.setItem("allTask",JSON.stringify(allTask));
    showData();
    }
 }

 function showData()
 {
     var allTask = JSON.parse(localStorage.getItem("allTask"));
     var taskListContent = document.getElementById("taskList");
     taskListContent.innerHTML = "";
     var count=0;
     console.log(taskListContent);

     if(allTask!=null)
     {
     for (var i = 0; i < allTask.length; i++) {
        var specificTaskContent;
        if(allTask[i].status == 1)
        {
            count++;
            specificTaskContent = '<li class="specific-task">'+
                  '<span class="category-icon">'+
                  '<i class="fa fa-check-circle" aria-hidden="true"></i></span>'+
                  '<span class="category-label">'+allTask[i].title+'</span>'+
                  '<input type="hidden" value="'+i+'">'+
                  '<span class="category-modal-icon trigger">'+
                  '<i class="fa fa-ellipsis-v">'+
                  '</i><i class="fa fa-ellipsis-v"></i></span></li>';

            taskListContent.innerHTML += specificTaskContent;

            if(count == allTask.length)
                addClickModal();
        }
        else
        {
            count++;
            specificTaskContent = '<li class="specific-task">'+
                  '<span class="category-icon">'+
                  '<i class="fa fa-check-circle" aria-hidden="true"></i></span>'+
                  '<span class="category-label">'+allTask[i].title+'</span>'+
                  '<input type="hidden" value="'+i+'">'+
                  '<span class="category-modal-icon trigger">'+
                  '<i class="fa fa-ellipsis-v">'+
                  '</i><i class="fa fa-ellipsis-v"></i></span></li>';


            taskListContent.innerHTML += specificTaskContent;

            if(count == allTask.length)
                addClickModal();
       
        }
       }
     }

 }

 function addTaskView()
{
    var addTaskContent = '         <div class="grid add-task">'+
            '<button id="add-btn" onclick="addTask()"><label class="add-btn-label" id="addBtnLabel">Add New Task</label></button>'
         '</div>';
    container.innerHTML += addTaskContent;
    taskCategoryView();     
}

function taskCategoryView()
{
    var taskCategoryContent = '<div class="grid task-category">'+
            '<nav>'+
            '<span class="all clicked">'+
            'All'+
            '</span>'+
            '<span class="completed">'+
            'Completed'+   
            '</span>'+
            '<span class="active">'+
            'Active'+
            '</span>'+
            '</nav>'+
         '</div>';
    container.innerHTML += taskCategoryContent;
    taskListView();      
}

function taskListView()
{
    var taskListContent = '<div class="grid task-list">'+
            '<ul id="taskList">'+
            /*
               '<li class="specific-task">'+
                  '<span class="category-icon"><i class="fa fa-check-circle" aria-hidden="true"></i></span>'+
                  '<span class="category-label">Wake up</span>'+
                  '<span class="category-modal-icon trigger"><i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i></span>'+
               '</li>'+
               '<li class="specific-task">'+
                  '<span class="category-icon"><i class="fa fa-circle-o" aria-hidden="true"></i></span>'+
                  '<span class="category-label">Wake up</span>'+
                  '<span class="category-modal-icon trigger"><i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i></span>'+
               '</li>'+
              */ 
            '</ul>'+
         '</div>'
    container.innerHTML += taskListContent;
    showData();     
}

 function modalView()
 {
     var modalContent = '<div class="modal">'+
                  '<div class="modal-content">'+
                  '<div class="edit">'+
                '<i class="fa fa-pencil" aria-hidden="true"></i><span class="edit-label">Edit</span>'+
            '</div>'+
            '<div class="interval">'+
               'interval'+
            '</div>'+
            '<div class="delete" onclick="deleteTask()">'+
               '<i class="fa fa-trash" aria-hidden="true"></i><span class="delete-label">Delete</span>'+
            '</div>'+
        '</div>'+
    '</div>'

    body.innerHTML += modalContent;

    addClickModal();
 } 
  
  function addClickModal()
  {
    var allTrigger = document.getElementsByClassName("trigger"); 

    for(var i = 0;i<allTrigger.length; i++)
    {
    allTrigger[i].addEventListener("click", toggleModal);
    }
    window.addEventListener("click", windowOnClick);

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

        document.onclick = function(e) {
        if(e.target.class = "fa-ellipsis-v")
        {
            console.log(e.target);
            if(e.target.parentNode.parentNode.getElementsByTagName('input')[0])
            currentIndex = e.target.parentNode.parentNode.getElementsByTagName('input')[0].value;
           // var index = e.target.parentNode.parentNode.getElementsByTagName('input')[0].value;
        }
       }
     
     function deleteTask()
     {
        console.log(currentIndex);
        
       /*
         
                 console.log(value);
    var allTask=JSON.parse(localStorage.getItem("allTask"));
 
    if(allTask==null)
        allTask = [];

    var newTask={
        "title": value,
        "status": 0
    };

    allTask.push(newTask);
    localStorage.setItem("allTask",JSON.stringify(allTask));
    showData();


        */

        var allTask = JSON.parse(localStorage.getItem("allTask"));
        allTask.splice(currentIndex,1);
        localStorage.setItem("allTask",JSON.stringify(allTask));
        toggleModal();
        showData();
     }