CREATE DATABASE music;

USE music;
CREATE TABLE lista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    ano INT NOT NULL,
    genero VARCHAR(100) NOT NULL,
    cantor VARCHAR(255) NOT NULL,
    dataadd TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from lista;
DESCRIBE lista;

-- Inserindo músicas aleatórias no banco de dados 'music'
USE music;

INSERT INTO lista (nome, ano, genero, cantor, dataadd) VALUES
('Blinding Lights', 2019, 'Pop', 'The Weeknd', '2023-05-13'),
('Shape of You', 2017, 'Pop', 'Ed Sheeran', '2023-07-22'),
('Someone Like You', 2011, 'Pop', 'Adele', '2023-09-04'),
('Bohemian Rhapsody', 1975, 'Rock', 'Queen', '2023-01-15'),
('Rolling in the Deep', 2010, 'Pop', 'Adele', '2023-06-17'),
('Bad Guy', 2019, 'Pop', 'Billie Eilish', '2023-02-10'),
('Smells Like Teen Spirit', 1991, 'Rock', 'Nirvana', '2023-08-20'),
('Imagine', 1971, 'Rock', 'John Lennon', '2023-03-25'),
('Uptown Funk', 2014, 'Funk', 'Mark Ronson feat. Bruno Mars', '2023-11-03'),
('Shallow', 2018, 'Pop', 'Lady Gaga & Bradley Cooper', '2023-04-11'),
('Despacito', 2017, 'Reggaeton', 'Luis Fonsi feat. Daddy Yankee', '2023-05-29'),
('I Will Always Love You', 1992, 'Pop', 'Whitney Houston', '2023-06-05'),
('Wake Me Up', 2013, 'EDM', 'Avicii', '2023-02-18'),
('Levitating', 2020, 'Pop', 'Dua Lipa', '2023-10-04'),
('Stay', 2021, 'Pop', 'The Kid LAROI, Justin Bieber', '2023-07-15'),
('Toxic', 2003, 'Pop', 'Britney Spears', '2023-06-22'),
('Perfect', 2017, 'Pop', 'Ed Sheeran', '2023-03-05'),
('Hey Jude', 1968, 'Rock', 'The Beatles', '2023-01-30'),
('Let It Be', 1970, 'Rock', 'The Beatles', '2023-04-17'),
('Thriller', 1982, 'Pop', 'Michael Jackson', '2023-09-10');
-- Inserindo músicas adicionais no banco de dados 'music'
USE music;

INSERT INTO lista (nome, ano, genero, cantor, dataadd) VALUES
-- Stevie Wonder
('Superstition', 1972, 'Soul', 'Stevie Wonder', '2023-05-14'),
('Isn\'t She Lovely', 1976, 'Soul', 'Stevie Wonder', '2023-02-23'),
('Sir Duke', 1977, 'Soul', 'Stevie Wonder', '2023-08-30'),
('Higher Ground', 1973, 'Soul', 'Stevie Wonder', '2023-03-11'),
('I Wish', 1976, 'Soul', 'Stevie Wonder', '2023-06-01'),

-- Michael Jackson
('Billie Jean', 1982, 'Pop', 'Michael Jackson', '2023-04-19'),
('Beat It', 1982, 'Pop', 'Michael Jackson', '2023-07-22'),
('Thriller', 1982, 'Pop', 'Michael Jackson', '2023-01-14'),
('Smooth Criminal', 1987, 'Pop', 'Michael Jackson', '2023-06-15'),
('Black or White', 1991, 'Pop', 'Michael Jackson', '2023-05-20'),
('Lose Yourself', 2002, 'Hip Hop', 'Eminem', '2023-09-03'),
('Stan', 2000, 'Hip Hop', 'Eminem', '2023-04-05'),
('The Real Slim Shady', 2000, 'Hip Hop', 'Eminem', '2023-08-10'),
('Without Me', 2002, 'Hip Hop', 'Eminem', '2023-01-28'),
('Love The Way You Lie', 2010, 'Hip Hop', 'Eminem feat. Rihanna', '2023-07-12'),
-- Snoop Dogg
('Gin and Juice', 1994, 'Rap', 'Snoop Dogg', '2023-05-07'),
('Drop It Like It\'s Hot', 2004, 'Rap', 'Snoop Dogg feat. Pharrell', '2023-06-03'),
('Nuthin\' But A G Thang', 1992, 'Rap', 'Dr. Dre feat. Snoop Dogg', '2023-02-14'),
('Beautiful', 2003, 'Rap', 'Snoop Dogg feat. Pharrell', '2023-09-26'),
('Who Am I (What\'s My Name)?', 1993, 'Rap', 'Snoop Dogg', '2023-03-18'),
-- Travis Scott
('SICKO MODE', 2018, 'Hip Hop', 'Travis Scott', '2023-08-25'),
('Goosebumps', 2016, 'Hip Hop', 'Travis Scott', '2023-01-22'),
('STOP TRYING TO BE GOD', 2018, 'Hip Hop', 'Travis Scott', '2023-07-09'),
('ASTROWORLD', 2018, 'Hip Hop', 'Travis Scott', '2023-03-05'),
('STARGAZING', 2018, 'Hip Hop', 'Travis Scott', '2023-06-12'),
-- Tom Jobim
('Garota de Ipanema', 1962, 'Bossa Nova', 'Tom Jobim', '2023-04-02'),
('Águas de Março', 1972, 'Bossa Nova', 'Tom Jobim & Elis Regina', '2023-01-18'),
('Desafinado', 1959, 'Bossa Nova', 'Tom Jobim', '2023-09-10'),
('Chega de Saudade', 1958, 'Bossa Nova', 'Tom Jobim', '2023-07-02'),
('Corcovado', 1960, 'Bossa Nova', 'Tom Jobim', '2023-05-16'),
-- Frank Sinatra
('My Way', 1969, 'Jazz', 'Frank Sinatra', '2023-03-23'),
('Fly Me to the Moon', 1964, 'Jazz', 'Frank Sinatra', '2023-05-01'),
('New York, New York', 1980, 'Jazz', 'Frank Sinatra', '2023-06-21'),
('Strangers in the Night', 1966, 'Jazz', 'Frank Sinatra', '2023-02-08'),
('The Way You Look Tonight', 1964, 'Jazz', 'Frank Sinatra', '2023-04-12'),
-- MC Daleste
('O Menino da Balança', 2012, 'Funk', 'MC Daleste', '2023-06-17'),
('Lágrimas de Sangue', 2013, 'Funk', 'MC Daleste', '2023-05-30'),
('Coração de Aço', 2013, 'Funk', 'MC Daleste', '2023-02-25'),
('Copo Sujo', 2012, 'Funk', 'MC Daleste', '2023-08-14'),
('Faz a Diferente', 2013, 'Funk', 'MC Daleste', '2023-09-19'),
-- Jorge & Mateus
('Amo Noite e Dia', 2007, 'Sertanejo', 'Jorge & Mateus', '2023-03-29'),
('Pode Chorar', 2011, 'Sertanejo', 'Jorge & Mateus', '2023-07-17'),
('Logo Eu', 2009, 'Sertanejo', 'Jorge & Mateus', '2023-04-22'),
('Eu Te Amo Tanto', 2012, 'Sertanejo', 'Jorge & Mateus', '2023-09-06'),
('Chega de Saudade', 2010, 'Sertanejo', 'Jorge & Mateus', '2023-02-10');
