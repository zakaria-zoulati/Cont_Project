CREATE TABLE IF NOT EXISTS student (
           id SERIAL PRIMARY KEY,
           name VARCHAR(255) NOT NULL,
           date_of_creation TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES student(id),
    matiere VARCHAR(255) NOT NULL,
    note NUMERIC NOT NULL
);

ALTER SEQUENCE student_id_seq OWNED BY student.id;
ALTER SEQUENCE notes_id_seq OWNED BY notes.id;
