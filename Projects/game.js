var theList=["rock","scissor","paper"]
var sci=["paper","rock"]
var pap=["rock","scissor"]
var roc=["scissor","paper"]
var randomVar=0
var usr=0;
var comp=0;
//this will be the user input handler



for (i=0;i<3;i++){
    document.querySelectorAll("button")[i].addEventListener("click",
        function(){

            randomVar=Math.floor(Math.random()*3);
            var userChoice=this.getAttribute("class");
            document.querySelector("h3").innerHTML=theList[randomVar];
            if (userChoice=="scissor"){
                if(theList[randomVar]==sci[0]){
                    document.querySelector("h1").innerHTML="User won!!" ;
                    usr++;
                }
                else if (theList[randomVar]==sci[1]){
                    document.querySelector("h1").innerHTML="Computerr won!!" ;
                    comp++;
                }
                else{
                    document.querySelector("h1").innerHTML="Draw !!" ;

                }
            }
                 
            else if (userChoice=="rock"){
                if(theList[randomVar]==roc[0]){
                    document.querySelector("h1").innerHTML="User won!!" ;
                    usr++;
                }
                else if (theList[randomVar]==roc[1]){
                    document.querySelector("h1").innerHTML="Computerr won!!" ;
                    comp++;
                }
                else{
                    document.querySelector("h1").innerHTML="Draw !!" ;
                }
            }
            else if(userChoice=="paper"){
                if(theList[randomVar]==pap[0]){
                    document.querySelector("h1").innerHTML="User won!!" ;
                    usr++;
                }
                else if(theList[randomVar]==pap[1]){
                    document.querySelector("h1").innerHTML="Computerr won!!" ;
                    comp++;
                }
                else{
                     document.querySelector("h1").innerHTML="Draw !!" ;   
                }
            }
            document.querySelector(".score").innerHTML="Score: User-"+usr+" X Computer-"+comp;
    })};

    


