DROP TABLE IF EXISTS termin;

CREATE TABLE termin(
    id SERIAL PRIMARY KEY,
    time VARCHAR(255) NOT NULL,
    descript TEXT
);

