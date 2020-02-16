CREATE TABLE company (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO company (name)
VALUES
    ('Microsoft'),
    ('Google'),
    ('Oracle'),
    ('AWS');