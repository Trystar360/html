
get();
var s;

function get() {
    db.ref('submitions').orderByValue().on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {

            var key = childSnapshot.key;

            var childData = childSnapshot.val();
            console.log(childData)
            s = childData;

            var User = s.User;
            var Id = key;
            var Email;
            var Name = s.GameName;
            var Link;

            if (s.Email == '')
                Email = " Email Not Given";
            else Email = s.Email;

            if (s.GameLink == '')
                Link = "#"
            else if (s.GameLink.indexOf("http://") < 0)
                Link = "http://" + s.gameLink
            else Link = s.GameLink

            console.log(Link)
            addSubmition(User, Id, Email, Name, Link);
        });
    });
}

$(function () {
    $('#addGameBtn').click(function () {
        addGame();
        console.log("yeet");
    });
});

function addSubmition(user, uid, email, name, link) {
    $('#subs').append('<div class="col s6 m4">\
            <div class="card" id="'+ uid + '">\
              <div class="card-content">\
                <span class="card-title">'+ user + '</span>\
                 <a name="'+ uid + '" onClick="remove(this.name)" class="btn-floating halfway-fab waves-effect waves-light red removeBtn">\
                    <i class="material-icons">remove</i>\
                </a>\
                <p class=" grey-text text-darken-1 ">'+ uid + '</p>\
                <p>'+ email + '</p>\
              </div>\
              <div class="card-action">\
                  <h6><a href="'+ link + '">' + name + '</a></h6>\
              </div>\
            </div>\
          </div>');
    console.log("Done");
}
function remove(id) {
    db.ref('submitions/' + id).remove();
    $('#' + id).remove();
    console.log("Removed: " + id)
}



function addGame() {
    var name = $('#gameName').val();
    var game = $('#gameFile').val();
    var image = document.getElementById('imageFile').files[0];
    var desc = $('#gameDesc').val();


    var fr = new FileReader();
    fr.readAsArrayBuffer(image);
    var file = fr.result;

    var file64 = getBase64Image(image);

    console.log(name);
    console.log(game);
    console.log(image);
    console.log(file64);



    // if (user == '' || game == '') {
    //     M.toast({ html: 'Please fill out all required fields.', classes: 'rounded' });
    // } else {
    //     console.log(Date.now())
    //     db.ref('/submitions').push({
    //         User: user,
    //         Email: email,
    //         GameName: game,
    //         GameLink: link,
    //         Time: Date.now()
    //     });

    //     console.log("Submitted");
    //     M.toast({ html: 'Thank you for your submition! I will try to add it to the site!', classes: 'rounded' });

    //     var user = $('#usersName').val('');
    //     var email = $('#email').val('');
    //     var game = $('#gameName').val('');
    //     var link = $('#gameLink').val('');
    // }
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }