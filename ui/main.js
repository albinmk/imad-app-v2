console.log('Loaded!');
//change value.
var element = document.getElementById('main-text');

element.innerHTML = 'newtext';
var img = document.getElementById('madi');

img.onclick = function() {
    
  img.style.marginLeft = "100px";  
};