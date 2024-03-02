-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2024 at 07:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticket_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `contact` text NOT NULL,
  `status` varchar(100) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `title`, `description`, `contact`, `status`, `create_at`, `update_at`) VALUES
(1, 'Bus', '111 to 222', 'lucky@gmail.com', 'accepted', '2024-02-28 14:33:35', '2024-03-01 17:46:41'),
(2, 'train', 'Bangkok to Nakonpathom', 'sutsaenya_s@silpakorn.edu', 'pending', '2024-02-28 15:26:42', '2024-02-28 15:26:42'),
(3, 'bus', 'Bangkok to Chagmai', 'sutsaenya_s222@silpakorn.edu', 'pending', '2024-02-28 19:29:58', '2024-02-28 19:29:58'),
(4, 'Train', 'Chonburi to Bangkok', '082233221', 'pending', '2024-03-01 16:23:30', '2024-03-01 16:23:30'),
(5, 'Ship', 'Atlantic to Mediterianian', 'xxxx@gmail.com', 'pending', '2024-03-01 16:36:46', '2024-03-01 16:36:46'),
(6, 'Train', 'prachuab to bangkok', '08111111111', 'resolved', '2024-03-02 14:46:04', '2024-03-02 14:46:58'),
(7, 'Bus', '112 to 118', '9807102341', 'rejected', '2024-03-02 14:53:58', '2024-03-02 14:55:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
