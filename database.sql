
--
-- Database: `ticket_management`
--
CREATE DATABASE IF NOT EXISTS `ticket_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ticket_management`;

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
(5, 'Ship', 'Atlantic to Mediterianian', 'xxxx@gmail.com', 'pending', '2024-03-01 16:36:46', '2024-03-01 16:36:46');

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Database: `todoweb`
--
CREATE DATABASE IF NOT EXISTS `todoweb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `todoweb`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updata_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `author`, `create_at`, `updata_at`) VALUES
(2, 'sutthirak', 'api crud', '2024-02-04 20:07:38', '2024-02-04 20:07:38'),
(3, 'api restful basic book', 'sutthirak', '2024-02-04 20:17:53', '2024-02-04 20:17:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
