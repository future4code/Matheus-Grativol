SELECT * FROM User;

SET SQL_SAFE_UPDATES = 0;

UPDATE User
SET name = "Astro",
nickName = "astro"
WHERE id = "c46b3c90-89ae-468d-8f7b-9674469051d1";

CREATE TABLE Task_user (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    limitDate DATE NOT NULL,
    creatorUserId VARCHAR(255),
    FOREIGN KEY (creatorUserId) REFERENCES User(id)
);

SELECT * FROM Task_user;

DELETE FROM Tasks