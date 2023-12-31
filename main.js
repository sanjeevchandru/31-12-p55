document.write("18. to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  "+"<br>");
function test18(a,b){
    if(a==50 || b==50 || a+b==50){
        return true;
    }
    else{
        return false;
    }
}
document.write("the numbers are :20,50,"+"&nbsp &nbsp"+" Ans:"+test18(20,50)+"<br>");
document.write("the numbers are :50,50,"+"&nbsp &nbsp"+" Ans:"+test18(50,50)+"<br>");
document.write("the numbers are :20,30,"+"&nbsp &nbsp"+" Ans:"+test18(20,30)+"<br>");
document.write("the numbers are :20,40,"+"&nbsp &nbsp"+" Ans:"+test18(20,40)+"<br><br>");