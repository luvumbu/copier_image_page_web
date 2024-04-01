
var plus_bas = 250 ; 
var plus_plus = 12000 ; 

let tableau = [""];

var img = document.getElementsByTagName("img") ; 
const myInterval = setInterval(myTimer, 1000);

function myTimer() {





        
  const date = new Date();
  console.log(plus_bas) ; 

console.log(date.toLocaleTimeString());
  if(plus_bas>3000){
    clearInterval(myInterval);
  }
  else{
    setInterval(function() {


       for(var x = 0 ; x <img.length ; x ++) {
     

        if( tableau.includes(img[x].src)){
            
        }
        else {
            console.log(img[x].src) ; 
            tableau.push(img[x].src);

        }
       }


   
        window.scrollTo(0, plus_bas);
        
        plus_bas = plus_bas + plus_plus;
        
        }, 1000);

  }
}

 

