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
request.open('GET', 'ajaysaf.imad.hasura-app.io/counter', true);
request.sent(null);

};