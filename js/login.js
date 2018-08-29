var uid;
var pass;
var activeUser;
var hashpass;

    login.onsubmit = function() {
        uid = document.getElementById('uid').value;
        pass = document.getElementById('pass').value;

        console.log("test");
        console.log(uid);
        console.log(pass);
        hashpass = Sha256.hash(pass);
        ref.on('value',gotData,errData);
        //uid = admnin;
        
    }
    
    
    
    function login() {
        uid = document.getElementById('uid').value;
        pass = document.getElementById('pass').value;

        console.log("test");
        console.log(uid);
        console.log(pass);
        hashpass = Sha256.hash(pass);
        ref.on('value',gotData,errData);
        //uid = admnin;
        
    }

     
    
    //uid = "admin";
    
    

    

    function gotData(data){
        console.log("data: ");
        console.log(data.val());
        var users = data.val();
        var keys = Object.keys(users);
        console.log("keys");
        console.log(keys);

        var usernameValid = false;

        for(var i = 0; i < keys.length; i++){
            var k = keys[i];
            var name = users[k].username;
            console.log("user: " + name);

            if(uid === name){
                usernameValid = true;
                activeUser = users[k];
            }
        }
        if(usernameValid){
            if(hashpass === activeUser.pass ){
                
                console.log("LoggedIn");
                sessionStorage.setItem("log", "true");
                window.location = "index.html";
                console.log(loggedin);
                
                
            }else{
                er("pass");
            }

        }else{
            er("username");
        }

    }

    function er(e){

    }

    function errData(err){
        console.log("Error!");
        console.log(err);
    }