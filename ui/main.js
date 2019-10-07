var submit = document.getElementById('Submit');
submit.onclick = function(){
    //Make a request to the server and send the name
    var request = new XMLHttpRequest();
    //Capture the list of names and render it as a list
    request.onreadystatechange = function(){   
        if(request.readyState === XMLHttpRequest.DONE) {
           //Take some action
           if(request.status === 200){
               alert("Message sent successfully. Will return back to you in 48 hrs");
               }
           else if(request.status === 403){
               alert("Somethong went wrong. You may try again.");
           }else if(request.status === 500){
               alert("Somethong went wrong. You may try again.");
           }
       }
    };
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var subject = document.getElementById('Subject').value;
    var message = document.getElementById('Message').value;
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
    request.open('POST', 'http://aryan574.imad.hasura-app.io/contact', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({name: name, email: email, subject: subject, message: message}));
};