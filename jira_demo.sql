-- phpMyAdmin SQL Dump
-- version 4.0.10deb1ubuntu0.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 17, 2018 at 06:38 PM
-- Server version: 5.5.59-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jira_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `uid` (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pid`, `title`, `description`, `uid`) VALUES
(2, 'facebook', 'asdddddd', 2),
(3, 'google', 'google description', 6);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `attechment` varchar(800) NOT NULL,
  `uid` varchar(10) NOT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`tid`),
  KEY `pid` (`pid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`tid`, `title`, `description`, `attechment`, `uid`, `pid`) VALUES
(1, 'Responsive bug', 'Etiam porta sem malesuada magn', 'blob:http://localhost:4200/690537e6-2c7a-4816-940b-47aa8f081898', '5,7', 2),
(2, 'Travel checklist', 'Curabitur blandit tempus porttitor.', 'blob:http://localhost:4200/690537e6-2c7a-4816-940b-47aa8f081898', '7', 2),
(23, 'Additional fields', 'Donec id elit non mi porta gravida at eget metus', 'blob:http://localhost:4200/38dccbea-3316-4b3d-b002-90d38091c90a', '6', 3),
(24, 'Setup CI server', 'Maecenas faucibus mollis interdum.', 'blob:http://localhost:4200/38dccbea-3316-4b3d-b002-90d38091c90a', '5,6,7', 2),
(30, 'google', 'thid did ibf', 'blob:http://localhost:4200/38dccbea-3316-4b3d-b002-90d38091c90a', '5', 2),
(31, 'facebook', 'ffffffffffffffffffff', 'blob:http://localhost:4200/690537e6-2c7a-4816-940b-47aa8f081898', '5', 2),
(32, 'srg@gmail.com', 'ff', 'blob:http://localhost:4200/7f1ecf7d-b4b1-45e7-84e7-fee23960fee8', '5', 2),
(33, 'google', 'as', 'blob:http://localhost:4200/c9fb37e3-6852-42ee-82b1-9ce514db78de', '6', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `utid` int(11) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `utid` (`utid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `email`, `pwd`, `utid`) VALUES
(2, 'asd@gmail.com', 'admin@123', 1),
(3, 'asd@gmail.com', 'admin@123', 1),
(4, 'xyz@gmail.com', 'admin@123', 1),
(5, 'asd@gmail.com', '222', 2),
(6, 'asd@gmail.com', '444', 2),
(7, 'aws@gmail.com', '123', 2),
(8, 'srg@gmail.com', 'srg@123', 1),
(9, 'srg@gmail.com', '123', 1),
(10, 'srg@gmail.com', '123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE IF NOT EXISTS `user_type` (
  `utid` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`utid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`utid`, `type`) VALUES
(1, 'admin'),
(2, 'employee');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_created_by_user` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_of_project` FOREIGN KEY (`pid`) REFERENCES `project` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_type` FOREIGN KEY (`utid`) REFERENCES `user_type` (`utid`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
