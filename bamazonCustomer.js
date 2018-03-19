var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    queryProducts();
});

function queryProducts() {
    console.log("Items for Sale: \n");
    connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + "\nProduct Name: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice: $" + res[i].price + "\nQuantity in Stock: " + res[i].stock_quantity);
            console.log("-----------------------------------");
        }
       buyItem();
    });
};

function buyItem() {
    connection.query("SELECT * FROM products", function(err, results) {
    
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What item would you like to buy? (Enter Item ID)"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to buy?"
            }
        ])
        .then(function(answer) {
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(answer.item)) {
                  chosenItem = results[i];
                }
              }
            //console.log(chosenItem);

        if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
            connection.query(
                "UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: (chosenItem.stock_quantity - parseInt(answer.quantity))
                },
                {
                    item_id: chosenItem.item_id
                }
            ],
            function(error) {
                if (error) throw err;
                console.log("-----------------------------------");
                console.log("Items bought successfully!");
                console.log("-----------------------------------");
                console.log("Purchase Total: $" + (parseInt(answer.quantity)*chosenItem.price).toFixed(2));
                console.log("-----------------------------------");
                queryProducts();
            }
            );
        }
        else{
            console.log("Not enough in stock. Please enter new amount you wish to buy");
            console.log("-----------------------------------");
            queryProducts();
        }
    });
});
}
