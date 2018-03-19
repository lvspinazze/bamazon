DROP DATABASE IF EXISTS bamazon;
 
CREATE DATABASE bamazon;
 
USE bamazon;
 
CREATE TABLE products(
 	item_id INT NOT NULL AUTO_INCREMENT,
 	product_name VARCHAR(45) NOT NULL,
 	department_name VARCHAR(45) NOT NULL,
 	price DECIMAL(10,2),
 	stock_quantity INTEGER(25),
 	PRIMARY KEY (item_id)
)
 
SELECT * FROM products
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 10 case", "Electronics", 19.99, 4);
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tennis Balls", "Sports & Games", 8.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sriracha", "Food", 4.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Reverse Tanning Oil", "Health & Beauty", 49.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mouse Traps", "Home & Kitchen", 900.00, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Muster", "Health & Beauty", 34.31, 6289);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grease DVD", "Movies & TV", 12.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lanyards", "Accessories", 3.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Credit Cards", "Personal Finance", 1100.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amstel Light", "Food & Drink", 9.96, 4000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Desk Lamp", "Home & Kitchen", 19.99, 400);