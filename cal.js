"use strict"
var result=document.getElementById("result");
var ac=document.getElementById("ac");
ac.addEventListener("click",function(){
    result.innerText="0";
});


var divide = document.getElementById("divide");
divide.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"/";
});



var seven=document.getElementById("seven");
seven.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"7";
});



var eight=document.getElementById("eight");
eight.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"8";
});


var nine=document.getElementById("nine");
nine.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"9";
});

var star=document.getElementById("star");
star.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"*";
});

var four=document.getElementById("four");
four.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"4";
});

var five=document.getElementById("five");
five.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"5";
});


var six=document.getElementById("six");
six.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"6";
});

var minus=document.getElementById("minus");
minus.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"-";
});


var one=document.getElementById("one");
one.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"1";
});

var two=document.getElementById("two");
two.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"2";
});

var three=document.getElementById("three");
three.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"3";
});

var plus=document.getElementById("plus");
plus.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"+";
});


var zero=document.getElementById("zero");
zero.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+"0";
});

var dot=document.getElementById("dot");
dot.addEventListener("click",function(){
    if(result.innerText=="Error")
    {
        result.innerText=" ";
    }
    if(result.innerText=="0")
    {
        result.innerText=" ";
    }
    result.innerText=result.innerText+".";
});

var equal=document.getElementById("equal");
equal.addEventListener("click",function(){
    result.innerText=eval(result.innerText);
});

var delete_last_character=document.getElementById("delete_last_characer");
delete_last_character.addEventListener("click",function(){
    result.innerText = result.innerText.slice(0, -1);
    if(result.innerText.length==0)
    {
        result.innerText=result.innerText+"0";  
    }
    return ;
})