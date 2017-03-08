//console.log('Loaded!');
//change value.
/*var element = document.getElementById('main-text');

element.innerHTML = 'newtext';
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight(){

marginLeft = marginLeft + 5;
 img.style.marginLeft = marginLeft +'px';  
}
img.onclick = function() {
    
 var interval = setInterval(moveRight, 50);
};*/


//counter code

var button = document.getElementById("counter");
//var counter= 0;
 
button.onclick = function() {
    
    //make a request to counter end point

    var request = new XMLHttpRequest();
    //capture the response and store it in a varable.
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE)
        //take some action
        {
          if(request.status === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
            
            
        }
        //not yet done
  
    // process the server response
                           };


    httpRequest.open('GET', 'http://albinmk.imad.hasura-app.io/counter', true);
    httpRequest.send(null);
    
    //counter = counter + 1;
    
    //var span= document.getElementById("count");
    
    //span.innerHTML=counter.toString();
};






















/*index.html former<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        
        <div class="container"> 
        <div class="center">
            
 <img src="https://i.gadgets360cdn.com/large/moto_g4_red_1486967584004_1487000868858.jpg?output-quality=80&output-format=jpg" class="img-medium"/>
            
           <img id="madi" src="/ui/madi.png" class="img-medium"/>
        </div>
        <br>
        <div id="main-text" class="center text-big bold">
            <h4>Hi! I am your webapp and  I have made a change.</h4>
			
        </div>
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>*/