window.addEventListener('load',()=>{
	
	const params = (new URL (document.location)).searchParams;
	const name = params.get('name');
	const email= params.get('email');
	const subject= params.get('subject');
	const message= params.get('message');
	
	document.getElementById('name-preview').innerHTML = name;
	document.getElementById('email-preview').innerHTML = email;
	document.getElementById('subject-preview').innerHTML = subject;
	document.getElementById('message-preview').innerHTML = message;
})

function send() //fuction to intiate with 'send' button - sending email
{
    window.location.href="mailto:kavindu20210886@iit.ac.lk";
}

function edit()//function to initiate with 'edit' button - going back
{
	try{
		if(true){
			window.history.go(-1);
		}
	}catch(e){
		window.location.href="queryForm.html";
	}
}