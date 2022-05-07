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

SELECT * from labecommerce_users