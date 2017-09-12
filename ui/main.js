
//submit username/password to login

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
      // CREATE A REQUEST OBJECT
    
var request = new XMLHttpRequest();

// Capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState == XMLHttpRequest.DONE){
        // take some action
        if(request.status ==200){
         console.log('user logged in');
         alert('Logged in successfully');
        } else if(requset.status===400) {
           alert('Username/password is incorrect');
        } else if(request.status===500){
            alert('server error');
        }
    }
};
// Make the requst
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', 'http://ajaysaf.imad.hasura-app.io/login', true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username: username, password: password}));

};