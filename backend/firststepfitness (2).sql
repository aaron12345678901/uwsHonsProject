-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2025 at 08:34 PM
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
-- Database: `firststepfitness`
--

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE `exercises` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `img` varchar(250) DEFAULT NULL,
  `muscle_group` varchar(250) NOT NULL,
  `equipment_needed` tinyint(1) NOT NULL,
  `time` int(250) DEFAULT NULL,
  `Exercise_Reps` int(11) NOT NULL,
  `Exercise_Sets` int(11) NOT NULL,
  `Rest_Between_Sets` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exercises`
--

INSERT INTO `exercises` (`id`, `name`, `img`, `muscle_group`, `equipment_needed`, `time`, `Exercise_Reps`, `Exercise_Sets`, `Rest_Between_Sets`) VALUES
(21, 'Machine Chest Press', 'exercise-images/MachineChestPress.webp', 'Chest', 1, 8, 68, 3, 1),
(22, 'Dumbbell Bench Press', 'exercise-images/DumbbellBenchPress.jpg', 'Chest', 2, 10, 10, 4, 1),
(24, ' Push-Ups', 'exercise-images/Push-Ups.jpg', 'Chest', 3, 7, 12, 3, 0),
(25, 'Lat Pulldown', 'exercise-images/LatPulldown.jpg', 'Back', 1, 8, 12, 3, 1),
(26, 'Barbell Bent-Over Rows', 'exercise-images/Barbell Bent-Over Rows.jpg', 'Back', 2, 10, 8, 4, 1),
(27, 'Pull-Ups', 'exercise-images/Pull-Ups.jpg', 'Back', 3, 9, 8, 3, 1),
(29, ' Leg Press', 'exercise-images/LegPress.jpg', 'Legs', 1, 8, 10, 3, 1),
(30, 'Barbell Squats', 'exercise-images/BarbellSquats.jpg', 'Legs', 2, 12, 10, 4, 1),
(31, 'Bodyweight Squats', 'exercise-images/BodyweightSquats.jpg', 'Legs', 3, 6, 20, 3, 0),
(32, 'Shoulder Press Machine', 'exercise-images/ShoulderPressMachine.jpg', 'Shoulders', 1, 8, 12, 3, 1),
(33, 'Dumbbell Shoulder Press', 'exercise-images/DumbbellShoulderPress.jpg', 'Shoulders', 2, 10, 10, 4, 1),
(34, 'Pike Push-Ups', 'exercise-images/Pik Push-Ups.jpg', 'Shoulders', 3, 7, 12, 3, 1),
(35, 'Triceps Pushdowns', 'exercise-images/Triceps Pushdowns.jpg', 'Triceps', 1, 8, 12, 3, 1),
(36, 'Dumbbell Overhead Triceps Extensions', 'exercise-images/DumbbellOverheadTricepsExtensions.jpg', 'Triceps', 2, 10, 10, 4, 1),
(37, 'Triceps Dips (on parallel bars or bench)', 'exercise-images/TricepsDipsonparallelbarsorbench.jpg', 'Triceps', 3, 8, 10, 3, 1),
(38, ' Biceps Curl Machine', 'exercise-images/BicepsCurlMachine.jpg', 'Biceps', 1, 8, 10, 3, 1),
(39, 'Barbell Biceps Curls', 'exercise-images/BarbellBicepsCurls.png', 'Biceps', 2, 10, 10, 4, 1),
(40, 'Resistance Band Biceps Curls', 'exercise-images/ResistanceBandBicepsCurls.png', 'Biceps', 3, 7, 15, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `weightstone` int(11) NOT NULL,
  `weightpounds` int(11) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `experience` int(11) NOT NULL,
  `workouts_complete` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `age`, `weightstone`, `weightpounds`, `is_admin`, `experience`, `workouts_complete`) VALUES
(4, 'Aaron', 'aaron-mc93@hotmail.co.uk', '$2y$10$i59vzJMk0E/kdpg0FOMxiuv4Wq1kmfIOEdfbb.5G0qU0J/7C79Hki', 31, 16, 4, 0, 0, 10),
(7, 'admin', 'admin@admin.com', '$2y$10$VOQitCIuzYCMvUha7vVvmO6eXZSNW0zFcjra6tqnynY7ojMjfYg1W', 1, 1, 1, 1, 0, 0),
(9, 'user', 'user@user.com', '$2y$10$MN/03S/LL75NRNpK6uEwQe5ZQvHmNL.CCYoC7COBlw8E3tjPFpPrG', 1, 1, 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `workouts`
--

CREATE TABLE `workouts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `day_of_week` varchar(50) DEFAULT NULL,
  `is_prebuilt` tinyint(1) NOT NULL DEFAULT 0,
  `level` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workouts`
--

INSERT INTO `workouts` (`id`, `user_id`, `name`, `day_of_week`, `is_prebuilt`, `level`) VALUES
(2, 4, 'back and biceps', 'Monday', 0, NULL),
(3, 4, 'chest and triceps ', 'Wednesday', 0, NULL),
(4, 4, 'Rest Daydd', 'Tuesday', 0, NULL),
(5, 4, 'Rest Daytest', 'Thursday', 0, NULL),
(9, 7, 'Back Day', NULL, 1, 'beginner'),
(10, 7, 'Legs', NULL, 1, 'beginner'),
(13, 9, 'Rest Day', 'Monday', 0, NULL),
(14, 7, 'Biceps and Back', NULL, 1, 'Beginner'),
(15, 4, 'Rest Day11', 'Saturday', 0, NULL),
(16, 7, 'diabetes buster', NULL, 1, 'Advanced');

-- --------------------------------------------------------

--
-- Table structure for table `workout_exercises`
--

CREATE TABLE `workout_exercises` (
  `id` int(11) NOT NULL,
  `workout_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workout_exercises`
--

INSERT INTO `workout_exercises` (`id`, `workout_id`, `exercise_id`) VALUES
(3, 2, 26),
(5, 3, 37),
(7, 3, 21),
(9, 3, 36),
(10, 3, 22),
(11, 2, 25),
(13, 2, 21),
(14, 3, 21),
(15, 3, 21),
(16, 2, 21),
(17, 2, 22),
(18, 2, 21),
(19, 4, 22),
(20, 4, 21),
(21, 5, 21),
(22, 5, 21),
(29, 2, 22),
(40, 13, 40),
(41, 9, 26),
(42, 9, 27),
(43, 9, 25),
(44, 16, 21),
(45, 16, 22),
(46, 16, 24),
(47, 16, 38),
(48, 10, 29),
(49, 10, 30),
(50, 10, 31),
(51, 14, 25),
(52, 14, 26),
(53, 14, 27),
(54, 14, 38),
(55, 14, 39);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workout_id` (`workout_id`),
  ADD KEY `exercise_id` (`exercise_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `workouts`
--
ALTER TABLE `workouts`
  ADD CONSTRAINT `workouts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  ADD CONSTRAINT `workout_exercises_ibfk_1` FOREIGN KEY (`workout_id`) REFERENCES `workouts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `workout_exercises_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
