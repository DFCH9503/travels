-- ==============================
-- Database Schema for Travels - App
-- ==============================

-- Drop tables if they exist
DROP TABLE IF EXISTS flight_bookings, hotel_bookings, users, flights, airlines, hotel_rooms, hotels, cities CASCADE;

-- Table: Cities
CREATE TABLE cities (
    city_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    country VARCHAR(100) DEFAULT 'Colombia'
);

-- Table: Hotels
CREATE TABLE hotels (
    hotel_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    city_id INT REFERENCES cities(city_id),
    address VARCHAR(200),
    stars INT CHECK (stars BETWEEN 1 AND 5),
    description TEXT
);

-- Table: Hotel Rooms
CREATE TABLE hotel_rooms (
    room_id SERIAL PRIMARY KEY,
    hotel_id INT REFERENCES hotels(hotel_id),
    room_type VARCHAR(50),
    price_per_night DECIMAL(10, 2),
    available BOOLEAN DEFAULT TRUE
);

-- Table: Airlines
CREATE TABLE airlines (
    airline_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL
);

-- Table: Fligths
CREATE TABLE flights (
    flight_id SERIAL PRIMARY KEY,
    airline_id INT REFERENCES airlines(airline_id),
    origin_city_id INT REFERENCES cities(city_id),
    destination_city_id INT REFERENCES cities(city_id),
    departure_time TIMESTAMP,
    arrival_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    price DECIMAL(10, 2),
    total_seats INT CHECK (total_seats > 0),
    available_seats INT CHECK (available_seats >= 0 AND available_seats <= total_seats)
);


-- Sample Data Insertion

-- Cities
INSERT INTO cities (name, department) VALUES
('Bogotá', 'Cundinamarca'),
('Medellín', 'Antioquia'),
('Cartagena', 'Bolívar'),
('Cali', 'Valle del Cauca'),
('Barranquilla', 'Atlántico'),
('Santa Marta', 'Magdalena'),
('Bucaramanga', 'Santander');

-- Airlines
INSERT INTO airlines (name) VALUES
('Avianca Virtual'),
('Latam Colombia'),
('Satena Ficticia'),
('EasyFly Virtual');

-- Hotels
INSERT INTO hotels (name, city_id, address, stars, description) VALUES
('Hotel Andes Plaza', 1, 'Cra. 100 #25-50', 4, 'Modern hotel in Bogotá with business services.'),
('Hotel Medellín Plaza', 2, 'Cl. 7 #42-30', 5, 'Luxury hotel in the heart of Medellín.'),
('Hotel Playa Dorada', 3, 'Av. 1 #5-10', 4, 'Beachfront hotel in Cartagena.'),
('Hotel Pacifico', 4, 'Av. 3N #25-30', 3, 'Comfortable and affordable stay in Cali.'),
('Hotel Costa Azul', 5, 'Cl. 76 #54-11', 4, 'Stylish hotel in Barranquilla with great views.'),
('Hotel Sierra Mar', 6, 'Cl. 19 #4-20', 5, 'Elegant hotel near the sea in Santa Marta.'),
('Hotel Mochachica', 7, 'Cr. 31 #34-20', 4, 'Luxury hotel in the heart of Bucaramanga.');

-- Hotel Rooms
INSERT INTO hotel_rooms (hotel_id, room_type, price_per_night, available) VALUES
(1, 'Single', 150000, TRUE),
(1, 'Double', 200000, TRUE),
(2, 'Suite', 400000, TRUE),
(3, 'Double', 250000, TRUE),
(4, 'Single', 120000, TRUE),
(5, 'Double', 230000, TRUE),
(6, 'Suite', 450000, TRUE),
(7, 'Suite', 150000, TRUE),
(7, 'Double', 350000, TRUE);

-- Flights
INSERT INTO flights (
    airline_id, origin_city_id, destination_city_id,
    departure_time, arrival_time, price, total_seats, available_seats
) VALUES
-- Bogotá to Medellín
(1, 1, 2, '2025-06-10 08:00:00', '2025-06-10 09:00:00', 250000, 150, 150),
-- Medellín to Cartagena
(2, 2, 3, '2025-06-11 10:30:00', '2025-06-11 12:00:00', 320000, 120, 100),
-- Cartagena to Cali
(3, 3, 4, '2025-06-12 13:00:00', '2025-06-12 15:00:00', 280000, 100, 85),
-- Cali to Barranquilla
(4, 4, 5, '2025-06-13 07:00:00', '2025-06-13 09:00:00', 300000, 110, 110),
-- Barranquilla to Santa Marta
(1, 5, 6, '2025-06-14 17:00:00', '2025-06-14 17:45:00', 180000, 80, 70),
-- Santa Marta to Bogotá
(2, 6, 1, '2025-06-15 19:00:00', '2025-06-15 21:00:00', 260000, 140, 135),
-- Santa Marta to Bucaramanga
(3, 6, 7, '2025-06-15 14:00:00', '2025-06-15 20:00:00', 280000, 120, 115);
