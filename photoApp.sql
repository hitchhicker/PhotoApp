DROP DATABASE photoapp;
CREATE DATABASE photoapp;
\c photoapp;

CREATE TABLE _User (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password CHAR(32) NOT NULL, /*if we use MD5 password will be size of 32 bytes*/
    PRIMARY KEY(id)
);

CREATE TABLE Photo (
    id SERIAL,
    url TEXT NOT NULL,
    created_time TIMESTAMP WITH TIME ZONE NOT NULL,
    created_by INTEGER NOT NULL,
    recommended_count INTEGER DEFAULT 0,
    rank INTEGER DEFAULT 0,
    FOREIGN KEY (created_by) REFERENCES _User(id),
    PRIMARY KEY(id)
);


CREATE TABLE PhotoHistory (
    id SERIAL,
    url TEXT NOT NULL,
    created_time TIMESTAMP WITH TIME ZONE NOT NULL,
    created_by INTEGER NOT NULL,
    recommended_count INTEGER DEFAULT 0,
    rank INTEGER DEFAULT 0,
    FOREIGN KEY (created_by) REFERENCES _User(id),
    PRIMARY KEY(id)
);

CREATE TABLE UserViewsPhoto (
    id SERIAL,
    user_id INTEGER NOT NULL,
    photo_id INTEGER NOT NULL,
    view_time TIMESTAMP WITH TIME ZONE NOT NULL,
    FOREIGN KEY(user_id) REFERENCES _User(id),
    FOREIGN KEY(photo_id) REFERENCES Photo(id),
    PRIMARY KEY(id)
);

CREATE TABLE UserCollectsPhoto (
    id SERIAL,
    user_id INTEGER NOT NULL,
    photo_id INTEGER NOT NULL,
    collect_time TIMESTAMP WITH TIME ZONE NOT NULL,
    FOREIGN KEY(user_id) REFERENCES _User(id),
    FOREIGN KEY(photo_id) REFERENCES Photo(id),
    PRIMARY KEY(id)
);

CREATE TABLE AvailablePhoto (
    id SERIAL,
    photo_id INTEGER NOT NULL,
    url TEXT NOT NULL,
    created_time TIMESTAMP WITH TIME ZONE NOT NULL,
    magic_buffer INTEGER NOT NULL,
    FOREIGN KEY(photo_id) REFERENCES Photo(id),
    PRIMARY KEY(id)
);
CREATE INDEX index_magic_buffer
ON AvailablePhoto (magic_buffer);
