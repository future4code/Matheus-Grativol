SELECT * FROM Actor;
SELECT * FROM Filmes;

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Joaquim"
WHERE id = "003";

UPDATE Actor
SET birth_date = "1980/11/11"
WHERE id = "003";

UPDATE Actor 
SET name = "JULIANA PAES"
WHERE di = "005";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE id = "005";

UPDATE Actor
SET gender = "female"
WHERE id = "002";

UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

UPDATE Actor
SET salary = 500000
WHERE name = "Matheus";

DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id , name FROM Actor 
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender From Actor
GROUP BY gender;

ALTER TABLE Filmes ADD playing_limit_date DATE;

ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

UPDATE Filmes 
SET playing_limit_date = "2022/05/25"
WHERE id = "1";

UPDATE Filmes 
SET playing_limit_date = "2022/03/25"
WHERE id = "2";

DELETE FROM Filmes
WHERE id = "5";

UPDATE Filmes 
SET sinopse = "Filme Deletado"
WHERE id = "5";