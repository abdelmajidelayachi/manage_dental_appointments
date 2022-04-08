-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2022 at 12:48 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dental-appointment`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id_app` int(11) NOT NULL,
  `slot_id` int(11) NOT NULL,
  `subject` varchar(1000) NOT NULL,
  `user_reference` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id_app`, `slot_id`, `subject`, `user_reference`) VALUES
(45, 156, 'I1', '414244454c4d414a4944313234'),
(47, 171, 'tetstfskjskjqbkqenblkbe', '414244454c4d414a4944313234'),
(48, 155, 'test show12', '414244454c4d414a4944313234'),
(49, 158, 'test ahmed', '41686d64343233');

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `id` int(11) NOT NULL,
  `slot_date` date NOT NULL,
  `slot_time` time NOT NULL,
  `slot_status` tinyint(4) NOT NULL DEFAULT 0,
  `slot_expired` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`id`, `slot_date`, `slot_time`, `slot_status`, `slot_expired`) VALUES
(155, '2022-04-07', '09:00:00', 1, 0),
(156, '2022-04-07', '09:30:00', 1, 0),
(157, '2022-04-07', '10:00:00', 1, 0),
(158, '2022-04-07', '10:30:00', 1, 0),
(159, '2022-04-07', '11:00:00', 0, 0),
(160, '2022-04-07', '11:30:00', 1, 0),
(161, '2022-04-07', '14:00:00', 0, 0),
(162, '2022-04-07', '14:30:00', 0, 0),
(163, '2022-04-07', '15:00:00', 0, 0),
(164, '2022-04-07', '15:30:00', 0, 0),
(165, '2022-04-07', '16:00:00', 0, 0),
(166, '2022-04-07', '16:30:00', 0, 0),
(167, '2022-04-07', '17:00:00', 0, 0),
(168, '2022-04-07', '17:30:00', 0, 0),
(169, '2022-04-08', '09:00:00', 0, 0),
(170, '2022-04-08', '09:30:00', 1, 0),
(171, '2022-04-08', '10:00:00', 0, 0),
(172, '2022-04-08', '10:30:00', 0, 0),
(173, '2022-04-08', '11:00:00', 0, 0),
(174, '2022-04-08', '11:30:00', 0, 0),
(175, '2022-04-08', '14:00:00', 0, 0),
(176, '2022-04-08', '14:30:00', 0, 0),
(177, '2022-04-08', '15:00:00', 0, 0),
(178, '2022-04-08', '15:30:00', 0, 0),
(179, '2022-04-08', '16:00:00', 0, 0),
(180, '2022-04-08', '16:30:00', 0, 0),
(181, '2022-04-08', '17:00:00', 0, 0),
(182, '2022-04-08', '17:30:00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `reference` varchar(500) NOT NULL,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstName`, `lastName`, `age`, `birthday`, `reference`, `id`) VALUES
('ABDELMAJID', 'EL AYACHI', 24, '1999-12-04', '414244454c4d414a4944313234', 1),
('Ahmad', 'ahamd', 22, '1998-03-29', '41686d6164323232', 2),
('Ahmd', 'test', 23, '1998-04-08', '41686d64343233', 4),
('Mohammed', 'Mohammed', 21, '2000-12-31', '4d6f68616d6d6564333231', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id_app`),
  ADD KEY `slot_id` (`slot_id`),
  ADD KEY `user_reference` (`user_reference`);

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`reference`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id_app` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `slots`
--
ALTER TABLE `slots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `slot_id` FOREIGN KEY (`slot_id`) REFERENCES `slots` (`id`),
  ADD CONSTRAINT `user_reference` FOREIGN KEY (`user_reference`) REFERENCES `users` (`reference`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
