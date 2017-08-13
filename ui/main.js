console.log('Loaded!');
// change the text of the main-text div
var el = document.getElementById('main-text');

el.innerHTML = 'Akshat Soft';

// move the image
var img = document.getElementById('madi');

var marginLeft =0;
function moveright () {
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft +'px';
    
}

img.onclick = function() {
    var interval = setInterval(moveright,2);
    
    
};