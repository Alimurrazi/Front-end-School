var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

var deleteContactId;

showData();

function toggleModal() {
    modal.classList.toggle("show-modal");
}
 
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function submitData()
{
	toggleModal();
	console.log("why buddy");
  //  debugger;

    var allContact=JSON.parse(localStorage.getItem("allContactLS"));
   // console.log(allContact);
 
    if(allContact==null)
    	allContact=[];

    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var phoneNumber=document.getElementById("phoneNumber").value;
    var contact={
    	"firstName": firstName,
    	"lastName": lastName,
    	"phoneNumber": phoneNumber
    };

    allContact.push(contact);
    localStorage.setItem("allContactLS",JSON.stringify(allContact));
    showData(allContact);
}

function showData()
{
     var contacts=JSON.parse(localStorage.getItem("allContactLS"));

     if(contacts!=null)
     {
       
     var mainContent=document.getElementById("main-content");
     mainContent.innerHTML="";
     
     mainContent.innerHTML="<table id='table'><tr><th>Name</th><th>Phone Number</th></tr>"

     for (var i =0; i < contacts.length; i++) {
      var table=document.getElementById("table");
      var row=table.insertRow(i+1);
      var coloumn1=row.insertCell(0);
      var coloumn2=row.insertCell(1);
      var coloumn3=row.insertCell(2);
      var coloumn4=row.insertCell(3);
      coloumn1.innerHTML=contacts[i].firstName+" "+contacts[i].lastName;
      coloumn2.innerHTML=contacts[i].phoneNumber;
      coloumn3.innerHTML="<button class='update-trigger' onClick='updateData()' id="+i+">Update</button>";
      coloumn3.addEventListener("click",updateToggleModal);
      coloumn4.innerHTML="<button class='delete-trigger' onClick='FindDeleteContactId()' id='delete"+i+"'>Delete</button>";
      coloumn4.addEventListener("click",deleteToggleModal);
     }
     mainContent.insertAdjacentHTML('beforeend', '</table>');

     }
}

   var updateModal = document.querySelector(".update-modal");
   var updateCloseButton = document.querySelector(".update-close-button"); 
   updateCloseButton.addEventListener("click", updateToggleModal);
   window.addEventListener("click", updateWindowOnClick);


function updateData()
{
   var contactId=event.srcElement.id;
   var contact=JSON.parse(localStorage.getItem("allContactLS"));
   contact=contact[contactId];
   console.log(contact);
   

   document.getElementById("update-firstName").value=contact.firstName;
   document.getElementById("update-lastName").value=contact.lastName;
   document.getElementById("update-phoneNumber").value=contact.phoneNumber;
   document.getElementById("update-indexNumber").value=contactId;
}

function saveUpdateData()
{
	console.log("kkkk");
	var contactId=document.getElementById("update-indexNumber").value;
	var contacts=JSON.parse(localStorage.getItem("allContactLS"));
    contacts[contactId].firstName=document.getElementById("update-firstName").value;
    contacts[contactId].lastName=document.getElementById("update-lastName").value;
    contacts[contactId].phoneNumber=document.getElementById("update-phoneNumber").value;
    localStorage.setItem("allContactLS",JSON.stringify(contacts));
    updateToggleModal();
    showData();
}

function updateToggleModal() {
    updateModal.classList.toggle("update-show-modal");
}
 
function updateWindowOnClick(event) {
    if (event.target === updateModal) {
        updateToggleModal();
    }
}

   var deleteModal = document.querySelector(".delete-modal");
   var deleteCloseButton = document.querySelector(".delete-no"); 
   deleteCloseButton.addEventListener("click", deleteToggleModal);
   window.addEventListener("click", deleteWindowOnClick);

function FindDeleteContactId()
{
	deleteContactId=event.srcElement.id;
	deleteContactId=deleteContactId.replace("delete","");
	deleteContactId=parseInt(deleteContactId);
	console.log(deleteContactId);
}

function deleteData()
{
	var contacts=JSON.parse(localStorage.getItem("allContactLS"));
    contacts.splice(deleteContactId,1);
    localStorage.setItem("allContactLS",JSON.stringify(contacts));
    deleteToggleModal();
    showData();        
}

function deleteToggleModal() {
    deleteModal.classList.toggle("delete-show-modal");
}
 
function deleteWindowOnClick(event) {
    if (event.target === deleteModal) {
        deleteToggleModal();
    }
}