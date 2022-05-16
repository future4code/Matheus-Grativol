CREATE TABLE labecommerce_users(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE labecommerce_products(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255),
    price FLOAT,
    image_url VARCHAR(255)
);

CREATE TABLE labecommerce_purchases(
	id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    product_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
    FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
    quantidade INT,
    total_price FLOAT
);

SELECT * from labecommerce_users;

INSERT INTO labecommerce_users(id, name, email, password)
VALUES(
	"001",
    "Rodri",
    "rodri@hotmail.com",
    "rodri123"
);

SELECT * FROM labecommerce_products;

INSERT INTO labecommerce_purchases(id, user_id, product_id, quantidade, total_price)
VALUES(
	"002",
    "001",
    "17b96103-b456-4438-8fa9-61d47d0bde0d",
    3,
    27
)