var sum1=0,sum2=0;

function subAdd(st,bxString,priceSt){
    var result=document.getElementById(bxString).value;
    result=parseFloat(result);
    if(st == "plus"||st == "plus1"){
        result=result+1;
    }
    else{
        result=result-1;
    }
    document.getElementById(bxString).value=result;
    if(bxString == "box"){
        totalPrice=1219*document.getElementById(bxString).value;
    }
    else{
        totalPrice=59*document.getElementById(bxString).value;
    }
    
    document.getElementById(priceSt).innerHTML=totalPrice; 
    var pr1 = document.getElementById("price").innerHTML
    sum1 = pr1;
    var pr2 = document.getElementById("price1").innerHTML
    sum2 = pr2;
    var res = parseFloat(sum1)+parseFloat(sum2);
    var tx = (10*res)/100;
    var totalValue = res + tx;
    document.getElementById('subTotalPrice').innerHTML = res;
    document.getElementById('tax').innerHTML = tx;
    document.getElementById('totalPrice').innerHTML = totalValue;
}


document.getElementById("minus").addEventListener("click",function(){ 
    subAdd("minus","box","price");
})

document.getElementById("plus").addEventListener("click",function(){
    subAdd("plus","box","price");
})

document.getElementById("minus1").addEventListener("click",function(){
    subAdd("minus1","box1","price1");
})

document.getElementById("plus1").addEventListener("click",function(){
    subAdd("plus1","box1","price1");
})

document.getElementById("cross").addEventListener("click",function(){
document.getElementById("myDIV").style.display = "none";
})

document.getElementById("cross1").addEventListener("click",function(){
    document.getElementById("myDIV1").style.display = "none";
})


