 "use strict"

 var body = document.getElementsByTagName('body')[0];
 var modal ;
 init();

 function init()
 {
    modalView();
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
            '<div class="delete">'+
               '<i class="fa fa-trash" aria-hidden="true"></i><span class="delete-label">Delete</span>'+
            '</div>'+
        '</div>'+
    '</div>'

    body.innerHTML += modalContent;
    console.log(body);

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
        console.log(modal);
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
