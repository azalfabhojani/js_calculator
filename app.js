 //getnumber

 function number(num){
    var result = document.getElementById("input");
    result.value += num;
 }

 //getresult

 function result (){
    var result = document.getElementById("input");
    result.value = eval (result.value);
 }

 //clear result

 function clearResult(){
    var result = document.getElementById("input");
    result.value = "";
 }

 //delete last charater

 function deleteChar(){
    var number = document.getElementById("input");
    var remove = number.value;
    remove = remove.slice(0,-1);  
    number.value = remove ;
 }








