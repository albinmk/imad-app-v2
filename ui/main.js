console.log('Loaded!');
//change value.
var element = document.getElementById('main-text');

element.innerHTML = 'newtext';
var img = document.getElementById('madi');

function moveRight(){

marginLeft = marginLeft +5;
 img.style.marginLeft = marginLeft +'px';  
}
img.onclick = function() {
    
 var interval = setInterval(moveRight, 100);
};