-- Initial Seed Data

-- Independent tables
INSERT INTO breeds (name, origin) VALUES ('Maine Coon', 'United States');
INSERT INTO breeds (name, origin) VALUES ('Siamese', 'Thailand');
INSERT INTO breeds (name, origin) VALUES ('Domestic Shorthair', 'Unknown');

-- Dependent tables
INSERT INTO cats (name, age_months, breed_id, description, is_adopted) VALUES 
('Mr. Fluffington', 36, 1, 'A gentle giant who loves sleeping in small boxes.', FALSE),
('Cleopatra', 12, 2, 'Very vocal, demands treats precisely at 5am.', FALSE),
('Barnaby', 5, 3, 'Found in a barn. Extremely fast runner.', FALSE);

-- Features
INSERT INTO features (feature_name) VALUES ('Good with kids'), ('Loves dogs'), ('Special diet required');

-- Cat <-> Feature links
INSERT INTO cat_features (cat_id, feature_id) VALUES 
(1, 1), 
(2, 3), 
(3, 1), 
(3, 2);
