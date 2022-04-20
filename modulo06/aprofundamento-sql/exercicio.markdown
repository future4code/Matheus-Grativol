USE `419859-matheus-souza`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE(
	"002",
    "Glória Pires",
    "120000",
    "1963-08-23",
    "fame"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE(
	"002",
    "Glória Pires",
    "120000",
    "1963-08-23",
    "fame"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Matheus",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name, gender FROM Actor 
where gender != "male";

SELECT name, salary FROM Actor
WHERE name = "Tony Ramos";

SELECT * FROM Actor
WHERE gender = "invalid";

SELECT id, name, salary FROM Actor
WHERE salary < 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE(name NOT LIKE"A%") AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Filmes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    dataLancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

INSERT INTO Filmes(id, name, sinopse, dataLancamento, avaliacao)
VALUES(
	001,
	"Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);

INSERT INTO Filmes(name, sinopse, dataLancamento, avaliacao)
VALUES(
	"Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

INSERT INTO Filmes(name, sinopse, dataLancamento, avaliacao)
VALUES(
	"Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

INSERT INTO Filmes(name, sinopse, dataLancamento, avaliacao)
VALUES(
	"Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

SELECT * FROM Filmes;

SELECT id, name, avaliacao FROM Filmes
WHERE id = 2;

SELECT * FROM Filmes 
WHERE name = "Se Eu Fosse Você";

SELECT id, name, sinopse FROM Filmes
WHERE avaliacao > 7;

SELECT * FROM Filmes
WHERE name LIKE "%FLor%";

SELECT * FROM Filmes
WHERE name LIKE "%procura%" OR sinopse LIKE "%procura%";

SELECT * FROM Filmes
WHERE dataLancamento < "2020-05-04";

SELECT * FROM Filmes
WHERE dataLancamento < "2020-05-04" AND (name LIKE "%procura%" OR sinopse LIKE "%procura%") AND avaliacao > 7;