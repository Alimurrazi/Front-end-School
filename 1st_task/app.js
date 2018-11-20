var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
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
      coloumn3.innerHTML="<button class='btn' onClick='updateData()' id="+i+">Update</button>";
      coloumn4.innerHTML="<button>Delete</button>";
     }
     mainContent.insertAdjacentHTML('beforeend', '</table>');

}

function updateData()
{
   console.log(event.srcElement.parentNode);
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
