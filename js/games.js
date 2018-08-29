
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDjXuw1w_dveSvhwXUDWmagkWortuH2RqU",
    authDomain: "trystar-2ba0c.firebaseapp.com",
    databaseURL: "https://trystar-2ba0c.firebaseio.com",
    projectId: "trystar-2ba0c",
    storageBucket: "trystar-2ba0c.appspot.com",
    messagingSenderId: "1019390804088"
};
firebase.initializeApp(config);

var db = firebase.database();



$(function () {
    $('#submitBtn').click(function () {
        submitGame();
        console.log("yeet");
    });
});

function submitGame() {
    var user = $('#usersName').val();
    var email = $('#email').val();
    var game = $('#gameName').val();
    var link = $('#gameLink').val();

    if (user == '' || game == '') {
        M.toast({ html: 'Please fill out all required fields.', classes: 'rounded' });
    } else {
        console.log(Date.now())
        db.ref('/submitions').push({
            User: user,
            Email: email,
            GameName: game,
            GameLink: link,
            Time: Date.now()
        });

        console.log("Submitted");
        M.toast({ html: 'Thank you for your submition! I will try to add it to the site!', classes: 'rounded' });

        var user = $('#usersName').val('');
        var email = $('#email').val('');
        var game = $('#gameName').val('');
        var link = $('#gameLink').val('');
    }
}

function addGameCard(Img, Game, Desc, Link){
    $('#gameCont').append('\
        <div class="col m6">\
            <div class="card">\
                <div class="card-image">\
                <img src="'+ Img + '">\
                <span class="card-title">'+Game+'</span>\
                </div>\
                <div class="card-content">\
                <p>'+Desc+'</p>\
                <div style="padding-bottom: 13px;"></div>\
                </div>\
                <div class="card-action">\
                <a href="'+ link + '">Play</a>\
                </div>\
            </div>\
            </div>');
}