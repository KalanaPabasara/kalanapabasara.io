function validate()
{
    var name=document.getElementById('name').value;
	var email=document.getElementById('email').value;
	var subject=document.getElementById('subject').value;
	var message=document.getElementById('message').value;

	//if there are missing fields
	if(name=="" || email=="" || subject=="" || message==""){
		alert("Please fill all the fields...")
		return false;
	}
	
	//validating name
	if(name==""){
		alert("Please enter the name to continue")
		return false;
	}
	var letters = /^[A-Za-z\s]+$/; //letters in the alphabet and spaces
    if(!(name.match(letters))){
    alert("Name should only contain characters...")
    return false;
	}

    //validating email
	var atPosition = email.indexOf("@");
	var dotPosition = email.lastIndexOf(".");
    if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=x.length){    //https://www.javatpoint.com/javascript-form-validation
		alert("Not a valid email")
        return false;
    }	
	return(true) //if everything is valid returning a true value to proceed to next page
}