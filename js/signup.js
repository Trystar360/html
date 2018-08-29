
var ref = db.ref('users');

    signup.onsubmit = function() {
    console.log("submit");

    var pass = document.getElementById('spass').value;
    var hashpass = Sha256.hash(pass);

    var data = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        username: document.getElementById('susername').value,
        pass: hashpass
    }

    ref.push(data);
    console.log(data);
}

function signup() {
    console.log("submit");

    var pass = document.getElementById('spass').value;
    var hashpass = Sha256.hash(pass);

    var data = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        username: document.getElementById('susername').value,
        pass: hashpass
    }

    ref.push(data);
    console.log(data);
}


