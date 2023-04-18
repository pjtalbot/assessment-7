
CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text UNIQUE NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

