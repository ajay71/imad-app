//counter code
var button = document.getElementById('counter');

button.onclick=function(){

    // CREATE A REQUEST OBJECT
    
var request = new XMLHttpRequest();

// Capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState == XMLHttpRequest.DONE){
        // take some action
        if(request.status ==200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            
        }
    }
    //not done yet
};

// Make the requst
request.open('GET', 'http://ajaysaf.imad.hasura-app.io/counter', true);
request.send(null);

};

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
      // CREATE A REQUEST OBJECT
    
var request = new XMLHttpRequest();

// Capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState == XMLHttpRequest.DONE){
        // take some action
        if(request.status ==200){
          
          
          
          //  var counter = request.responseText;
        //    var span = document.getElementById('count'//);
        //    span.innerHTML = counter.toString();
            
         //make a request to the server and send the name
    //Capture list of names and render it as a list
    var names= request.responseText;
    names =JSON.parse(names);
    var list='';
    for (var i=0;i<names.length; i++) {
        list  += '<li>'+ names[i]+'</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
            
        }
    }
    //not done yet
    
};

 //submit name
var nameInput=document.getElementById('name');
var name =nameInput.value;
// Make the requst
    request.open('GET', 'http://ajaysaf.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null);



   
    
    
    
};
