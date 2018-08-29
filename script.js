
if ( sessionStorage.log !== 'undefined') {
    console.log(sessionStorage.log);
    console.log("defined");
}else{
    sessionStorage.setItem("log", "false");
    
}
console.log(sessionStorage.log);




if(sessionStorage.log == "true"){
   //console.log(loggedin);
    document.getElementById('notloggedin').style.display = 'none';
    document.getElementById('loggedin').style.display = 'block';
}else{
    //console.log(loggedin);
    document.getElementById('notloggedin').style.display = 'block';
    document.getElementById('loggedin').style.display = 'none';
}