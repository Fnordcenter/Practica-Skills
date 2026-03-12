-- Feline Database Schema
-- Follows sql-database-maker-skill principles: ANSI standard, snake_case, explicit keys.

-- 1. Create independent tables first
CREATE TABLE breeds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    origin VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create dependent tables
CREATE TABLE cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    age_months INTEGER DEFAULT 0,
    breed_id INTEGER NOT NULL,
    description TEXT,
    is_adopted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_breed FOREIGN KEY (breed_id) 
        REFERENCES breeds(id) ON DELETE SET NULL
);

-- 3. Junction Tables (Many-to-Many features)
CREATE TABLE features (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    feature_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE cat_features (
    cat_id INTEGER NOT NULL,
    feature_id INTEGER NOT NULL,
    PRIMARY KEY (cat_id, feature_id),
    CONSTRAINT fk_cf_cat FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE,
    CONSTRAINT fk_cf_feature FOREIGN KEY (feature_id) REFERENCES features(id) ON DELETE CASCADE
);
