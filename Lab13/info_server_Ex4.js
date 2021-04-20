var express = require('express');
var app = express();
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));

var products = require('./product_data.json');

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' with query' + JSON.stringify(request.query));
    next();
});

app.get("/product_data.js", function (request, response, next) {
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});


app.get('/test', function (request, response, next){
    response.send('I got a request for /test')
});


app.post('/display_purchase', function (request, response, next){
    process_quantity_form(request.body, response);
});

app.use(express.static('./public'));

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here

function isNonNegInt(string_check, returnErrors = false) {
    if(string_check=='') string_check=0;
    var errors = []; // assume no errors at first
    if(Number(string_check) != string_check) errors.push('Not a number!'); // Check if string is a number value
    if(string_check < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(string_check) != string_check) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors: (errors.length==0);
}

function process_quantity_form (post_data, request, response) {
    if (post_data['quantity_textbok'] ) {
        the_qty = post_data['quantity_textbok'];
        let product_num = post_data['product_select'];
        let model = products[product_num]['model'];
        let model_price = products[product_num]['price'];
        if(isNonNegInt(the_qty)){
            response.send(`<h2>Thank you for purchasing ${the_qty} ${model}. Your total is \$${the_qty * model_price}!</h2>`);
            return;
        } else {
            response.redirect('./order_page.html?quantity_textbok='+ the_qty);
            return;
        }
       }
} 