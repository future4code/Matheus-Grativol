CREATE TABLE Auth_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role VARCHAR(64) NOT NULL
);

SELECT * FROM Auth_users;


CREATE TABLE Cookenu_post (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR(255),
	description VARCHAR(255),
	creation_data VARCHAR(255),
	user_id VARCHAR(255),
	FOREIGN KEY (user_id) REFERENCES Auth_users(id)
);

DROP TABLE Cookenu_post;

SELECT * FROM Cookenu_post
