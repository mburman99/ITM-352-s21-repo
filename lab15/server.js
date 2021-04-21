// this is my server 
var express = require('express');
var app = express();
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));
var qs = require('qs');
var fs = require('fs');
const { response, request } = require('express');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// play with cookies
app.get('/set_cookie', function (req, res, next){
    // console.log(req.cookies);
    let my_name = 'Max Burman';
    res.cookie('my_name', my_name);
    res.send(`Cookie for ${my_name} sent`);
    next();
});

// user_data = require('./user_data.json');
// read user data base
var user_data_file = './user_data.json';
if (fs.existsSync(user_data_file)) {
    var file_stats = fs.statSync(user_data_file);
    console.log(`${user_data_file} has ${file_stats["size"]} characters in it`);
    var user_data = JSON.parse(fs.readFileSync('./user_data.json', 'utf-8'));
} else {
    console.log(`${user_data_file} does not exist!`)
}

app.all('*', function (req, res, next) {
    console.log(req.method, req.path);
    next();
});

app.post('/process_register', function (req, res) {
    // add a new user to the database
    username = req.body.username; // check that the username is not taken, if it is make them sart over
    var errors = {};
    if (typeof user_data[username] != 'undefined') { // check that the new username is not already taken
        errors["username_error"] = "username is taken";
    }
    // check if password and repeat password match
    if (req.body.password != req.body['password-repeat']) {
        errors["password_match_error"] = "Password does not match";
    }
    if (Object.keys(errors).length > 0) {
        res.redirect("./register.html?" + qs.stringify(req.query) + "&" + qs.stringify(errors));
    } else {
        // all good add to database
        user_data[username] = {};
        user_data[username].password = req.body["password"]; // check that the password mathces the re-entered password
        user_data[username].email = req.body["email"];
        user_data[username].name = req.body["fullname"];
        // save the new user in to the database by writing it in to the database file
        fs.writeFileSync(user_data_file, JSON.stringify(user_data));
        req.query.email = req.body.email;
        req.query.username = req.body.username;
        res.redirect("./invoice.html?" + qs.stringify(req.query));

    }
    request.query["register_error"] = error;
    response.redirect('register.html?' + qs.stringify(request.query));
});

console.log(user_data);


// this processes the login form
app.post('/process_login', function (request, response, next) {
    // check login and password match database
    console.log(request.body);
    let username_entered = request.body.username;
    let password_entered = request.body.password;
    if (typeof user_data[username_entered] != 'undefined') { // Here i am checking if what the usename entered fits with the use_data.json and seeing if there is a match to the username in the database.
        if (user_data[username_entered]['password'] == password_entered) {
            // all good send to invoice with username
            request.query["username"] = username_entered;
            request.query["email"] = user_data[username_entered]['email'];
            response.redirect('invoice.html?' + qs.stringify(request.query)); // if the login is successful this takes you to the invoice with the quantities that you have selected
        } else {
            var error = "password_error";
        }
    } else {
        var error = "username_error";
    }
    request.query["login_error"] = error;
    response.redirect('login_page.html?' + qs.stringify(request.query));
});

// this processes the login form
app.post('/process_register', function (request, response, next) {
    response.send(request.body)
});

app.use(express.static('./public')); // loading files from my public directory

var listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) }); // making the server lsiten to 8080




