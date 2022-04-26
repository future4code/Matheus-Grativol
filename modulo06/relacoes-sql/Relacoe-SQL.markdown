CREATE TABLE Rating (
	id INT PRIMARY KEY AUTO_INCREMENT,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)VALUES(
	001,
	"Muito bom!",
	7,
	001
);

INSERT INTO Rating (id, comment, rate, movie_id)VALUES(
	002,
    "Bom!",
    6,
    002
);

INSERT INTO Rating(id, comment, rate, movie_id)VALUES(
	003,
    "Muito top!",
    8,
    004
);

INSERT INTO Rating(id, comment, rate, movie_id)VALUES(
	004,
    "Muito top!",
    8,
    003
);

ALTER TABLE Filmes DROP COLUMN avaliacao;

ALTER TABLE MovieCast CHANGE movie_id movie_id INT;

CREATE TABLE Movie_Cast (
	movie_id INT,
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	1,
    "001"
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	1,
    "002"
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	4,
    "004"
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	4,
    "1650415635813"
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	2,
    "002"
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	2,
    "005"
);

INSERT INTO Movie_Cast(movie_id , actor_id)VALUES(
	3,
    "005"
);

SELECT name, Rating.id, rate FROM Filmes
JOIN Rating ON Filmes.id = Rating.movie_id;

DELETE FROM Actor
WHERE id = "1650415635813";

SELECT * FROM Movie_Cast;
SELECT * FROM Rating;
SELECT * FROM Actor;
SELECT * FROM Filmes;