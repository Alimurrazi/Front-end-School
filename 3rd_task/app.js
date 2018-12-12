 "use strict"

   var body = document.getElementsByTagName('body')[0];
   var modal ;
   var container;
   var currentIndex;
   var isEdit = false;

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
    var typeTaskContent = '<div class="grid type-task">'+
            '<input type="text" name="" placeholder="type task" class="type-new-task id="typeNewTask">'+
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
    console.log(isEdit);
    if (isEdit == true)
    {
      updateTask();
    }
    
    else
    {
    var value = document.getElementsByTagName('input')[0].value;
    if(value!="")
    {
    console.log(value);
    var allTask = JSON.parse(localStorage.getItem("allTask"));
 
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

 }

function updateTask()
{
/*
        console.log("kkkk");
  var contactId=document.getElementById("update-indexNumber").value;
  var contacts=JSON.parse(localStorage.getItem("allContactLS"));
    contacts[contactId].firstName=document.getElementById("update-firstName").value;
    contacts[contactId].lastName=document.getElementById("update-lastName").value;
    contacts[contactId].phoneNumber=document.getElementById("update-phoneNumber").value;
    localStorage.setItem("allContactLS",JSON.stringify(contacts));
*/
        console.log(currentIndex);
        var allTask = JSON.parse(localStorage.getItem("allTask"));
        allTask[currentIndex].title = document.getElementsByTagName('input')[0].value;
        localStorage.setItem("allTask",JSON.stringify(allTask));
        isEdit = false;
        document.getElementsByTagName('input')[0].value = "";
        var addBtnLabel = document.getElementById('addBtnLabel');
        addBtnLabel.innerHTML = "Add New Task";

        showData();
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
            specificTaskContent = '<li class="specific-task" id="'+i+'">'+
                  '<span class="category-icon" onclick="changeState("'+i+')">'+
                  '<i class="fa fa-circle-o" aria-hidden="true"></i></span>'+
                  '<span class="category-label">'+allTask[i].title+'</span>'+
                 // '<span class="category-modal-icon trigger">'+
                  '<span class="category-icon" onclick="changeState("'+i+')">'+
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
                  '<span class="category-icon" onclick="changeState("'+i+')">'+
                  '<i class="fa fa-check-circle" aria-hidden="true"></i></span>'+
                  '<span class="category-label">'+allTask[i].title+'</span>'+
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
            '<button id="add-btn" onclick="addTask()">Add New Task</button>'
         '</div>';
    container.innerHTML += addTaskContent;
    taskCategoryView();     
}

function taskCategoryView()
{
    var taskCategoryContent = '<div class="grid task-category">'+
            '<nav>'+
            '<span class="all" onclick="showData()" >'+
            'All'+
            '</span>'+
            '<span class="completed" onclick="completed()" >'+
            'Completed'+   
            '</span>'+
            '<span class="active" onclick="active()" >'+
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
                  '<div class="edit" onclick="editTask()">'+
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
            var value = e.target.parentNode.parentNode.getElementsByTagName('input')[0];
            if(value)
            {
              value = value.value;
              if(isNaN(value)===false)
                currentIndex = value;
            }
        }
       }
     
     function deleteTask()
     {
        console.log(currentIndex);
        var allTask = JSON.parse(localStorage.getItem("allTask"));
        allTask.splice(currentIndex,1);
        localStorage.setItem("allTask",JSON.stringify(allTask));
        toggleModal();
        showData();
     }

     function editTask()
     {
        console.log(currentIndex);
        var allTask = JSON.parse(localStorage.getItem("allTask"));
        var taskValue = allTask[currentIndex];
        console.log(taskValue);
        document.getElementsByTagName('input')[0].value = taskValue.title;
        isEdit = true;
        toggleModal();
     }

     function changeState()
     {
        currentIndex = event.srcElement.parentNode.id;
        console.log(currentIndex);
        var allTask = JSON.parse(localStorage.getItem("allTask"));
        if(allTask[currentIndex].status==0)
          allTask[currentIndex].status=1;
        else
          allTask[currentIndex].status=0;
        localStorage.setItem("allTask",JSON.stringify(allTask));

        showData();
     }

/*
     function completed()
     {
     
      var completed = document.getElementsByClassName('completed')[0];
      completed.classList.add("clicked");

        var all = document.getElementsByClassName('all')[0];
        var check = all.classList.contains("clicked");
        if(check)
        {
          all.classList.remove("clicked");
          showCompletedTask();
        }
        var active = document.getElementsByClassName('active')[0];
        var check = active.classList.contains("clicked");
        if(check)
        {

        }

     }*/

     function completed()
     {
       
     var allTask = JSON.parse(localStorage.getItem("allTask"));
     var taskListContent = document.getElementById("taskList");
     taskListContent.innerHTML = "";
     console.log(taskListContent);

     if(allTask!=null)
     {
     for (var i = 0; i < allTask.length; i++) {
        var specificTaskContent;
        if(allTask[i].status == 1)
        {
            specificTaskContent = '<li class="specific-task">'+
                  '<span class="category-icon"'+'id="'+i+'"onclick="changeState()">'+
                  '<i class="fa fa-circle-o" aria-hidden="true"></i></span>'+
                  '<span class="category-label">'+allTask[i].title+'</span>'+
                  '<input type="hidden" value="'+i+'">'+
                  '<span class="category-modal-icon trigger">'+
                  '<i class="fa fa-ellipsis-v">'+
                  '</i><i class="fa fa-ellipsis-v"></i></span></li>';

            taskListContent.innerHTML += specificTaskContent;
        }
        if(i==allTask.length-1)
        addClickModal();
       }
     }
     }

      function active()
     {
       
     var allTask = JSON.parse(localStorage.getItem("allTask"));
     var taskListContent = document.getElementById("taskList");
     taskListContent.innerHTML = "";
     console.log(taskListContent);

     if(allTask!=null)
     {
     for (var i = 0; i < allTask.length; i++) {
        var specificTaskContent;
        if(allTask[i].status == 0)
        {
            specificTaskContent = '<li class="specific-task">'+
                  '<span class="category-icon"'+'id="'+i+'"onclick="changeState()">'+
                  '<i class="fa fa-check-circle" aria-hidden="true"></i></span>'+
                  '<span class="category-label">'+allTask[i].title+'</span>'+
                  '<input type="hidden" value="'+i+'">'+
                  '<span class="category-modal-icon trigger">'+
                  '<i class="fa fa-ellipsis-v">'+
                  '</i><i class="fa fa-ellipsis-v"></i></span></li>';

            taskListContent.innerHTML += specificTaskContent;
        }
        if(i==allTask.length-1)
        addClickModal();
       }
     }
     }