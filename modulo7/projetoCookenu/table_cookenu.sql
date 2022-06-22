CREATE TABLE Auth_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role VARCHAR(64) NOT NULL
);

SELECT * FROM Auth_users;
