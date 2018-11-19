var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

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
    console.log(allContact);
 
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
    showData();
}


function showData()
{
	
}


trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
