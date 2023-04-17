-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 04:29 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electric`
--

-- --------------------------------------------------------

--
-- Table structure for table `cheapestelectriccars_evdatabase`
--

CREATE TABLE `cheapestelectriccars_evdatabase` (
  `id` int(11) NOT NULL,
  `Name` varchar(38) DEFAULT NULL,
  `Subtitle` varchar(42) DEFAULT NULL,
  `Acceleration` varchar(12) DEFAULT NULL,
  `TopSpeed` varchar(8) DEFAULT NULL,
  `Range` varchar(6) DEFAULT NULL,
  `Efficiency` varchar(10) DEFAULT NULL,
  `FastChargeSpeed` varchar(15) DEFAULT NULL,
  `Drive` varchar(17) DEFAULT NULL,
  `NumberofSeats` double DEFAULT NULL,
  `PriceinGermany` varchar(14) DEFAULT NULL,
  `PriceinUK` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cheapestelectriccars_evdatabase`
--

INSERT INTO `cheapestelectriccars_evdatabase` (`id`, `Name`, `Subtitle`, `Acceleration`, `TopSpeed`, `Range`, `Efficiency`, `FastChargeSpeed`, `Drive`, `NumberofSeats`, `PriceinGermany`, `PriceinUK`) VALUES
(1, 'Opel Ampera-e ', 'Battery Electric Vehicle |       58 kWh ', '7.3 sec', '150 km/h', '335 km', '173 Wh/km', '210 km/h', 'Front Wheel Drive', 5, '€42,990', 'N/A'),
(2, 'Renault Kangoo Maxi ZE 33', 'Battery Electric Vehicle |       31 kWh ', '22.4 sec', '130 km/h', '160 km', '194 Wh/km', '-', 'Front Wheel Drive', 5, 'N/A', '£31,680'),
(3, 'Nissan Leaf ', 'Battery Electric Vehicle |       36 kWh ', '7.9 sec', '144 km/h', '220 km', '164 Wh/km', '230 km/h', 'Front Wheel Drive', 5, '€29,990', '£25,995'),
(4, 'Audi e-tron Sportback 55 quattro', 'Battery Electric Vehicle |       86.5 kWh', '5.7 sec', '200 km/h', '375 km', '231 Wh/km', '600 km/h', 'All Wheel Drive', 5, 'N/A', '£79,900'),
(5, 'Porsche Taycan Turbo S', 'Battery Electric Vehicle |       83.7 kWh', '2.8 sec', '260 km/h', '390 km', '215 Wh/km', '860 km/h', 'All Wheel Drive', 4, '€186,336', '£138,830'),
(6, 'Nissan e-NV200 Evalia ', 'Battery Electric Vehicle |       36 kWh ', '14.0 sec', '123 km/h', '165 km', '218 Wh/km', '170 km/h', 'Front Wheel Drive', 7, '€43,433', '£30,255'),
(7, 'Volkswagen ID.3 Pure Performance', 'Battery Electric Vehicle |       45 kWh', '8.9 sec', '160 km/h', '275 km', '164 Wh/km', '260 km/h', 'Rear Wheel Drive', 5, '€31,960', '£27,120'),
(8, 'BMW iX3 ', 'Battery Electric Vehicle |       74 kWh', '6.8 sec', '180 km/h', '385 km', '192 Wh/km', '520 km/h', 'Rear Wheel Drive', 5, '€66,300', '£58,850'),
(9, 'Nissan Leaf e+', 'Battery Electric Vehicle |       56 kWh ', '7.3 sec', '157 km/h', '325 km', '172 Wh/km', '390 km/h', 'Front Wheel Drive', 5, '€38,350', '£30,445'),
(10, 'BMW i3 120 Ah', 'Battery Electric Vehicle |       37.9 kWh', '7.3 sec', '150 km/h', '235 km', '161 Wh/km', '270 km/h', 'Rear Wheel Drive', 4, '€39,000', '£31,305'),
(11, 'Mercedes EQA 250', 'Battery Electric Vehicle |       66.5 kWh', '8.9 sec', '160 km/h', '355 km', '187 Wh/km', '420 km/h', 'Front Wheel Drive', 5, '€47,541', '£43,495'),
(12, 'DS 3 Crossback E-Tense', 'Battery Electric Vehicle |       45 kWh ', '8.7 sec', '150 km/h', '250 km', '180 Wh/km', '330 km/h', 'Front Wheel Drive', 5, '€30,040', '£31,500'),
(13, 'BMW i3s 120 Ah', 'Battery Electric Vehicle |       37.9 kWh', '6.9 sec', '160 km/h', '230 km', '165 Wh/km', '260 km/h', 'Rear Wheel Drive', 4, '€42,600', '£32,305'),
(14, 'Sono Sion ', 'Battery Electric Vehicle |       47 kWh ', '9.0 sec', '140 km/h', '260 km', '181 Wh/km', '310 km/h', 'Front Wheel Drive', 5, '€25,500', 'N/A'),
(15, 'Audi e-tron GT RS', 'Battery Electric Vehicle |       85 kWh', '3.3 sec', '250 km/h', '405 km', '210 Wh/km', '810 km/h', 'All Wheel Drive', 4, '€138,200', '£110,950'),
(16, 'Kia e-Soul 64 kWh', 'Battery Electric Vehicle |       64 kWh', '7.9 sec', '167 km/h', '370 km', '173 Wh/km', '350 km/h', 'Front Wheel Drive', 5, 'N/A', '£37,545'),
(17, 'Renault Zoe ZE50 R110', 'Battery Electric Vehicle |       52 kWh', '11.4 sec', '135 km/h', '315 km', '165 Wh/km', '230 km/h', 'Front Wheel Drive', 5, '€31,990', '£26,795'),
(18, 'Hyundai IONIQ Electric', 'Battery Electric Vehicle |       38.3 kWh', '9.7 sec', '165 km/h', '250 km', '153 Wh/km', '220 km/h', 'Front Wheel Drive', 5, '€35,350', '£30,550'),
(19, 'Lightyear One ', 'Battery Electric Vehicle |       60 kWh ', '10.0 sec', '150 km/h', '575 km', '104 Wh/km', '540 km/h', 'All Wheel Drive', 5, '€149,000', 'N/A'),
(20, 'Tesla Roadster ', 'Battery Electric Vehicle |       200 kWh ', '2.1 sec', '410 km/h', '970 km', '206 Wh/km', '920 km/h', 'All Wheel Drive', 4, '€215,000', '£189,000'),
(21, 'Peugeot e-208 ', 'Battery Electric Vehicle |       45 kWh ', '8.1 sec', '150 km/h', '275 km', '164 Wh/km', '370 km/h', 'Front Wheel Drive', 5, '€30,450', '£27,225'),
(22, 'Honda e ', 'Battery Electric Vehicle |       28.5 kWh ', '9.0 sec', '145 km/h', '170 km', '168 Wh/km', '190 km/h', 'Rear Wheel Drive', 4, '€33,850', '£27,660'),
(23, 'CUPRA Born 110 kW - 55 kWh', 'Battery Electric Vehicle |       45 kWh', '8.9 sec', '160 km/h', '275 km', '164 Wh/km', '440 km/h', 'Rear Wheel Drive', 5, '€32,700', '£28,500'),
(24, 'Audi Q4 e-tron 35', 'Battery Electric Vehicle |       51.5 kWh', '9.0 sec', '160 km/h', '280 km', '184 Wh/km', '390 km/h', 'Rear Wheel Drive', 5, '€41,900', '£40,750'),
(25, 'Tesla Model Y Long Range Dual Motor', 'Battery Electric Vehicle |       76 kWh ', '5.1 sec', '217 km/h', '450 km', '169 Wh/km', '750 km/h', 'All Wheel Drive', 7, '€59,965', '£54,000'),
(26, 'Tesla Model Y Performance', 'Battery Electric Vehicle |       76 kWh ', '3.7 sec', '241 km/h', '430 km', '177 Wh/km', '720 km/h', 'All Wheel Drive', 7, '€66,965', '£60,000'),
(27, 'Porsche Taycan 4 Cross Turismo', 'Battery Electric Vehicle |       83.7 kWh', '5.1 sec', '220 km/h', '405 km', '207 Wh/km', '850 km/h', 'All Wheel Drive', 4, '€93,635', '£79,340'),
(28, 'Skoda Enyaq iV 50', 'Battery Electric Vehicle |       52 kWh', '11.3 sec', '160 km/h', '295 km', '176 Wh/km', '240 km/h', 'Rear Wheel Drive', 5, '€33,800', 'N/A'),
(29, 'Volkswagen e-Up! ', 'Battery Electric Vehicle |       32.3 kWh', '11.9 sec', '130 km/h', '205 km', '158 Wh/km', '170 km/h', 'Front Wheel Drive', 4, 'N/A', 'N/A'),
(30, 'SEAT Mii Electric ', 'Battery Electric Vehicle |       32.3 kWh', '12.3 sec', '130 km/h', '205 km', '158 Wh/km', '170 km/h', 'Front Wheel Drive', 4, '€24,650', 'N/A'),
(31, 'Opel Corsa-e ', 'Battery Electric Vehicle |       45 kWh ', '8.1 sec', '150 km/h', '275 km', '164 Wh/km', '370 km/h', 'Front Wheel Drive', 5, '€29,000', '£27,140'),
(32, 'MG ZS EV', 'Battery Electric Vehicle |       42.5 kWh ', '8.2 sec', '140 km/h', '220 km', '193 Wh/km', '260 km/h', 'Front Wheel Drive', 5, '€31,990', '£25,995'),
(33, 'Volkswagen ID.3 Pro', 'Battery Electric Vehicle |       58 kWh', '9.6 sec', '160 km/h', '350 km', '166 Wh/km', '440 km/h', 'Rear Wheel Drive', 5, '€34,995', '£28,420'),
(34, 'Volkswagen ID.3 Pro S', 'Battery Electric Vehicle |       77 kWh', '7.9 sec', '160 km/h', '450 km', '171 Wh/km', '550 km/h', 'Rear Wheel Drive', 4, '€41,995', '£38,800'),
(35, 'Hyundai Kona Electric 64 kWh', 'Battery Electric Vehicle |       64 kWh', '7.9 sec', '167 km/h', '395 km', '162 Wh/km', '370 km/h', 'Front Wheel Drive', 5, '€41,850', 'N/A'),
(36, 'Renault Zoe ZE50 R135', 'Battery Electric Vehicle |       52 kWh', '9.5 sec', '140 km/h', '310 km', '168 Wh/km', '230 km/h', 'Front Wheel Drive', 5, '€33,990', '£28,795'),
(37, 'Peugeot e-2008 SUV ', 'Battery Electric Vehicle |       45 kWh ', '8.5 sec', '150 km/h', '250 km', '180 Wh/km', '330 km/h', 'Front Wheel Drive', 5, '€35,450', '£30,730'),
(38, 'Audi e-tron 50 quattro', 'Battery Electric Vehicle |       64.7 kWh', '6.8 sec', '190 km/h', '280 km', '231 Wh/km', '470 km/h', 'All Wheel Drive', 5, '€69,100', '£60,600'),
(39, 'Porsche Taycan Turbo', 'Battery Electric Vehicle |       83.7 kWh', '3.2 sec', '260 km/h', '400 km', '209 Wh/km', '840 km/h', 'All Wheel Drive', 4, '€153,016', '£115,860'),
(40, 'Smart EQ fortwo coupe', 'Battery Electric Vehicle |       16.7 kWh ', '11.6 sec', '130 km/h', '100 km', '167 Wh/km', '-', 'Rear Wheel Drive', 2, '€18,460', '£19,200'),
(41, 'Smart EQ fortwo cabrio', 'Battery Electric Vehicle |       16.7 kWh ', '11.9 sec', '130 km/h', '95 km', '176 Wh/km', '-', 'Rear Wheel Drive', 2, '€21,720', '£21,620'),
(42, 'Smart EQ forfour ', 'Battery Electric Vehicle |       16.7 kWh ', '12.7 sec', '130 km/h', '95 km', '176 Wh/km', '-', 'Rear Wheel Drive', 4, '€19,120', '£19,795'),
(43, 'Honda e Advance', 'Battery Electric Vehicle |       28.5 kWh ', '8.3 sec', '145 km/h', '170 km', '168 Wh/km', '190 km/h', 'Rear Wheel Drive', 4, '€38,000', '£30,160'),
(44, 'Byton M-Byte 72 kWh 2WD', 'Battery Electric Vehicle |       72 kWh ', '7.5 sec', '190 km/h', '325 km', '222 Wh/km', '420 km/h', 'Rear Wheel Drive', 5, '€53,500', '£50,000'),
(45, 'Byton M-Byte 95 kWh 4WD', 'Battery Electric Vehicle |       95 kWh ', '5.5 sec', '190 km/h', '390 km', '244 Wh/km', '460 km/h', 'All Wheel Drive', 5, '€64,000', '£60,000'),
(46, 'Renault Zoe ZE40 R110', 'Battery Electric Vehicle |       41 kWh', '11.4 sec', '135 km/h', '255 km', '161 Wh/km', '230 km/h', 'Front Wheel Drive', 5, '€29,990', 'N/A'),
(47, 'Porsche Taycan 4S', 'Battery Electric Vehicle |       71 kWh', '4.0 sec', '250 km/h', '375 km', '189 Wh/km', '750 km/h', 'All Wheel Drive', 4, '€106,487', '£83,580'),
(48, 'Porsche Taycan 4S Plus', 'Battery Electric Vehicle |       83.7 kWh', '4.0 sec', '250 km/h', '435 km', '192 Wh/km', '910 km/h', 'All Wheel Drive', 4, '€113,008', '£88,193'),
(49, 'Hyundai Kona Electric 39 kWh', 'Battery Electric Vehicle |       39.2 kWh', '9.9 sec', '155 km/h', '250 km', '157 Wh/km', '210 km/h', 'Front Wheel Drive', 5, '€34,850', 'N/A'),
(50, 'Mercedes EQV 300 Long', 'Battery Electric Vehicle |       90 kWh', '12.1 sec', '160 km/h', '320 km', '281 Wh/km', '280 km/h', 'Front Wheel Drive', 7, '€71,388', '£70,665'),
(51, 'Mazda MX-30 ', 'Battery Electric Vehicle |       30 kWh ', '9.7 sec', '140 km/h', '170 km', '176 Wh/km', '180 km/h', 'Front Wheel Drive', 5, '€34,490', '£26,045'),
(52, 'Ford Mustang Mach-E SR RWD', 'Battery Electric Vehicle |       68 kWh', '6.9 sec', '180 km/h', '345 km', '197 Wh/km', '380 km/h', 'Rear Wheel Drive', 5, '€46,900', '£41,330'),
(53, 'Ford Mustang Mach-E ER RWD', 'Battery Electric Vehicle |       88 kWh', '7.0 sec', '180 km/h', '440 km', '200 Wh/km', '430 km/h', 'Rear Wheel Drive', 5, '€54,475', '£49,980'),
(54, 'Ford Mustang Mach-E SR AWD', 'Battery Electric Vehicle |       68 kWh', '6.3 sec', '180 km/h', '330 km', '206 Wh/km', '360 km/h', 'All Wheel Drive', 5, '€54,000', '£46,650'),
(55, 'Ford Mustang Mach-E ER AWD', 'Battery Electric Vehicle |       88 kWh', '5.8 sec', '180 km/h', '420 km', '210 Wh/km', '410 km/h', 'All Wheel Drive', 5, '€62,900', '£57,030'),
(56, 'Ford Mustang Mach-E GT', 'Battery Electric Vehicle |       88 kWh', '4.4 sec', '200 km/h', '410 km', '215 Wh/km', '400 km/h', 'All Wheel Drive', 5, 'N/A', '£67,225'),
(57, 'Audi e-tron Sportback 50 quattro', 'Battery Electric Vehicle |       64.7 kWh', '6.8 sec', '190 km/h', '295 km', '219 Wh/km', '490 km/h', 'All Wheel Drive', 5, '€71,350', '£69,100'),
(58, 'Tesla Cybertruck Single Motor', 'Battery Electric Vehicle |       100 kWh ', '7.0 sec', '180 km/h', '390 km', '256 Wh/km', '740 km/h', 'Rear Wheel Drive', 7, '€45,000', '£39,000'),
(59, 'Tesla Cybertruck Dual Motor', 'Battery Electric Vehicle |       120 kWh ', '5.0 sec', '190 km/h', '460 km', '261 Wh/km', '710 km/h', 'All Wheel Drive', 7, '€55,000', '£48,000'),
(60, 'Tesla Cybertruck Tri Motor', 'Battery Electric Vehicle |       200 kWh ', '3.0 sec', '210 km/h', '750 km', '267 Wh/km', '710 km/h', 'All Wheel Drive', 7, '€75,000', '£68,000'),
(61, 'Lexus UX 300e', 'Battery Electric Vehicle |       50 kWh ', '7.5 sec', '160 km/h', '260 km', '192 Wh/km', '150 km/h', 'Front Wheel Drive', 5, '€47,550', '£43,900'),
(62, 'BMW i4 eDrive40', 'Battery Electric Vehicle |       80.7 kWh', '5.7 sec', '190 km/h', '475 km', '170 Wh/km', '660 km/h', 'Rear Wheel Drive', 5, '€58,300', '£51,905'),
(63, 'Audi e-tron 55 quattro', 'Battery Electric Vehicle |       86.5 kWh', '5.7 sec', '200 km/h', '365 km', '237 Wh/km', '590 km/h', 'All Wheel Drive', 5, 'N/A', '£71,500'),
(64, 'Aiways U5 ', 'Battery Electric Vehicle |       63 kWh ', '7.5 sec', '150 km/h', '335 km', '188 Wh/km', '350 km/h', 'Front Wheel Drive', 5, '€35,993', 'N/A'),
(65, 'Renault Twingo Electric', 'Battery Electric Vehicle |       21.3 kWh', '12.6 sec', '135 km/h', '130 km', '164 Wh/km', '-', 'Rear Wheel Drive', 4, '€24,790', 'N/A'),
(66, 'Audi e-tron S 55 quattro', 'Battery Electric Vehicle |       86.5 kWh', '4.5 sec', '210 km/h', '320 km', '270 Wh/km', '510 km/h', 'All Wheel Drive', 5, '€93,800', '£87,000'),
(67, 'Audi e-tron S Sportback 55 quattro', 'Battery Electric Vehicle |       86.5 kWh', '4.5 sec', '210 km/h', '335 km', '258 Wh/km', '540 km/h', 'All Wheel Drive', 5, '€96,050', '£88,700'),
(68, 'Volkswagen ID.4 1st', 'Battery Electric Vehicle |       77 kWh', '8.5 sec', '160 km/h', '410 km', '188 Wh/km', '500 km/h', 'Rear Wheel Drive', 5, 'N/A', '£40,800'),
(69, 'Byton M-Byte 95 kWh 2WD', 'Battery Electric Vehicle |       95 kWh ', '7.5 sec', '190 km/h', '400 km', '238 Wh/km', '480 km/h', 'Rear Wheel Drive', 5, '€62,000', '£57,500'),
(70, 'Fiat 500e Cabrio', 'Battery Electric Vehicle |       37.3 kWh ', '9.0 sec', '150 km/h', '245 km', '152 Wh/km', '410 km/h', 'Front Wheel Drive', 4, '€30,560', '£26,645'),
(71, 'Opel Mokka-e ', 'Battery Electric Vehicle |       45 kWh ', '8.5 sec', '150 km/h', '255 km', '176 Wh/km', '340 km/h', 'Front Wheel Drive', 5, '€34,110', '£30,540'),
(72, 'Skoda Enyaq iV 60', 'Battery Electric Vehicle |       58 kWh', '8.7 sec', '160 km/h', '330 km', '176 Wh/km', '420 km/h', 'Rear Wheel Drive', 5, '€38,850', '£31,995'),
(73, 'Skoda Enyaq iV 80', 'Battery Electric Vehicle |       77 kWh', '8.6 sec', '160 km/h', '420 km', '183 Wh/km', '510 km/h', 'Rear Wheel Drive', 5, '€43,950', '£39,350'),
(74, 'Skoda Enyaq iV 80X', 'Battery Electric Vehicle |       77 kWh', '6.9 sec', '160 km/h', '405 km', '190 Wh/km', '500 km/h', 'All Wheel Drive', 5, '€47,000', '£42,000'),
(75, 'Skoda Enyaq iV RS', 'Battery Electric Vehicle |       77 kWh', '6.2 sec', '180 km/h', '395 km', '195 Wh/km', '480 km/h', 'All Wheel Drive', 5, '€50,000', '£45,000'),
(76, 'Fiat 500e Hatchback 42 kWh', 'Battery Electric Vehicle |       37.3 kWh ', '9.0 sec', '150 km/h', '250 km', '149 Wh/km', '420 km/h', 'Front Wheel Drive', 4, '€27,560', '£23,995'),
(77, 'Citroen e-C4 ', 'Battery Electric Vehicle |       45 kWh ', '9.7 sec', '150 km/h', '250 km', '180 Wh/km', '330 km/h', 'Front Wheel Drive', 5, '€34,640', '£30,895'),
(78, 'Jaguar I-Pace EV400', 'Battery Electric Vehicle |       84.7 kWh', '4.8 sec', '200 km/h', '365 km', '232 Wh/km', '340 km/h', 'All Wheel Drive', 5, '€77,300', '£65,195'),
(79, 'Kia e-Soul 64 kWh', 'Battery Electric Vehicle |       64 kWh', '7.9 sec', '167 km/h', '370 km', '173 Wh/km', '350 km/h', 'Front Wheel Drive', 5, '€37,790', 'N/A'),
(80, 'Kia e-Soul 39 kWh', 'Battery Electric Vehicle |       39.2 kWh', '9.9 sec', '157 km/h', '230 km', '170 Wh/km', '220 km/h', 'Front Wheel Drive', 5, '€33,990', 'N/A'),
(81, 'Audi Q4 Sportback e-tron 35', 'Battery Electric Vehicle |       51.5 kWh', '9.0 sec', '160 km/h', '295 km', '175 Wh/km', '410 km/h', 'Rear Wheel Drive', 5, '€43,900', '£42,250'),
(82, 'Nissan Ariya 63kWh', 'Battery Electric Vehicle |       63 kWh', '7.5 sec', '160 km/h', '335 km', '188 Wh/km', '450 km/h', 'Front Wheel Drive', 5, '€45,000', '£40,000'),
(83, 'Nissan Ariya 87kWh', 'Battery Electric Vehicle |       87 kWh', '7.6 sec', '160 km/h', '445 km', '196 Wh/km', '530 km/h', 'Front Wheel Drive', 5, '€50,000', '£45,000'),
(84, 'Nissan Ariya e-4ORCE 63kWh', 'Battery Electric Vehicle |       63 kWh', '5.9 sec', '200 km/h', '325 km', '194 Wh/km', '440 km/h', 'All Wheel Drive', 5, '€50,000', '£45,000'),
(85, 'Nissan Ariya e-4ORCE 87kWh', 'Battery Electric Vehicle |       87 kWh', '5.7 sec', '200 km/h', '420 km', '207 Wh/km', '500 km/h', 'All Wheel Drive', 5, '€57,500', '£52,500'),
(86, 'Nissan Ariya e-4ORCE 87kWh Performance', 'Battery Electric Vehicle |       87 kWh', '5.1 sec', '200 km/h', '385 km', '226 Wh/km', '460 km/h', 'All Wheel Drive', 5, '€65,000', '£57,500'),
(87, 'Volkswagen ID.3 Pro Performance', 'Battery Electric Vehicle |       58 kWh', '7.3 sec', '160 km/h', '350 km', '166 Wh/km', '440 km/h', 'Rear Wheel Drive', 5, '€36,495', '£29,740'),
(88, 'MG MG5 EV', 'Battery Electric Vehicle |       48.8 kWh', '7.7 sec', '185 km/h', '295 km', '165 Wh/km', '340 km/h', 'Front Wheel Drive', 5, 'N/A', '£25,095'),
(89, 'Volkswagen ID.4 Pro Performance', 'Battery Electric Vehicle |       77 kWh', '8.5 sec', '160 km/h', '410 km', '188 Wh/km', '500 km/h', 'Rear Wheel Drive', 5, '€44,450', '£41,570'),
(90, 'Mercedes EQV 300 Extra-Long', 'Battery Electric Vehicle |       90 kWh', '12.1 sec', '160 km/h', '320 km', '281 Wh/km', '280 km/h', 'Front Wheel Drive', 7, '€72,281', 'N/A'),
(91, 'Lucid Air Grand Touring', 'Battery Electric Vehicle |       110 kWh ', '3.2 sec', '270 km/h', '660 km', '167 Wh/km', '1380 km/h', 'All Wheel Drive', 5, '€140,000', '£125,000'),
(92, 'Lucid Air Touring', 'Battery Electric Vehicle |       85 kWh ', '3.4 sec', '250 km/h', '530 km', '160 Wh/km', '1390 km/h', 'All Wheel Drive', 5, '€95,000', '£90,000'),
(93, 'Lucid Air Pure', 'Battery Electric Vehicle |       85 kWh ', '4.2 sec', '200 km/h', '540 km', '157 Wh/km', '1410 km/h', 'Rear Wheel Drive', 5, '€80,000', '£70,000'),
(94, 'Dacia Spring Electric', 'Battery Electric Vehicle |       26.8 kWh ', '15.0 sec', '125 km/h', '170 km', '158 Wh/km', '120 km/h', 'Front Wheel Drive', 4, '€20,490', 'N/A'),
(95, 'Tesla Model 3 Standard Range Plus LFP', 'Battery Electric Vehicle |       51 kWh ', '5.6 sec', '225 km/h', '340 km', '150 Wh/km', '570 km/h', 'Rear Wheel Drive', 5, '€43,560', '£40,990'),
(96, 'Tesla Model 3 Long Range Dual Motor', 'Battery Electric Vehicle |       70 kWh ', '4.4 sec', '233 km/h', '455 km', '154 Wh/km', '570 km/h', 'All Wheel Drive', 5, 'N/A', '£48,490'),
(97, 'Tesla Model 3 Performance', 'Battery Electric Vehicle |       76 kWh ', '3.3 sec', '261 km/h', '470 km', '162 Wh/km', '790 km/h', 'All Wheel Drive', 5, '€58,560', '£59,990'),
(98, 'Fiat 500e Hatchback 24 kWh', 'Battery Electric Vehicle |       23.8 kWh ', '9.5 sec', '135 km/h', '165 km', '144 Wh/km', '260 km/h', 'Front Wheel Drive', 4, '€23,560', '£20,495'),
(99, 'Fiat 500e 3+1', 'Battery Electric Vehicle |       37.3 kWh ', '9.0 sec', '150 km/h', '245 km', '152 Wh/km', '410 km/h', 'Front Wheel Drive', 4, '€29,560', 'N/A'),
(100, 'Mercedes EQC 400 4MATIC', 'Battery Electric Vehicle |       80 kWh', '5.1 sec', '180 km/h', '370 km', '216 Wh/km', '440 km/h', 'All Wheel Drive', 5, '€66,069', '£65,720'),
(101, 'Kia e-Niro 64 kWh', 'Battery Electric Vehicle |       64 kWh', '7.8 sec', '167 km/h', '370 km', '173 Wh/km', '350 km/h', 'Front Wheel Drive', 5, '€39,090', '£32,445'),
(102, 'Kia e-Niro 39 kWh', 'Battery Electric Vehicle |       39.2 kWh', '9.8 sec', '155 km/h', '235 km', '167 Wh/km', '230 km/h', 'Front Wheel Drive', 5, '€35,290', '£30,345'),
(103, 'Citroen e-SpaceTourer XS 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€50,880', 'N/A'),
(104, 'Citroen e-SpaceTourer M 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€51,440', '£31,995'),
(105, 'Citroen e-SpaceTourer XL 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '180 km', '250 Wh/km', '240 km/h', 'Front Wheel Drive', 7, '€52,230', 'N/A'),
(106, 'Citroen e-SpaceTourer M 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.3 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€57,440', 'N/A'),
(107, 'Citroen e-SpaceTourer XL 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.3 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€58,230', 'N/A'),
(108, 'Opel Zafira-e Life S 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€56,700', 'N/A'),
(109, 'Opel Zafira-e Life M 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€53,800', 'N/A'),
(110, 'Opel Zafira-e Life L 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '180 km', '250 Wh/km', '240 km/h', 'Front Wheel Drive', 7, '€54,625', '£49,465'),
(111, 'Opel Zafira-e Life M 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.3 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€59,800', 'N/A'),
(112, 'Opel Zafira-e Life L 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.3 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€60,625', 'N/A'),
(113, 'Peugeot e-Traveller Compact 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€50,880', 'N/A'),
(114, 'Peugeot e-Traveller Standard 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '13.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€55,900', '£49,065'),
(115, 'Peugeot e-Traveller Long 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '13.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€56,690', '£49,905'),
(116, 'Peugeot e-Traveller Standard 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.3 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€57,440', 'N/A'),
(117, 'Peugeot e-Traveller Long 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.3 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€58,230', 'N/A'),
(118, 'Audi e-tron 55 quattro', 'Battery Electric Vehicle |       86.5 kWh', '5.7 sec', '200 km/h', '365 km', '237 Wh/km', '590 km/h', 'All Wheel Drive', 5, '€81,500', 'N/A'),
(119, 'Audi e-tron Sportback 55 quattro', 'Battery Electric Vehicle |       86.5 kWh', '5.7 sec', '200 km/h', '375 km', '231 Wh/km', '600 km/h', 'All Wheel Drive', 5, '€83,750', 'N/A'),
(120, 'Seres 3 ', 'Battery Electric Vehicle |       52 kWh ', '8.9 sec', '155 km/h', '270 km', '193 Wh/km', '390 km/h', 'Front Wheel Drive', 5, 'N/A', 'N/A'),
(121, 'Hyundai IONIQ 5 Project 45', 'Battery Electric Vehicle |       72.6 kWh ', '5.2 sec', '185 km/h', '370 km', '196 Wh/km', '860 km/h', 'All Wheel Drive', 5, '€59,550', '£48,000'),
(122, 'Porsche Taycan ', 'Battery Electric Vehicle |       71 kWh', '5.4 sec', '230 km/h', '395 km', '180 Wh/km', '790 km/h', 'Rear Wheel Drive', 4, '€83,520', '£70,690'),
(123, 'Porsche Taycan Plus', 'Battery Electric Vehicle |       83.7 kWh', '5.4 sec', '230 km/h', '460 km', '182 Wh/km', '960 km/h', 'Rear Wheel Drive', 4, '€89,244', '£74,739'),
(124, 'Tesla Model S Long Range', 'Battery Electric Vehicle |       90 kWh ', '3.2 sec', '250 km/h', '555 km', '162 Wh/km', '830 km/h', 'All Wheel Drive', 5, '€86,990', '£83,980'),
(125, 'Tesla Model S Plaid', 'Battery Electric Vehicle |       90 kWh ', '2.1 sec', '322 km/h', '535 km', '168 Wh/km', '800 km/h', 'All Wheel Drive', 5, '€126,990', '£118,980'),
(126, 'Tesla Model X Long Range', 'Battery Electric Vehicle |       90 kWh ', '3.9 sec', '250 km/h', '475 km', '189 Wh/km', '710 km/h', 'All Wheel Drive', 7, '€95,990', '£90,980'),
(127, 'Tesla Model X Plaid', 'Battery Electric Vehicle |       90 kWh ', '2.6 sec', '262 km/h', '455 km', '198 Wh/km', '680 km/h', 'All Wheel Drive', 7, '€116,990', '£110,980'),
(128, 'Mini Cooper SE ', 'Battery Electric Vehicle |       28.9 kWh', '7.3 sec', '150 km/h', '185 km', '156 Wh/km', '260 km/h', 'Front Wheel Drive', 4, '€32,500', '£26,000'),
(129, 'JAC iEV7s ', 'Battery Electric Vehicle |       39 kWh', '12.0 sec', '132 km/h', '225 km', '173 Wh/km', '160 km/h', 'Front Wheel Drive', 5, 'N/A', 'N/A'),
(130, 'Volkswagen ID.4 Pure Performance', 'Battery Electric Vehicle |       52 kWh', '9.0 sec', '160 km/h', '285 km', '182 Wh/km', '410 km/h', 'Rear Wheel Drive', 5, '€38,450', '£36,030'),
(131, 'Audi e-tron GT quattro', 'Battery Electric Vehicle |       85 kWh', '4.1 sec', '245 km/h', '420 km', '202 Wh/km', '840 km/h', 'All Wheel Drive', 4, '€99,800', '£79,900'),
(132, 'Volvo C40 Recharge', 'Battery Electric Vehicle |       75 kWh', '4.7 sec', '180 km/h', '340 km', '221 Wh/km', '440 km/h', 'All Wheel Drive', 5, '€62,050', '£57,400'),
(133, 'Hyundai Kona Electric 39 kWh', 'Battery Electric Vehicle |       39.2 kWh', '9.9 sec', '155 km/h', '250 km', '157 Wh/km', '210 km/h', 'Front Wheel Drive', 5, '€35,650', '£27,950'),
(134, 'Hyundai Kona Electric 64 kWh', 'Battery Electric Vehicle |       64 kWh', '7.9 sec', '167 km/h', '395 km', '162 Wh/km', '370 km/h', 'Front Wheel Drive', 5, '€41,850', '£32,550'),
(135, 'Porsche Taycan 4S Cross Turismo', 'Battery Electric Vehicle |       83.7 kWh', '4.1 sec', '240 km/h', '405 km', '207 Wh/km', '850 km/h', 'All Wheel Drive', 4, '€111,842', '£87,820'),
(136, 'Porsche Taycan Turbo Cross Turismo', 'Battery Electric Vehicle |       83.7 kWh', '3.3 sec', '250 km/h', '385 km', '217 Wh/km', '800 km/h', 'All Wheel Drive', 4, '€154,444', '£116,950'),
(137, 'Porsche Taycan Turbo S Cross Turismo', 'Battery Electric Vehicle |       83.7 kWh', '2.9 sec', '250 km/h', '380 km', '220 Wh/km', '790 km/h', 'All Wheel Drive', 4, '€187,746', '£139,910'),
(138, 'Kia EV6 GT', 'Battery Electric Vehicle |       77.4 kWh ', '3.5 sec', '260 km/h', '395 km', '196 Wh/km', '920 km/h', 'All Wheel Drive', 5, '€65,990', '£58,295'),
(139, 'BMW iX xDrive40', 'Battery Electric Vehicle |       71 kWh', '6.1 sec', '200 km/h', '350 km', '203 Wh/km', '470 km/h', 'All Wheel Drive', 5, '€77,300', '£69,905'),
(140, 'BMW iX xDrive50', 'Battery Electric Vehicle |       105.2 kWh', '4.6 sec', '200 km/h', '505 km', '208 Wh/km', '620 km/h', 'All Wheel Drive', 5, '€98,000', '£91,905'),
(141, 'MG MG5 Electric', 'Battery Electric Vehicle |       57 kWh ', '8.3 sec', '180 km/h', '340 km', '168 Wh/km', '440 km/h', 'Front Wheel Drive', 5, '€35,000', 'N/A'),
(142, 'MG Marvel R Performance', 'Battery Electric Vehicle |       65 kWh ', '4.9 sec', '200 km/h', '330 km', '197 Wh/km', '380 km/h', 'All Wheel Drive', 5, '€50,000', 'N/A'),
(143, 'Hyundai IONIQ 5 Standard Range 2WD', 'Battery Electric Vehicle |       58 kWh ', '8.5 sec', '185 km/h', '310 km', '187 Wh/km', '720 km/h', 'Rear Wheel Drive', 5, '€41,900', '£36,995'),
(144, 'Hyundai IONIQ 5 Standard Range AWD', 'Battery Electric Vehicle |       58 kWh ', '6.1 sec', '185 km/h', '305 km', '190 Wh/km', '710 km/h', 'All Wheel Drive', 5, '€45,700', 'N/A'),
(145, 'Hyundai IONIQ 5 Long Range 2WD', 'Battery Electric Vehicle |       72.6 kWh ', '7.4 sec', '185 km/h', '385 km', '189 Wh/km', '890 km/h', 'Rear Wheel Drive', 5, '€45,100', '£41,945'),
(146, 'Hyundai IONIQ 5 Long Range AWD', 'Battery Electric Vehicle |       72.6 kWh ', '5.2 sec', '185 km/h', '375 km', '194 Wh/km', '870 km/h', 'All Wheel Drive', 5, '€48,900', '£45,145'),
(147, 'Kia EV6 Standard Range 2WD', 'Battery Electric Vehicle |       58 kWh ', '8.5 sec', '185 km/h', '320 km', '181 Wh/km', '740 km/h', 'Rear Wheel Drive', 5, '€44,990', '£40,985'),
(148, 'Kia EV6 Long Range 2WD', 'Battery Electric Vehicle |       77.4 kWh ', '7.5 sec', '185 km/h', '420 km', '184 Wh/km', '980 km/h', 'Rear Wheel Drive', 5, '€54,990', '£48,000'),
(149, 'Kia EV6 Long Range AWD', 'Battery Electric Vehicle |       77.4 kWh ', '5.4 sec', '185 km/h', '410 km', '189 Wh/km', '950 km/h', 'All Wheel Drive', 5, '€56,000', '£52,000'),
(150, 'Mercedes EQS 450+', 'Battery Electric Vehicle |       107.8 kWh', '6.2 sec', '210 km/h', '640 km', '168 Wh/km', '840 km/h', 'Rear Wheel Drive', 5, '€106,374', '£95,000'),
(151, 'Mercedes EQS 580 4MATIC', 'Battery Electric Vehicle |       107.8 kWh', '4.3 sec', '210 km/h', '610 km', '177 Wh/km', '800 km/h', 'All Wheel Drive', 5, '€135,529', '£115,000'),
(152, 'Tesla Model 3 Standard Range Plus', 'Battery Electric Vehicle |       50 kWh ', '5.6 sec', '225 km/h', '340 km', '147 Wh/km', '680 km/h', 'Rear Wheel Drive', 5, '€43,560', '£40,990'),
(153, 'Polestar 2 Standard Range Single Motor', 'Battery Electric Vehicle |       61 kWh ', '7.4 sec', '160 km/h', '350 km', '174 Wh/km', '450 km/h', 'Front Wheel Drive', 5, '€46,500', '£39,900'),
(154, 'Polestar 2 Long Range Single Motor', 'Battery Electric Vehicle |       75 kWh ', '7.4 sec', '160 km/h', '425 km', '176 Wh/km', '550 km/h', 'Front Wheel Drive', 5, '€49,500', '£42,900'),
(155, 'Polestar 2 Long Range Dual Motor', 'Battery Electric Vehicle |       75 kWh ', '4.7 sec', '205 km/h', '395 km', '190 Wh/km', '510 km/h', 'All Wheel Drive', 5, '€52,500', '£45,900'),
(156, 'Volkswagen ID.4 Pure', 'Battery Electric Vehicle |       52 kWh', '10.9 sec', '160 km/h', '285 km', '182 Wh/km', '410 km/h', 'Rear Wheel Drive', 5, '€36,950', '£32,150'),
(157, 'Audi Q4 e-tron 40', 'Battery Electric Vehicle |       76.6 kWh', '8.5 sec', '160 km/h', '405 km', '189 Wh/km', '500 km/h', 'Rear Wheel Drive', 5, '€47,500', '£44,990'),
(158, 'Audi Q4 e-tron 50 quattro', 'Battery Electric Vehicle |       76.6 kWh', '6.2 sec', '180 km/h', '385 km', '199 Wh/km', '470 km/h', 'All Wheel Drive', 5, '€53,600', '£51,370'),
(159, 'Audi Q4 Sportback e-tron 50 quattro', 'Battery Electric Vehicle |       76.6 kWh', '6.2 sec', '180 km/h', '400 km', '192 Wh/km', '490 km/h', 'All Wheel Drive', 5, '€55,600', '£52,870'),
(160, 'Mercedes EQB 350 4MATIC', 'Battery Electric Vehicle |       66.5 kWh', '6.5 sec', '160 km/h', '340 km', '196 Wh/km', '400 km/h', 'All Wheel Drive', 7, '€60,000', '£50,000'),
(161, 'Volkswagen ID.4 GTX', 'Battery Electric Vehicle |       77 kWh', '6.2 sec', '180 km/h', '400 km', '193 Wh/km', '490 km/h', 'All Wheel Drive', 5, '€50,415', '£55,540'),
(162, 'Mercedes EQA 300 4MATIC', 'Battery Electric Vehicle |       66.5 kWh', '7.7 sec', '160 km/h', '350 km', '190 Wh/km', '420 km/h', 'All Wheel Drive', 5, '€53,538', 'N/A'),
(163, 'Mercedes EQA 350 4MATIC', 'Battery Electric Vehicle |       66.5 kWh', '6.0 sec', '160 km/h', '350 km', '190 Wh/km', '420 km/h', 'All Wheel Drive', 5, '€56,216', 'N/A'),
(164, 'Toyota PROACE Verso M 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '185 km', '243 Wh/km', '250 km/h', 'Front Wheel Drive', 7, '€58,530', 'N/A'),
(165, 'Toyota PROACE Verso L 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '12.1 sec', '130 km/h', '180 km', '250 Wh/km', '240 km/h', 'Front Wheel Drive', 7, '€59,385', 'N/A'),
(166, 'Toyota PROACE Verso M 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.1 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€64,530', 'N/A'),
(167, 'Toyota PROACE Verso L 75 kWh', 'Battery Electric Vehicle |       68 kWh ', '13.1 sec', '130 km/h', '270 km', '252 Wh/km', '290 km/h', 'Front Wheel Drive', 7, '€65,385', 'N/A'),
(168, 'CUPRA Born 150 kW - 62 kWh', 'Battery Electric Vehicle |       58 kWh', '7.3 sec', '160 km/h', '350 km', '166 Wh/km', '440 km/h', 'Rear Wheel Drive', 5, '€36,770', '£30,500'),
(169, 'CUPRA Born 170 kW - 62 kWh', 'Battery Electric Vehicle |       58 kWh', '6.6 sec', '160 km/h', '345 km', '168 Wh/km', '430 km/h', 'Rear Wheel Drive', 5, '€39,000', '£31,500'),
(170, 'CUPRA Born 170 kW - 82 kWh', 'Battery Electric Vehicle |       77 kWh', '7.0 sec', '160 km/h', '450 km', '171 Wh/km', '550 km/h', 'Rear Wheel Drive', 5, '€43,000', '£42,000'),
(171, 'BMW i4 M50', 'Battery Electric Vehicle |       80.7 kWh', '3.9 sec', '225 km/h', '450 km', '179 Wh/km', '630 km/h', 'All Wheel Drive', 5, '€69,900', '£63,905'),
(172, 'Volvo XC40 Recharge Twin Pure Electric', 'Battery Electric Vehicle |       75 kWh', '4.9 sec', '180 km/h', '340 km', '221 Wh/km', '440 km/h', 'All Wheel Drive', 5, '€59,250', '£49,950'),
(173, 'Renault Megane E-Tech Electric', 'Battery Electric Vehicle |       60 kWh ', '8.0 sec', '160 km/h', '335 km', '179 Wh/km', '480 km/h', 'Front Wheel Drive', 5, '€38,000', '£32,500'),
(174, 'Peugeot e-Rifter Standard 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '11.7 sec', '135 km/h', '200 km', '225 Wh/km', '270 km/h', 'Front Wheel Drive', 7, '€37,590', '£30,375'),
(175, 'Peugeot e-Rifter Long 50 kWh', 'Battery Electric Vehicle |       45 kWh ', '11.7 sec', '135 km/h', '195 km', '231 Wh/km', '260 km/h', 'Front Wheel Drive', 7, '€42,590', '£32,455'),
(176, 'MG Marvel R ', 'Battery Electric Vehicle |       65 kWh ', '7.9 sec', '200 km/h', '340 km', '191 Wh/km', '390 km/h', 'Rear Wheel Drive', 5, '€40,000', 'N/A'),
(177, 'Tesla Model 3 Long Range Dual Motor', 'Battery Electric Vehicle |       76 kWh ', '4.4 sec', '233 km/h', '490 km', '155 Wh/km', '820 km/h', 'All Wheel Drive', 5, '€53,560', 'N/A'),
(178, 'MG MG5 EV Long Range', 'Battery Electric Vehicle |       57 kWh ', '7.7 sec', '185 km/h', '340 km', '168 Wh/km', '340 km/h', 'Front Wheel Drive', 5, 'N/A', '£26,495'),
(179, 'Audi Q4 e-tron 45 quattro', 'Battery Electric Vehicle |       76.6 kWh', '6.9 sec', '180 km/h', '385 km', '199 Wh/km', '470 km/h', 'All Wheel Drive', 5, '€50,900', 'N/A'),
(180, 'Audi Q4 Sportback e-tron 40', 'Battery Electric Vehicle |       76.6 kWh', '8.5 sec', '160 km/h', '425 km', '180 Wh/km', '520 km/h', 'Rear Wheel Drive', 5, '€49,500', 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `electriccardata_clean`
--

CREATE TABLE `electriccardata_clean` (
  `id` int(11) NOT NULL,
  `Brand` varchar(11) DEFAULT NULL,
  `Model` varchar(31) DEFAULT NULL,
  `AccelSec` double DEFAULT NULL,
  `TopSpeed_KmH` double DEFAULT NULL,
  `Range_Km` double DEFAULT NULL,
  `Efficiency_WhKm` double DEFAULT NULL,
  `FastCharge_KmH` double DEFAULT NULL,
  `RapidCharge` varchar(11) DEFAULT NULL,
  `PowerTrain` varchar(10) DEFAULT NULL,
  `PlugType` varchar(14) DEFAULT NULL,
  `BodyStyle` varchar(9) DEFAULT NULL,
  `Segment` varchar(7) DEFAULT NULL,
  `Seats` double DEFAULT NULL,
  `PriceEuro` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `electriccardata_clean`
--

INSERT INTO `electriccardata_clean` (`id`, `Brand`, `Model`, `AccelSec`, `TopSpeed_KmH`, `Range_Km`, `Efficiency_WhKm`, `FastCharge_KmH`, `RapidCharge`, `PowerTrain`, `PlugType`, `BodyStyle`, `Segment`, `Seats`, `PriceEuro`) VALUES
(1, 'Tesla ', 'Model 3 Long Range Dual Motor', 4.6, 233, 450, 161, 940, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'D', 5, 55480),
(2, 'Volkswagen ', 'ID.3 Pure', 10, 160, 270, 167, 250, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 30000),
(3, 'Polestar ', '2', 4.7, 210, 400, 181, 620, 'Yes', 'AWD', 'Type 2 CCS', 'Liftback', 'D', 5, 56440),
(4, 'BMW ', 'iX3 ', 6.8, 180, 360, 206, 560, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'D', 5, 68040),
(5, 'Honda ', 'e ', 9.5, 145, 170, 168, 190, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'B', 4, 32997),
(6, 'Lucid ', 'Air ', 2.8, 250, 610, 180, 620, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'F', 5, 105000),
(7, 'Volkswagen ', 'e-Golf ', 9.6, 150, 190, 168, 220, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 31900),
(8, 'Peugeot ', 'e-208 ', 8.1, 150, 275, 164, 420, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 5, 29682),
(9, 'Tesla ', 'Model 3 Standard Range Plus', 5.6, 225, 310, 153, 650, 'Yes', 'RWD', 'Type 2 CCS', 'Sedan', 'D', 5, 46380),
(10, 'Audi ', 'Q4 e-tron ', 6.3, 180, 400, 193, 540, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 5, 55000),
(11, 'Mercedes ', 'EQC 400 4MATIC', 5.1, 180, 370, 216, 440, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 5, 69484),
(12, 'Nissan ', 'Leaf ', 7.9, 144, 220, 164, 230, 'Yes', 'FWD', 'Type 2 CHAdeMO', 'Hatchback', 'C', 5, 29234),
(13, 'Hyundai ', 'Kona Electric 64 kWh', 7.9, 167, 400, 160, 380, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 40795),
(14, 'BMW ', 'i4 ', 4, 200, 450, 178, 650, 'Yes', 'RWD', 'Type 2 CCS', 'Sedan', 'D', 5, 65000),
(15, 'Hyundai ', 'IONIQ Electric', 9.7, 165, 250, 153, 210, 'Yes', 'FWD', 'Type 2 CCS', 'Liftback', 'C', 5, 34459),
(16, 'Volkswagen ', 'ID.3 Pro S', 7.9, 160, 440, 175, 590, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'C', 4, 40936),
(17, 'Porsche ', 'Taycan Turbo S', 2.8, 260, 375, 223, 780, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'F', 4, 180781),
(18, 'Volkswagen ', 'e-Up! ', 11.9, 130, 195, 166, 170, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'A', 4, 21421),
(19, 'MG ', 'ZS EV', 8.2, 140, 220, 193, 260, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 30000),
(20, 'Mini ', 'Cooper SE ', 7.3, 150, 185, 156, 260, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 4, 31681),
(21, 'Opel ', 'Corsa-e ', 8.1, 150, 275, 164, 420, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 5, 29146),
(22, 'Tesla ', 'Model Y Long Range Dual Motor', 5.1, 217, 425, 171, 930, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 7, 58620),
(23, 'Skoda ', 'Enyaq iV 50', 10, 160, 290, 179, 230, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'C', 5, 35000),
(24, 'Audi ', 'e-tron GT ', 3.5, 240, 425, 197, 850, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'F', 4, 125000),
(25, 'Tesla ', 'Model 3 Long Range Performance', 3.4, 261, 435, 167, 910, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'D', 5, 61480),
(26, 'Volkswagen ', 'ID.4 ', 7.5, 160, 420, 183, 560, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'C', 5, 45000),
(27, 'Volkswagen ', 'ID.3 Pro', 9, 160, 350, 166, 490, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 33000),
(28, 'Volvo ', 'XC40 P8 AWD Recharge', 4.9, 180, 375, 200, 470, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'C', 5, 60437),
(29, 'BMW ', 'i3 120 Ah', 7.3, 150, 235, 161, 270, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'B', 4, 38017),
(30, 'Peugeot ', 'e-2008 SUV ', 8.5, 150, 250, 180, 380, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 34361),
(31, 'Audi ', 'e-tron 50 quattro', 6.8, 190, 280, 231, 450, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 67358),
(32, 'Kia ', 'e-Niro 64 kWh', 7.8, 167, 370, 173, 350, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'C', 5, 38105),
(33, 'Renault ', 'Zoe ZE50 R110', 11.4, 135, 315, 165, 230, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 5, 31184),
(34, 'Tesla ', 'Cybertruck Tri Motor', 3, 210, 750, 267, 710, 'Yes', 'AWD', 'Type 2 CCS', 'Pickup', 'N', 6, 75000),
(35, 'Mazda ', 'MX-30 ', 9, 150, 180, 178, 240, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'C', 5, 32646),
(36, 'Nissan ', 'Leaf e+', 7.3, 157, 325, 172, 390, 'Yes', 'FWD', 'Type 2 CHAdeMO', 'Hatchback', 'C', 5, 37237),
(37, 'Lexus ', 'UX 300e', 7.5, 160, 270, 193, 190, 'Yes', 'FWD', 'Type 2 CHAdeMO', 'SUV', 'C', 5, 50000),
(38, 'CUPRA ', 'el-Born ', 6.5, 160, 425, 181, 570, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'C', 4, 45000),
(39, 'Renault ', 'Zoe ZE50 R135', 9.5, 140, 310, 168, 230, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 5, 33133),
(40, 'Mercedes ', 'EQA ', 5, 200, 350, 171, 440, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'C', 5, 45000),
(41, 'Tesla ', 'Model S Long Range', 3.8, 250, 515, 184, 560, 'Yes', 'AWD', 'Type 2', 'Liftback', 'F', 5, 79990),
(42, 'Hyundai ', 'Kona Electric 39 kWh', 9.9, 155, 255, 154, 210, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 33971),
(43, 'Audi ', 'e-tron Sportback 55 quattro', 5.7, 200, 380, 228, 610, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 81639),
(44, 'Skoda ', 'CITIGOe iV ', 12.3, 130, 195, 166, 170, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'A', 4, 24534),
(45, 'SEAT ', 'Mii Electric ', 12.3, 130, 195, 166, 170, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'A', 4, 20129),
(46, 'Kia ', 'e-Soul 64 kWh', 7.9, 167, 365, 175, 340, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 36837),
(47, 'Opel ', 'Ampera-e ', 7.3, 150, 335, 173, 210, 'Yes', 'FWD', 'Type 2 CCS', 'MPV', 'B', 5, 41906),
(48, 'Porsche ', 'Taycan 4S', 4, 250, 365, 195, 730, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'F', 4, 102945),
(49, 'Lightyear ', 'One ', 10, 150, 575, 104, 540, 'Yes', 'AWD', 'Type 2 CCS', 'Liftback', 'F', 5, 149000),
(50, 'Aiways ', 'U5 ', 9, 150, 335, 188, 350, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'C', 5, 36057),
(51, 'Audi ', 'e-tron 55 quattro', 5.7, 200, 365, 237, 590, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 79445),
(52, 'Tesla ', 'Roadster ', 2.1, 410, 970, 206, 920, 'Yes', 'AWD', 'Type 2 CCS', 'Cabrio', 'S', 4, 215000),
(53, 'Opel ', 'Mokka-e ', 8.5, 150, 255, 176, 390, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 35000),
(54, 'Skoda ', 'Enyaq iV 80', 8.8, 160, 420, 183, 560, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'C', 5, 40000),
(55, 'Tesla ', 'Model X Long Range', 4.6, 250, 450, 211, 490, 'Yes', 'AWD', 'Type 2', 'SUV', 'F', 7, 85990),
(56, 'Honda ', 'e Advance', 8.3, 145, 170, 168, 190, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'B', 4, 35921),
(57, 'DS ', '3 Crossback E-Tense', 8.7, 150, 250, 180, 380, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 37422),
(58, 'Renault ', 'Twingo ZE', 12.6, 135, 130, 164, 0, 'No', 'RWD', 'Type 2', 'Hatchback', 'A', 4, 24790),
(59, 'Citroen ', 'e-C4 ', 9.7, 150, 250, 180, 380, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'C', 5, 40000),
(60, 'Tesla ', 'Model S Performance', 2.5, 261, 505, 188, 550, 'Yes', 'AWD', 'Type 2', 'Liftback', 'F', 5, 96990),
(61, 'Renault ', 'Zoe ZE40 R110', 11.4, 135, 255, 161, 230, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 5, 29234),
(62, 'Tesla ', 'Model Y Long Range Performance', 3.7, 241, 410, 177, 900, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 7, 65620),
(63, 'Nissan ', 'Ariya 87kWh', 7.6, 160, 440, 198, 520, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 50000),
(64, 'Jaguar ', 'I-Pace ', 4.8, 200, 365, 232, 340, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 75351),
(65, 'Ford ', 'Mustang Mach-E ER RWD', 7, 180, 450, 200, 430, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'D', 5, 54475),
(66, 'Porsche ', 'Taycan 4S Plus', 4, 250, 425, 197, 890, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'F', 4, 109302),
(67, 'Nissan ', 'e-NV200 Evalia ', 14, 123, 190, 200, 190, 'Yes', 'FWD', 'Type 1 CHAdeMO', 'SPV', 'N', 7, 33246),
(68, 'Tesla ', 'Cybertruck Dual Motor', 5, 190, 460, 261, 710, 'Yes', 'AWD', 'Type 2 CCS', 'Pickup', 'N', 6, 55000),
(69, 'Renault ', 'Kangoo Maxi ZE 33', 22.4, 130, 160, 194, 0, 'No', 'FWD', 'Type 2', 'SPV', 'N', 5, 38000),
(70, 'Ford ', 'Mustang Mach-E ER AWD', 6, 180, 430, 209, 410, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 5, 62900),
(71, 'BMW ', 'i3s 120 Ah', 6.9, 160, 230, 165, 260, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'B', 4, 41526),
(72, 'Skoda ', 'Enyaq iV 80X', 7, 160, 400, 193, 540, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'C', 5, 45000),
(73, 'Porsche ', 'Taycan Cross Turismo ', 3.5, 250, 385, 217, 770, 'Yes', 'AWD', 'Type 2 CCS', 'Station', 'F', 4, 150000),
(74, 'Byton ', 'M-Byte 95 kWh 4WD', 5.5, 190, 390, 244, 460, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 64000),
(75, 'Sono ', 'Sion ', 9, 140, 225, 156, 270, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 25500),
(76, 'Kia ', 'e-Niro 39 kWh', 9.8, 155, 235, 167, 230, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'C', 5, 34400),
(77, 'Audi ', 'Q4 Sportback e-tron ', 6.3, 180, 410, 188, 550, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 5, 57500),
(78, 'Smart ', 'EQ forfour ', 12.7, 130, 95, 176, 0, 'No', 'RWD', 'Type 2', 'Hatchback', 'A', 4, 22030),
(79, 'Ford ', 'Mustang Mach-E SR AWD', 6, 180, 340, 206, 360, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'D', 5, 54000),
(80, 'Porsche ', 'Taycan Turbo', 3.2, 260, 390, 215, 810, 'Yes', 'AWD', 'Type 2 CCS', 'Sedan', 'F', 4, 148301),
(81, 'Volkswagen ', 'ID.3 1st', 7.3, 160, 340, 171, 470, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 38987),
(82, 'Tesla ', 'Model X Performance', 2.8, 250, 440, 216, 480, 'Yes', 'AWD', 'Type 2', 'SUV', 'F', 7, 102990),
(83, 'Smart ', 'EQ fortwo coupe', 11.6, 130, 100, 167, 0, 'No', 'RWD', 'Type 2', 'Hatchback', 'A', 2, 21387),
(84, 'Ford ', 'Mustang Mach-E SR RWD', 6.6, 180, 360, 194, 380, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'D', 5, 46900),
(85, 'Mercedes ', 'EQV 300 Long', 10, 140, 330, 273, 290, 'Yes', 'FWD', 'Type 2 CCS', 'SPV', 'N', 7, 70631),
(86, 'Fiat ', '500e Hatchback', 9, 150, 250, 168, 330, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'B', 4, 34900),
(87, 'Tesla ', 'Cybertruck Single Motor', 7, 180, 390, 256, 740, 'Yes', 'RWD', 'Type 2 CCS', 'Pickup', 'N', 6, 45000),
(88, 'Audi ', 'e-tron Sportback 50 quattro', 6.8, 190, 295, 219, 470, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 69551),
(89, 'Skoda ', 'Enyaq iV vRS', 6.2, 180, 400, 193, 540, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'C', 5, 47500),
(90, 'Skoda ', 'Enyaq iV 60', 9, 160, 320, 181, 440, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'C', 5, 37500),
(91, 'Audi ', 'e-tron S 55 quattro', 4.5, 210, 320, 270, 510, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 93800),
(92, 'Smart ', 'EQ fortwo cabrio', 11.9, 130, 95, 176, 0, 'No', 'RWD', 'Type 2', 'Cabrio', 'A', 2, 24565),
(93, 'Kia ', 'e-Soul 64 kWh', 7.9, 167, 365, 175, 320, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 36837),
(94, 'Nissan ', 'Ariya e-4ORCE 87kWh', 5.7, 200, 420, 207, 500, 'Yes', 'AWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 57500),
(95, 'Fiat ', '500e Convertible', 9, 150, 250, 168, 330, 'Yes', 'FWD', 'Type 2 CCS', 'Cabrio', 'B', 4, 37900),
(96, 'Volkswagen ', 'ID.3 Pro Performance', 7.3, 160, 340, 171, 470, 'Yes', 'RWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 35575),
(97, 'Kia ', 'e-Soul 39 kWh', 9.9, 157, 230, 170, 220, 'Yes', 'FWD', 'Type 2 CCS', 'SUV', 'B', 5, 33133),
(98, 'Byton ', 'M-Byte 72 kWh 2WD', 7.5, 190, 325, 222, 420, 'Yes', 'RWD', 'Type 2 CCS', 'SUV', 'E', 5, 53500),
(99, 'Nissan ', 'Ariya 63kWh', 7.5, 160, 330, 191, 440, 'Yes', 'FWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 45000),
(100, 'Audi ', 'e-tron S Sportback 55 quattro', 4.5, 210, 335, 258, 540, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 96050),
(101, 'Nissan ', 'Ariya e-4ORCE 63kWh', 5.9, 200, 325, 194, 440, 'Yes', 'AWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 50000),
(102, 'Nissan ', 'Ariya e-4ORCE 87kWh Performance', 5.1, 200, 375, 232, 450, 'Yes', 'AWD', 'Type 2 CCS', 'Hatchback', 'C', 5, 65000),
(103, 'Byton ', 'M-Byte 95 kWh 2WD', 7.5, 190, 400, 238, 480, 'Yes', 'AWD', 'Type 2 CCS', 'SUV', 'E', 5, 62000);

-- --------------------------------------------------------

--
-- Table structure for table `electric_vehicle_charging_station_list`
--

CREATE TABLE `electric_vehicle_charging_station_list` (
  `id` int(11) NOT NULL,
  `region` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `aux addres` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `type` varchar(255) NOT NULL,
  `power` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `electric_vehicle_charging_station_list`
--

INSERT INTO `electric_vehicle_charging_station_list` (`id`, `region`, `address`, `aux addres`, `latitude`, `longitude`, `type`, `power`, `service`) VALUES
(1, 'NDMC', 'Prithviraj Market, Rabindra Nagar, New Delhi- 110003', 'Electric Vehicle Charger, Prithviraj Market, Rabindra Nagar, New Delhi- 110003', 28.6007255, 77.2262524, 'DC-001', '15 kW', 'Self Service'),
(2, 'NDMC', 'Prithviraj Market, Rabindra Nagar, New Delhi- 110003', 'Electric Vehicle Charger, Prithviraj Market, Rabindra Nagar, New Delhi- 110003', 28.6007255, 77.2262524, 'DC-001', '15 kW', 'Self Service'),
(3, 'NDMC', 'Outside RWA Park, Jor Bagh Market, Jor Bagh Colony Road, New Delhi- 110003', 'Electric Vehicle Charger, Outside RWA Park, Jor Bagh Market, Jor Bagh Colony Road, New Delhi- 110003', 28.5883031, 77.2176972, 'DC-001', '15 kW', 'Self Service'),
(4, 'NDMC', 'Opposite Dory Pharmacy, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003', 'Electric Vehicle Charger, Opposite Dory Pharmacy, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003', 28.5826538, 77.2200872, 'DC-001', '15 kW', 'Self Service'),
(5, 'NDMC', 'Opposite Goel Opticals, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003', 'Electric Vehicle Charger, Opposite Goel Opticals, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003', 28.584485, 77.220316, 'DC-001', '15 kW', 'Self Service'),
(6, 'NDMC', 'Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi- 110021', 'Electric Vehicle Charger, Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi- 110021', 28.6023562, 77.1866178, 'DC-001', '15 kW', 'Self Service'),
(7, 'NDMC', 'Outside Westend Vedi Tailors, Bock M, Middle Circle, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Outside Westend Vedi Tailors, Bock M, Middle Circle, Connaught Place, New Delhi- 110001', 28.6336861, 77.2181403, 'DC-001', '15 kW', 'Self Service'),
(8, 'NDMC', 'Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001', 'Electric Vehicle Charger, Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001', 28.6304482, 77.2255578, 'DC-001', '15 kW', 'Self Service'),
(9, 'NDMC', 'Near Bikanervala, Yashwant Place, Chanakyapuri, New Delhi- 110021', 'Electric Vehicle Charger, Near Bikanervala, Yashwant Place, Chanakyapuri, New Delhi- 110021', 28.5838828, 77.163408, 'DC-001', '15 kW', 'Self Service'),
(10, 'NDMC', 'Khan Market, Rabindra Nagar, New Delhi- 110003', 'Electric Vehicle Charger, Khan Market, Rabindra Nagar, New Delhi- 110003', 28.6003333, 77.2268889, 'DC-001', '15 kW', 'Self Service'),
(11, 'NDMC', 'Outside Devinder Collections, Shankar Market, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Outside Devinder Collections, Shankar Market, Connaught Place, New Delhi- 110001', 28.633675, 77.2234929, 'DC-001', '15 kW', 'Self Service'),
(12, 'NDMC', 'Opposite HDFC Bank, M- Block, , Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Opposite HDFC Bank, M- Block, , Connaught Place, New Delhi- 110001', 28.6325843, 77.2229787, 'DC-001', '15 kW', 'Self Service'),
(13, 'NDMC', 'Outside Oriental Bank, Radial Road No. 7, Block M, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Outside Oriental Bank, Radial Road No. 7, Block M, Connaught Place, New Delhi- 110001', 28.6317294, 77.2221076, 'DC-001', '15 kW', 'Self Service'),
(14, 'NDMC', 'Outside Jain Bhawan, 12 Shaheed Bhagat Singh Marg, Gole Market, New Delhi- 110001', 'Electric Vehicle Charger, Outside Jain Bhawan, 12 Shaheed Bhagat Singh Marg, Gole Market, New Delhi- 110001', 28.633841, 77.2074439, 'DC-001', '15 kW', 'Self Service'),
(15, 'NDMC', 'NDMC Parking,  Near Ferns n Petals, Near BPCL Petrol Pump,  C Block RR5, Connaught Place,  New Delhi- 110001', 'Electric Vehicle Charger, NDMC Parking,  Near Ferns n Petals, Near BPCL Petrol Pump,  C Block RR5, Connaught Place,  New Delhi- 110001', 28.6281626, 77.2155151, 'DC-001', '15 kW', 'Self Service'),
(16, 'NDMC', 'NDMC Parking,  Near Croma, D Block RR5,  Opposite BPCL Petrol Pump,  Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, NDMC Parking,  Near Croma, D Block RR5,  Opposite BPCL Petrol Pump,  Connaught Place, New Delhi- 110001', 28.6281626, 77.2155151, 'DC-001', '15 kW', 'Self Service'),
(17, 'NDMC', 'Next to PVR Plaza, H Block RR4, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Next to PVR Plaza, H Block RR4, Connaught Place, New Delhi- 110001', 28.6350113, 77.2196112, 'DC-001', '15 kW', 'Self Service'),
(18, 'NDMC', 'Opposite South Indian Bank, Block E, RR6, Middle Circle, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Opposite South Indian Bank, Block E, RR6, Middle Circle, Connaught Place, New Delhi- 110001', 28.6338828, 77.2215424, 'DC-001', '15 kW', 'Self Service'),
(19, 'NDMC', 'Opposite HP Petrol Pump, Block E, Middle Circle, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Opposite HP Petrol Pump, Block E, Middle Circle, Connaught Place, New Delhi- 110001', 28.6318964, 77.2215824, 'DC-001', '15 kW', 'Self Service'),
(20, 'NDMC', 'Outside Standard Chartered Bank, Sardar Patel Bhawan, Sansad Marg, New Delhi- 110001', 'Electric Vehicle Charger, Outside Standard Chartered Bank, Sardar Patel Bhawan, Sansad Marg, New Delhi- 110001', 28.6242518, 77.2125818, 'DC-001', '15 kW', 'Self Service'),
(21, 'NDMC', 'Sarojini Nagar Market, Sarojini Nagar, New Delhi- 110023', 'Electric Vehicle Charger, Sarojini Nagar Market, Sarojini Nagar, New Delhi- 110023', 28.5772318, 77.1972385, 'DC-001', '15 kW', 'Self Service'),
(22, 'NDMC', 'Outside Iqbal Bros., G1, Block G, Connaught Place, New Delhi- 110001', 'Electric Vehicle Charger, Outside Iqbal Bros., G1, Block G, Connaught Place, New Delhi- 110001', 28.6337975, 77.2174553, 'DC-001', '15 kW', 'Self Service'),
(23, 'NDMC', 'Palika Maternity Hospital, Block 11, Lodhi Colony, Near Khanna Market, New Delhi 110003', 'Electric Vehicle Charger, Palika Maternity Hospital, Block 11, Lodhi Colony, Near Khanna Market, New Delhi 110003', 28.5838046, 77.2218225, 'DC-001', '15 kW', 'Self Service'),
(24, 'NDMC', 'Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 'Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 28.617783, 77.2129959, 'DC-001', '15 kW', 'Self Service'),
(25, 'NDMC', 'Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 'Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 28.617783, 77.2129959, 'DC-001', '15 kW', 'Self Service'),
(26, 'NDMC', 'FICCI, FICCI Chowk, Mandi House, Todermal Road Area, Mandi House, New Delhi110001', 'Electric Vehicle Charger, FICCI, FICCI Chowk, Mandi House, Todermal Road Area, Mandi House, New Delhi110001', 28.6268691, 77.231853, 'DC-001', '15 kW', 'Self Service'),
(27, 'NDMC', 'Charak Palika Hospital, C7 Lane, Moti Bagh 1, Blok F, New Moti Bagh, New Delhi 110021', 'Electric Vehicle Charger, Charak Palika Hospital, C7 Lane, Moti Bagh 1, Blok F, New Moti Bagh, New Delhi 110021', 28.5852879, 77.177094, 'DC-001', '15 kW', 'Self Service'),
(28, 'NDMC', 'PSOI Club, Chanakyapuri, New Delhi 110021', 'Electric Vehicle Charger, PSOI Club, Chanakyapuri, New Delhi 110021', 28.586617, 77.19364, 'DC-001', '15 kW', 'Self Service'),
(29, 'NDMC', 'PSOI Club, Chanakyapuri, New Delhi 110021', 'Electric Vehicle Charger, PSOI Club, Chanakyapuri, New Delhi 110021', 28.586617, 77.19364, 'DC-001', '15 kW', 'Self Service'),
(30, 'NDMC', 'Near Snow White, Block D, Inner Circle, Connaught Place, New Delhi 110001', 'Electric Vehicle Charger, Near Snow White, Block D, Inner Circle, Connaught Place, New Delhi 110001', 28.6336306, 77.220579, 'DC-001', '15 kW', 'Self Service'),
(31, 'NDMC', 'Outside Van Heusen Showroom, Block C, Inner Circle, Connaught Place, New Delhi 110001', 'Electric Vehicle Charger, Outside Van Heusen Showroom, Block C, Inner Circle, Connaught Place, New Delhi 110001', 28.6329899, 77.2179805, 'DC-001', '15 kW', 'Self Service'),
(32, 'NDMC', '16-B, Woodland Showroom, Block B, Connaught Place, New Delhi 110001', 'Electric Vehicle Charger, 16-B, Woodland Showroom, Block B, Connaught Place, New Delhi 110001', 28.6340719, 77.2187798, 'DC-001', '15 kW', 'Self Service'),
(33, 'CMRL', 'Nandanam Metro station Chennai  (CMRL)', 'Electric Vehicle Charger, Nandanam Metro station Chennai  (CMRL)', 12.9959222, 80.2102867, 'DC-001', '15 kW', 'Self Service'),
(34, 'CMRL', 'Nandanam Metro station Chennai  (CMRL)', 'Electric Vehicle Charger, Nandanam Metro station Chennai  (CMRL)', 12.9959222, 80.2102867, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(35, 'Maha Metro', 'Nagpur Airport Metro Station, Nagpur', 'Electric Vehicle Charger, Nagpur Airport Metro Station, Nagpur', 21.0868801, 79.0635586, 'DC-001', '15 kW', 'Self Service'),
(36, 'Maha Metro', 'Nagpur Airport Metro Station, Nagpur', 'Electric Vehicle Charger, Nagpur Airport Metro Station, Nagpur', 21.0868801, 79.0635586, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(37, 'NDMC', 'Yashwant Place, Chanakyapuri, New Delhi- 110021', 'Electric Vehicle Charger, Yashwant Place, Chanakyapuri, New Delhi- 110021', 28.5853056, 77.191, 'DC-001', '15 kW', 'Self Service'),
(38, 'NDMC', 'Outside Bharat Sanchar Bhawan, Ashoke Road, Janpath, New Delhi- 110001', 'Electric Vehicle Charger, Outside Bharat Sanchar Bhawan, Ashoke Road, Janpath, New Delhi- 110001', 28.6222241, 77.2142492, 'DC-001', '15 kW', 'Self Service'),
(39, 'NDMC', 'Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi- 110021', 'Electric Vehicle Charger, Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi- 110021', 28.6023562, 77.1866178, 'DC-001', '15 kW', 'Self Service'),
(40, 'NDMC', 'Charak Palika Hospital, C7 Lane, Moti Bagh 1, Blok F, New Moti Bagh, New Delhi 110021', 'Electric Vehicle Charger, Charak Palika Hospital, C7 Lane, Moti Bagh 1, Blok F, New Moti Bagh, New Delhi 110021', 28.5852879, 77.177094, 'DC-001', '15 kW', 'Self Service'),
(41, 'NDMC', 'Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 'Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 28.5907109, 77.2242844, 'DC-001', '15 kW', 'Self Service'),
(42, 'NDMC', 'Akashvani Bhawan, Sansad Marg, New Delhi 110001', 'Electric Vehicle Charger, Akashvani Bhawan, Sansad Marg, New Delhi 110001', 28.6245157, 77.2135555, 'DC-001', '15 kW', 'Self Service'),
(43, 'NDMC', 'Opposite IVORY Mart, F Block, Inner Circle, Connaught Place, New Delhi 110001', 'Electric Vehicle Charger, Opposite IVORY Mart, F Block, Inner Circle, Connaught Place, New Delhi 110001', 28.5503609, 77.2139161, 'DC-001', '15 kW', 'Self Service'),
(44, 'NDMC', 'Near ICICI Bank/Metro Gate No. 7 & 8, Block A, Inner Circle, Connaught Place, New Delhi 110001', 'Electric Vehicle Charger, Near ICICI Bank/Metro Gate No. 7 & 8, Block A, Inner Circle, Connaught Place, New Delhi 110001', 28.632723, 77.217847, 'DC-001', '15 kW', 'Self Service'),
(45, 'NDMC', 'Gopal Das Building, Barakhamba Road, Connaught Lane, Barakhamba, New Delhi110001', 'Electric Vehicle Charger, Gopal Das Building, Barakhamba Road, Connaught Lane, Barakhamba, New Delhi110001', 28.6325843, 77.2229787, 'DC-001', '15 kW', 'Self Service'),
(46, 'NDMC', 'Outside UCO Bank, Block H, RR3, Connaught Place, New Delhi', 'Electric Vehicle Charger, Outside UCO Bank, Block H, RR3, Connaught Place, New Delhi', 28.6351128, 77.2184205, 'DC-001', '15 kW', 'Self Service'),
(47, 'NDMC', 'Press Club of India, 1, Raisina Road, Windsor Place, New Delhi110001', 'Electric Vehicle Charger, Press Club of India, 1, Raisina Road, Windsor Place, New Delhi110001', 28.6171933, 77.2136452, 'DC-001', '15 kW', 'Self Service'),
(48, 'NDMC', 'Post Office, Laxmi Bai Nagar, Safderjung Flyover, New Delhi', 'Electric Vehicle Charger, Post Office, Laxmi Bai Nagar, Safderjung Flyover, New Delhi', 28.578452, 77.209231, 'DC-001', '15 kW', 'Self Service'),
(49, 'Noida Authority', 'Electronic City , Metro Station parking gate no.2, Noida - 201301', 'Electric Vehicle Charger, Electronic City , Metro Station parking gate no.2, Noida - 201301', 28.627941, 77.37493, 'DC-001', '15 kW', 'Self Service'),
(50, 'Noida Authority', 'H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301', 'Electric Vehicle Charger, H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301', 28.6265817, 77.3752161, 'DC-001', '15 kW', 'Self Service'),
(51, 'NDMC', 'Side of Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 'Electric Vehicle Charger, Side of Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 28.602443, 77.217889, 'DC-001', '15 kW', 'Self Service'),
(52, 'NDMC', 'Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 'Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 28.5907109, 77.2242844, 'DC-001', '15 kW', 'Self Service'),
(53, 'NDMC', 'Talkatora Garden, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Garden, President\'s Estate, New Delhi110004', 28.6248358, 77.1952435, 'DC-001', '15 kW', 'Self Service'),
(54, 'NDMC', 'Talkatora Garden, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Garden, President\'s Estate, New Delhi110004', 28.6248358, 77.1952435, 'DC-001', '15 kW', 'Self Service'),
(55, 'NDMC', 'Talkatora Stadium, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Stadium, President\'s Estate, New Delhi110004', 28.6252943, 77.1952344, 'DC-001', '15 kW', 'Self Service'),
(56, 'NDMC', 'Indian Coffee House, Connaught Place, New Delhi', 'Electric Vehicle Charger, Indian Coffee House, Connaught Place, New Delhi', 28.6308096, 77.2161583, 'DC-001', '15 kW', 'Self Service'),
(57, 'NDMC', 'Talkatora Garden, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Garden, President\'s Estate, New Delhi110004', 28.6248358, 77.1952435, 'DC-001', '15 kW', 'Self Service'),
(58, 'NDMC', 'Talkatora Stadium, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Stadium, President\'s Estate, New Delhi110004', 28.6252943, 77.1952344, 'DC-001', '15 kW', 'Self Service'),
(59, 'CMRL', 'High Court Metro Station, Chennai', 'Electric Vehicle Charger, High Court Metro Station, Chennai', 13.0318485, 80.241973, 'DC-001', '15 kW', 'Self Service'),
(60, 'CMRL', 'High Court Metro Station, Chennai', 'Electric Vehicle Charger, High Court Metro Station, Chennai', 13.0318485, 80.241973, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(61, 'CMRL', 'Koyam Bedu  Metro Station, Chennai', 'Electric Vehicle Charger, Koyam Bedu  Metro Station, Chennai', 13.1092809, 80.1523462, 'DC-001', '15 kW', 'Self Service'),
(62, 'CMRL', 'Koyam Bedu  Metro Station, Chennai', 'Electric Vehicle Charger, Koyam Bedu  Metro Station, Chennai', 13.1092809, 80.1523462, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(63, 'CMRL', 'Anna Nagar East Metro Station, Chennai (CMRL)', 'Electric Vehicle Charger, Anna Nagar East Metro Station, Chennai (CMRL)', 12.9959222, 80.2102867, 'DC-001', '15 kW', 'Self Service'),
(64, 'CMRL', 'Anna Nagar East Metro Station, Chennai (CMRL)', 'Electric Vehicle Charger, Anna Nagar East Metro Station, Chennai (CMRL)', 12.9959222, 80.2102867, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(65, 'NDMC', 'NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023', 'Electric Vehicle Charger, NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023', 28.5772318, 77.1972385, 'DC-001', '15 kW', 'Self Service'),
(66, 'NDMC', 'Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 'Electric Vehicle Charger, Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 28.602443, 77.217889, 'DC-001', '15 kW', 'Self Service'),
(67, 'NDMC', 'Janpath Guest House, Connaught Place, New Delhi', 'Electric Vehicle Charger, Janpath Guest House, Connaught Place, New Delhi', 28.623779, 77.218963, 'DC-001', '15 kW', 'Self Service'),
(68, 'SDMC', 'EESL N-Block GK-1, SDMC parking New Delhi', 'Electric Vehicle Charger, EESL N-Block GK-1, SDMC parking New Delhi', 28.5568413, 77.2340489, 'DC-001', '15 kW', 'Self Service'),
(69, 'SDMC', 'SDMC Parking, B6, Safderjung Enclave', 'Electric Vehicle Charger, SDMC Parking, B6, Safderjung Enclave', 28.5503609, 77.2139161, 'DC-001', '15 kW', 'Self Service'),
(70, 'SDMC', 'SDMC Parking, SDA Market, Hauz Khas, New Delhi, Delhi 110016', 'Electric Vehicle Charger, SDMC Parking, SDA Market, Hauz Khas, New Delhi, Delhi 110016', 28.5463909, 77.1963545, 'DC-001', '15 kW', 'Self Service'),
(71, 'SDMC', 'SDMC Parking, Aurbindo Market Place,Hauz Khas, New Delhi, Delhi 110016', 'Electric Vehicle Charger, SDMC Parking, Aurbindo Market Place,Hauz Khas, New Delhi, Delhi 110016', 28.5453944, 77.1908225, 'DC-001', '15 kW', 'Self Service'),
(72, 'SDMC', 'SDMC Parking, R Block, GK-1, DELHI-110016', 'Electric Vehicle Charger, SDMC Parking, R Block, GK-1, DELHI-110016', 28.5500136, 77.2448704, 'DC-001', '15 kW', 'Self Service'),
(73, 'NKDA', 'Near Tank No 3, Opp Goutams, Street Number 24,Sub Central Business District Action Area 1, Action Area I, Newtown West Bengal 700156', 'Electric Vehicle Charger, Near Tank No 3, Opp Goutams, Street Number 24,Sub Central Business District Action Area 1, Action Area I, Newtown West Bengal 700156', 22.579939, 88.4531807, 'DC-001', '15 kW', 'Self Service'),
(74, 'NKDA', 'Near Tank No 3, Opp Goutams, Street Number 24,Sub Central Business District Action Area 1, Action Area I, Newtown West Bengal 700156', 'Electric Vehicle Charger, Near Tank No 3, Opp Goutams, Street Number 24,Sub Central Business District Action Area 1, Action Area I, Newtown West Bengal 700156', 22.579939, 88.4531807, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(75, 'NKDA', 'NKDA New Town Business Club Parking Lot, AE Block(Newtown), Newtown, West Bengal 700059', 'Electric Vehicle Charger, NKDA New Town Business Club Parking Lot, AE Block(Newtown), Newtown, West Bengal 700059', 22.585303, 88.4569056, 'DC-001', '15 kW', 'Self Service'),
(76, 'NKDA', 'NKDA New Town Business Club Parking Lot, AE Block(Newtown), Newtown, West Bengal 700059', 'Electric Vehicle Charger, NKDA New Town Business Club Parking Lot, AE Block(Newtown), Newtown, West Bengal 700059', 22.585303, 88.4569056, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(77, 'NKDA', 'Parking Lot, 7 Wonders, Gate No 4, Eco Park Entry Plaza, AA IIB, Newtown, Kolkata, West Bengal 700135', 'Electric Vehicle Charger, Parking Lot, 7 Wonders, Gate No 4, Eco Park Entry Plaza, AA IIB, Newtown, Kolkata, West Bengal 700135', 22.603134, 88.4671428, 'DC-001', '15 kW', 'Self Service'),
(78, 'NKDA', 'Parking Lot, 7 Wonders, Gate No 4, Eco Park Entry Plaza, AA IIB, Newtown, Kolkata, West Bengal 700135', 'Electric Vehicle Charger, Parking Lot, 7 Wonders, Gate No 4, Eco Park Entry Plaza, AA IIB, Newtown, Kolkata, West Bengal 700135', 22.603134, 88.4671428, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(79, 'NKDA', 'Parking Lot Golf Club, Gate no. 6, Ecopark, Deshbandhu Nagar, Rekjuani, West Bengal 700156', 'Electric Vehicle Charger, Parking Lot Golf Club, Gate no. 6, Ecopark, Deshbandhu Nagar, Rekjuani, West Bengal 700156', 22.5833562, 88.4593418, 'DC-001', '15 kW', 'Self Service'),
(80, 'NKDA', 'Parking Lot Golf Club, Gate no. 6, Ecopark, Deshbandhu Nagar, Rekjuani, West Bengal 700156', 'Electric Vehicle Charger, Parking Lot Golf Club, Gate no. 6, Ecopark, Deshbandhu Nagar, Rekjuani, West Bengal 700156', 22.5833562, 88.4593418, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(81, 'NKDA', 'NKDA Parking Lot, Beside Tata Memorial Cancer Hospital , 14, MAR(E-W), DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700160', 'Electric Vehicle Charger, NKDA Parking Lot, Beside Tata Memorial Cancer Hospital , 14, MAR(E-W), DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700160', 22.5770971, 88.4796319, 'DC-001', '15 kW', 'Self Service'),
(82, 'NKDA', 'NKDA Parking Lot, Beside Tata Memorial Cancer Hospital , 14, MAR(E-W), DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700160', 'Electric Vehicle Charger, NKDA Parking Lot, Beside Tata Memorial Cancer Hospital , 14, MAR(E-W), DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700160', 22.5770971, 88.4796319, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(83, 'NKDA', 'NKDA Parking Lot, Beside Axis Mall, CF Block Newtown, Action Area 1C, Newtown, Kolkata, West Bengal 700156', 'Electric Vehicle Charger, NKDA Parking Lot, Beside Axis Mall, CF Block Newtown, Action Area 1C, Newtown, Kolkata, West Bengal 700156', 22.5796534, 88.459843, 'DC-001', '15 kW', 'Self Service'),
(84, 'NKDA', 'NKDA Parking Lot, Beside Axis Mall, CF Block Newtown, Action Area 1C, Newtown, Kolkata, West Bengal 700156', 'Electric Vehicle Charger, NKDA Parking Lot, Beside Axis Mall, CF Block Newtown, Action Area 1C, Newtown, Kolkata, West Bengal 700156', 22.5796534, 88.459843, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(85, 'Noida Authority', 'Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301', 'Electric Vehicle Charger, Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301', 28.5721498, 77.3375462, 'DC-001', '15 kW', 'Self Service'),
(86, 'Noida Authority', 'Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India', 'Electric Vehicle Charger, Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India', 28.5821195, 77.3266991, 'DC-001', '15 kW', 'Self Service'),
(87, 'Noida Authority', 'Sector 15, Nithari, Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, 201301, India', 'Electric Vehicle Charger, Sector 15, Nithari, Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, 201301, India', 28.6265817, 77.3752161, 'DC-001', '15 kW', 'Self Service'),
(88, 'Noida Authority', 'road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313', 'Electric Vehicle Charger, road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313', 28.5481935, 77.3221938, 'DC-001', '15 kW', 'Self Service'),
(89, 'Noida Authority', 'Between kirti mann plaza and NMC hospital Sector 30 Noida', 'Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida', 28.5727977, 77.340531, 'DC-001', '15 kW', 'Self Service'),
(90, 'Noida Authority', 'Sector 142, Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 142, Noida, Uttar Pradesh, 201305', 28.6265817, 77.3752161, 'DC-001', '15 kW', 'Self Service'),
(91, 'NDMC', 'Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 'Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 28.617783, 77.2129959, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(92, 'NDMC', 'Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 'Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 28.617783, 77.2129959, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(93, 'NDMC', 'Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 'Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 28.5907109, 77.2242844, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(94, 'NDMC', 'Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 'Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003', 28.5907109, 77.2242844, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(95, 'NDMC', 'Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 'Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 28.617783, 77.2129959, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(96, 'NDMC', 'Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 'Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001', 28.617783, 77.2129959, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(97, 'NDMC', 'NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023', 'Electric Vehicle Charger, NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023', 28.5772318, 77.1972385, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(98, 'Noida Authority', 'Op. C&R Textiles Ltd, sector-60, Noida', 'Electric Vehicle Charger, Op. C&R Textiles Ltd, sector-60, Noida', 28.6021486, 77.3627249, 'DC-001', '15 kW', 'Self Service'),
(99, 'Noida Authority', 'Near Tata Advance Systems, sector- 59, Noida', 'Electric Vehicle Charger, Near Tata Advance Systems, sector- 59, Noida', 28.6075627, 77.3683319, 'DC-001', '15 kW', 'Self Service'),
(100, 'Noida Authority', 'In front of Marie gold exports ltd, A block, sector-64, Noida', 'Electric Vehicle Charger, In front of Marie gold exports ltd, A block, sector-64, Noida', 28.611892, 77.3762261, 'DC-001', '15 kW', 'Self Service'),
(101, 'Noida Authority', 'In front of Hexagon pvt ltd, sector-65, Noida', 'Electric Vehicle Charger, In front of Hexagon pvt ltd, sector-65, Noida', 28.6127633, 77.3871319, 'DC-001', '15 kW', 'Self Service'),
(102, 'SDMC', 'Charger 4,c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048', 'Electric Vehicle Charger, Charger 4,c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048', 28.5730519, 77.1735339, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(103, 'SDMC', 'Charger 5, c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048', 'Electric Vehicle Charger, Charger 5, c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048', 28.5730519, 77.1735339, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(104, 'SDMC', 'EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Gold\'s Gym', 'Electric Vehicle Charger, EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Gold\'s Gym', 28.5576621, 77.1576843, 'DC-001', '15 kW', 'Self Service'),
(105, 'SDMC', 'EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Plot 7', 'Electric Vehicle Charger, EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Plot 7', 28.5576621, 77.1576843, 'DC-001', '15 kW', 'Self Service'),
(106, 'SDMC', 'EV Parking Slot 3-5, SDMC Parking, Hauz Khas Village, Hauz Khas, 110016', 'Electric Vehicle Charger, EV Parking Slot 3-5, SDMC Parking, Hauz Khas Village, Hauz Khas, 110016', 28.5533997, 77.1941654, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(107, 'SDMC', 'EV Parking Slot 5, SDMC Parking, Hauz Khas Village, Hauz Khas, 110016', 'Electric Vehicle Charger, EV Parking Slot 5, SDMC Parking, Hauz Khas Village, Hauz Khas, 110016', 28.5533997, 77.1941654, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(108, 'SDMC', 'J-Block, Malviya Nagar, parking New Delhi', 'Electric Vehicle Charger, J-Block, Malviya Nagar, parking New Delhi', 28.5836863, 77.0801998, 'DC-001', '15 kW', 'Self Service'),
(109, 'SDMC', 'J-Block, Malviya Nagar, parking New Delhi', 'Electric Vehicle Charger, J-Block, Malviya Nagar, parking New Delhi', 28.5836863, 77.0801998, 'DC-001', '15 kW', 'Self Service'),
(110, 'SDMC', 'Veer Savarkar Marg, Lajpat Nagar, SDMC parking New Delhi', 'Electric Vehicle Charger, Veer Savarkar Marg, Lajpat Nagar, SDMC parking New Delhi', 28.571886, 77.242384, 'DC-001', '15 kW', 'Self Service'),
(111, 'SDMC', 'Feroze Gandhi Road, Lajpat Nagar, SDMC parking New Delhi', 'Electric Vehicle Charger, Feroze Gandhi Road, Lajpat Nagar, SDMC parking New Delhi', 28.6428915, 77.2190894, 'DC-001', '15 kW', 'Self Service'),
(112, 'SDMC', 'Meharchand Market, SDMC parking, New Delhi', 'Electric Vehicle Charger, Meharchand Market, SDMC parking, New Delhi', 28.5860181, 77.2279415, 'DC-001', '15 kW', 'Self Service'),
(113, 'SDMC', 'EESL H-Block, Sarita Vihar, SDMC parking New Delhi', 'Electric Vehicle Charger, EESL H-Block, Sarita Vihar, SDMC parking New Delhi', 28.534966, 77.291393, 'DC-001', '15 kW', 'Self Service'),
(114, 'SDMC', 'EESL, Plot 81-85, Nehru Place, SDMC Parking, New Delhi', 'Electric Vehicle Charger, EESL, Plot 81-85, Nehru Place, SDMC Parking, New Delhi', 28.5488714, 77.2541062, 'DC-001', '15 kW', 'Self Service'),
(115, 'NRANVP', 'NRANVP, PARYAVAS BHAWAN, NORTH BLOCK, SECTOR 19, NAYA RAYPUR MARG, ATAL NAGAR RAIPUR', 'Electric Vehicle Charger, NRANVP, PARYAVAS BHAWAN, NORTH BLOCK, SECTOR 19, NAYA RAYPUR MARG, ATAL NAGAR RAIPUR', 21.1642265, 81.7886588, 'DC-001', '15 kW', 'Self Service'),
(116, 'NRANVP', 'CBDNAVA RAIPUR MARG, SECTOR 21,KAYABANDHA, ATAL NAGAR RAIPUR DIST. 492101 Chhatisgarh', 'Electric Vehicle Charger, CBDNAVA RAIPUR MARG, SECTOR 21,KAYABANDHA, ATAL NAGAR RAIPUR DIST. 492101 Chhatisgarh', 21.1700582, 81.7714469, 'DC-001', '15 kW', 'Self Service'),
(117, 'Noida Authority', 'Diagonally op. Sasta Sundar Hospital, sector- 58, Noida', 'Electric Vehicle Charger, Diagonally op. Sasta Sundar Hospital, sector- 58, Noida', 28.6067511, 77.3597194, 'DC-001', '15 kW', 'Self Service'),
(118, 'Noida Authority', 'In front of affinity salon, sector- 51, Noida', 'Electric Vehicle Charger, In front of affinity salon, sector- 51, Noida', 28.5773143, 77.3609538, 'DC-001', '15 kW', 'Self Service'),
(119, 'Noida Authority', 'Side parking of HCL building, sector-8, Noida', 'Electric Vehicle Charger, Side parking of HCL building, sector-8, Noida', 28.5951643, 77.328135, 'DC-001', '15 kW', 'Self Service'),
(120, 'Noida Authority', 'Opp C-101 Jain air travels, sector-2, Noida', 'Electric Vehicle Charger, Opp C-101 Jain air travels, sector-2, Noida', 28.5846875, 77.3159296, 'DC-001', '15 kW', 'Self Service'),
(121, 'Noida Authority', 'H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301', 'Electric Vehicle Charger, H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301', 28.6265817, 77.3752161, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(122, 'Noida Authority', 'H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301', 'Electric Vehicle Charger, H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301', 28.6265817, 77.3752161, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(123, 'Noida Authority', 'Electronic City , Metro Station parking gate no.2, Noida - 201301', 'Electric Vehicle Charger, Electronic City , Metro Station parking gate no.2, Noida - 201301', 28.627941, 77.37493, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(124, 'Noida Authority', 'Electronic City , Metro Station parking gate no.2, Noida - 201301', 'Electric Vehicle Charger, Electronic City , Metro Station parking gate no.2, Noida - 201301', 28.627941, 77.37493, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(125, 'Noida Authority', 'Between kirti mann plaza and NMC hospital Sector 30 Noida', 'Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida', 28.5727977, 77.340531, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(126, 'Noida Authority', 'Between kirti mann plaza and NMC hospital Sector 30 Noida', 'Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida', 28.5727977, 77.340531, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(127, 'Noida Authority', 'Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India', 'Electric Vehicle Charger, Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India', 28.5821195, 77.3266991, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(128, 'Noida Authority', 'Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India', 'Electric Vehicle Charger, Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India', 28.5821195, 77.3266991, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(129, 'Noida Authority', 'road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313', 'Electric Vehicle Charger, road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313', 28.5481935, 77.3221938, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(130, 'Noida Authority', 'road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313', 'Electric Vehicle Charger, road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313', 28.5481935, 77.3221938, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(131, 'Noida Authority', 'Sector 142, Near Advan Chowk  Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 142, Near Advan Chowk  Noida, Uttar Pradesh, 201305', 28.4999533, 77.4142541, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(132, 'Noida Authority', 'Sector 142, Near Advan Chowk  Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 142, Near Advan Chowk  Noida, Uttar Pradesh, 201305', 28.4999533, 77.4142541, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(133, 'Noida Authority', 'Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305', 28.5971, 77.3649, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(134, 'Noida Authority', 'Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305', 28.5971, 77.3649, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(135, 'Noida Authority', 'Sector 50  Central Market, Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 50  Central Market, Noida, Uttar Pradesh, 201305', 28.5719972, 77.3693678, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(136, 'Noida Authority', 'Sector 50 , Central Market,  Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 50 , Central Market,  Noida, Uttar Pradesh, 201305', 28.5290983, 77.4033806, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(137, 'Noida Authority', 'Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301', 'Electric Vehicle Charger, Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301', 28.5721498, 77.3375462, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(138, 'Noida Authority', 'Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301', 'Electric Vehicle Charger, Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301', 28.5721498, 77.3375462, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(139, 'Noida Authority', 'Between kirti mann plaza and NMC hospital Sector 30 Noida', 'Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida', 28.5727977, 77.340531, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(140, 'Noida Authority', 'Between kirti mann plaza and NMC hospital Sector 30 Noida', 'Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida', 28.5727977, 77.340531, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(141, 'Noida Authority', 'Sector 50  Central Market, Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 50  Central Market, Noida, Uttar Pradesh, 201305', 28.5719972, 77.3693678, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(142, 'Noida Authority', 'Sector 50  Central Market, Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 50  Central Market, Noida, Uttar Pradesh, 201305', 28.5719972, 77.3693678, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(143, 'Noida Authority', 'Sector 15, Nithari, Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, 201301, India', 'Electric Vehicle Charger, Sector 15, Nithari, Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, 201301, India', 28.6265817, 77.3752161, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(144, 'SDMC', 'c/o SDMCHauz Khas VillageNew Delhi,Delhi - 110016', 'Electric Vehicle Charger, c/o SDMCHauz Khas VillageNew Delhi,Delhi - 110016', 28.5471702, 77.2002745, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(145, 'NDMC', 'NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023', 'Electric Vehicle Charger, NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023', 28.5772318, 77.1972385, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(146, 'NDMC', 'Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 'Electric Vehicle Charger, Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 28.602443, 77.217889, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(147, 'Noida Authority', 'Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305', 28.5971, 77.3649, 'DC-001', '15 kW', 'Self Service'),
(148, 'Noida Authority', 'Sector 50 , Central Market,  Noida, Uttar Pradesh, 201305', 'Electric Vehicle Charger,  Sector 50 , Central Market,  Noida, Uttar Pradesh, 201305', 28.5290983, 77.4033806, 'DC-001', '15 kW', 'Self Service'),
(149, 'CMRL', 'Chennai Egmore metro, Chennai (CMRL)', 'Electric Vehicle Charger,  Chennai Egmore metro, Chennai (CMRL)', 13.0730518, 80.1938063, 'DC-001', '15 kW', 'Self Service'),
(150, 'CMRL', 'Chennai Metro Alandur station Car parking area, Alandur, Chennai 600016', 'Electric Vehicle Charger, Chennai Metro Alandur station Car parking area, Alandur, Chennai 600016', 13.0042155, 80.2015482, 'DC-001', '15 kW', 'Self Service'),
(151, 'SDMC', 'Charger 6, c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048', 'Electric Vehicle Charger, Charger 6, c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048', 28.5730519, 77.1735339, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(152, 'SDMC', 'EV Parking Slot 3-5, SDMC Parking, N Block Market, Greater Kailash - 1 , 110048', 'Electric Vehicle Charger, EV Parking Slot 3-5, SDMC Parking, N Block Market, Greater Kailash - 1 , 110048', 28.55664, 77.2321386, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(153, 'SDMC', 'EV Parking Slot 5, SDMC Parking, N Block Market, Greater Kailash - 1 , 110048', 'Electric Vehicle Charger, EV Parking Slot 5, SDMC Parking, N Block Market, Greater Kailash - 1 , 110048', 28.55664, 77.2321386, 'DC-001', '15 kW', 'Self Service'),
(154, 'SDMC', 'EV Parking Slot 2, SDMC Parking, Hauz Khas Village, Hauz Khas - 1 , 110016', 'Electric Vehicle Charger, EV Parking Slot 2, SDMC Parking, Hauz Khas Village, Hauz Khas - 1 , 110016', 28.5730519, 77.1735339, 'DC-001', '15 kW', 'Self Service'),
(155, 'SDMC', 'Charger 2, SDMC Parking, Hauz Khas Village, New Delhi', 'Electric Vehicle Charger, Charger 2, SDMC Parking, Hauz Khas Village, New Delhi', 28.553693, 77.19925, 'DC-001', '15 kW', 'Self Service'),
(156, 'NDMC', 'Back of Hotel Claridges Near NDMC Power Sub Station, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 'Electric Vehicle Charger, Back of Hotel Claridges Near NDMC Power Sub Station, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003', 28.602443, 77.217889, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(157, 'Noida Authority', 'Charger 1, Sector 2: State Bank of lndia, Noida - UP', 'Electric Vehicle Charger, Charger 1, Sector 2: State Bank of lndia, Noida - UP', 28.5875036, 77.31269, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(158, 'Noida Authority', 'Charger 2, Sector 2: State Bank of lndia, Noida - UP', 'Electric Vehicle Charger, Charger 2, Sector 2: State Bank of lndia, Noida - UP', 28.5355161, 77.3910265, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(159, 'Noida Authority', 'Charger 1, Sector 3: G-1 to G-50, Noida - UP', 'Electric Vehicle Charger, Charger 1, Sector 3: G-1 to G-50, Noida - UP', 28.5355161, 77.3910265, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(160, 'Noida Authority', 'Charger 2, Sector 3: G-1 to G-50, Noida - UP', 'Electric Vehicle Charger, Charger 2, Sector 3: G-1 to G-50, Noida - UP', 28.5355161, 77.3910265, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(161, 'Noida Authority', 'Charger 1, Sector 3: F-7 to F-8, Noida UP', 'Electric Vehicle Charger, Charger 1, Sector 3: F-7 to F-8, Noida UP', 28.5355161, 77.3910265, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(162, 'Noida Authority', 'Charger 2, Sector 3: F-7 to F-8, Noida UP', 'Electric Vehicle Charger, Charger 2, Sector 3: F-7 to F-8, Noida UP', 28.5355161, 77.3910265, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(163, 'Noida Authority', 'Charger 1, Sector 6: Reception Noida Authority, Noida, UP', 'Electric Vehicle Charger, Charger 1, Sector 6: Reception Noida Authority, Noida, UP', 28.5925506, 77.3183746, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(164, 'Noida Authority', 'Charger 2, Sector 6: Reception Noida Authority, Noida, UP', 'Electric Vehicle Charger, Charger 2, Sector 6: Reception Noida Authority, Noida, UP', 28.5925506, 77.3183746, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(165, 'Noida Authority', 'Sector 25A, Spice Mall plot area, Noida Authority, Noida, UP', 'Electric Vehicle Charger, Sector 25A, Spice Mall plot area, Noida Authority, Noida, UP', 28.5862141, 77.3411026, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(166, 'Noida Authority', 'Charger 2, Sec-25A: Spice Mall plot area', 'Electric Vehicle Charger, Charger 2, Sec-25A: Spice Mall plot area', 28.5862141, 77.3411026, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(167, 'Noida Authority', 'Charger 1, Sector 16: Parking near metro station, sector-16, Noida, UP', 'Electric Vehicle Charger, Charger 1, Sector 16: Parking near metro station, sector-16, Noida, UP', 28.5773799, 77.3144936, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(168, 'Noida Authority', 'Charger 2, Sector 16: Parking near metro station, sector-16, Noida, UP', 'Electric Vehicle Charger, Charger 2, Sector 16: Parking near metro station, sector-16, Noida, UP', 28.5773799, 77.3144936, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(169, 'ANERT', 'DTPC office, thiruvananthapuram,Kerala- 605007', 'Electric Vehicle Charger, DTPC office, thiruvananthapuram,Kerala- 605007', 8.5083388, 76.9472347, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(170, 'NRANVP', 'KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031', 'Electric Vehicle Charger, KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031', 9.9769209, 76.2777812, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(171, 'NRANVP', 'State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014', 'Electric Vehicle Charger, State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014', 8.491622, 76.9562469, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(172, 'CMRL', 'Tirumangalam Metro station, Chennai', 'Electric Vehicle Charger, Tirumangalam Metro station, Chennai', 12.9918445, 80.1418013, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(173, 'CMRL', 'Tirumangalam Metro station, Chennai', 'Electric Vehicle Charger, Tirumangalam Metro station, Chennai', 12.9918445, 80.1418013, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(174, 'ANERT', 'KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031', 'Electric Vehicle Charger, KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031', 9.9769209, 76.2777812, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(175, 'NDMC', 'Akashvani Bhawan, Sansad Marg, New Delhi 110001', 'Electric Vehicle Charger, Akashvani Bhawan, Sansad Marg, New Delhi 110001', 28.6245157, 77.2135555, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(176, 'NDMC', 'Akashvani Bhawan, Sansad Marg, New Delhi 110001', 'Electric Vehicle Charger, Akashvani Bhawan, Sansad Marg, New Delhi 110001', 28.6245157, 77.2135555, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(177, 'NDMC', 'FICCI, FICCI Chowk, Mandi House, New Delhi', 'Electric Vehicle Charger, FICCI, FICCI Chowk, Mandi House, New Delhi', 28.6268691, 77.231853, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(178, 'NDMC', 'Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001', 'Electric Vehicle Charger, Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001', 28.6304482, 77.2255578, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(179, 'NDMC', 'Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001', 'Electric Vehicle Charger, Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001', 28.6304482, 77.2255578, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(180, 'NDMC', 'Talkatora Stadium, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Stadium, President\'s Estate, New Delhi110004', 28.6252943, 77.1952344, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(181, 'NDMC', 'Talkatora Garden, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Garden, President\'s Estate, New Delhi110004', 28.6248358, 77.1952435, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(182, 'SDMC', 'c/o SDMCHauz Khas VillageNew Delhi,Delhi - 110016', 'Electric Vehicle Charger, c/o SDMCHauz Khas VillageNew Delhi,Delhi - 110016', 28.5471702, 77.2002745, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(183, 'SDMC', 'PVR Priya Vasant  Vihar', 'Electric Vehicle Charger, PVR Priya Vasant  Vihar', 28.4974825, 77.0829777, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(184, 'SDMC', 'Meharchand Market, New Delhi', 'Electric Vehicle Charger, Meharchand Market, New Delhi', 28.5881111, 77.2175556, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(185, 'SDMC', 'Meharchand Market, New Delhi', 'Electric Vehicle Charger, Meharchand Market, New Delhi', 28.5881111, 77.2175556, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(186, 'SDMC', 'RK Puram Sector 12 Market', 'Electric Vehicle Charger, RK Puram Sector 12 Market', 28.5743032, 77.1765548, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(187, 'SDMC', 'RK Puram Sector 12 Market', 'Electric Vehicle Charger, RK Puram Sector 12 Market', 28.5743032, 77.1765548, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(188, 'CMRL', 'Saidapet Metro station', 'Electric Vehicle Charger, Saidapet Metro station', 13.0237197, 80.2282092, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(189, 'CMRL', 'Saidapet Metro station', 'Electric Vehicle Charger, Saidapet Metro station', 13.0237197, 80.2282092, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(190, 'CMRL', 'Tirumangalam Metro station, Chennai', 'Electric Vehicle Charger, Tirumangalam Metro station, Chennai', 12.9918445, 80.1418013, 'DC-001', '15 kW', 'Self Service'),
(191, 'CMRL', 'Saidapet Metro station', 'Electric Vehicle Charger, Saidapet Metro station', 13.0237197, 80.2282092, 'DC-001', '15 kW', 'Self Service'),
(192, 'NDMC', 'DLF Building, Sansad Marg, Janpath, Connaught Place, New Delhi 110001.', 'Electric Vehicle Charger, DLF Building, Sansad Marg, Janpath, Connaught Place, New Delhi 110001.', 28.6212385, 77.2183048, 'DC-001', '15 kW', 'Self Service'),
(193, 'NDMC', 'Talkatora Stadium, President\'s Estate, New Delhi110004', 'Electric Vehicle Charger, Talkatora Stadium, President\'s Estate, New Delhi110004', 28.6252943, 77.1952344, 'DC-001', '15 kW', 'Self Service'),
(194, 'NKDA', 'ECO Park,Gate No1,West Bengal:700156', 'Electric Vehicle Charger, ECO Park,Gate No1,West Bengal:700156', 22.5833562, 88.4593418, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(195, 'NKDA', 'Shapoorji complex,New Town,kolkata,West Bengal:700135', 'Electric Vehicle Charger, Shapoorji complex,New Town,kolkata,West Bengal:700135', 22.5691795, 88.5090643, 'AC-001', '10(3.3 kW each)', 'Self Service'),
(196, 'NKDA', 'ECO Park,Gate No1,West Bengal:700156', 'Electric Vehicle Charger, ECO Park,Gate No1,West Bengal:700156', 22.5833562, 88.4593418, 'DC-001', '15 kW', 'Self Service'),
(197, 'NKDA', 'Shapoorji complex,New Town,kolkata,West Bengal:700135', 'Electric Vehicle Charger, Shapoorji complex,New Town,kolkata,West Bengal:700135', 22.5691795, 88.5090643, 'DC-001', '15 kW', 'Self Service'),
(198, 'ANERT', 'State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014', 'Electric Vehicle Charger, State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014', 8.491622, 76.9562469, 'CCS/ChADEMO/ Type 2 AC', '142kW', 'Self Service'),
(199, 'ANERT', 'Shanghumukham beach, thiruvananthapuram,Kerala- 605007', 'Electric Vehicle Charger, Shanghumukham beach, thiruvananthapuram,Kerala- 605007', 8.4810515, 76.9126218, 'DC-001', '15 kW', 'Self Service'),
(200, 'ANERT', 'KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031', 'Electric Vehicle Charger, KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031', 9.9769209, 76.2777812, 'DC-001', '15 kW', 'Self Service'),
(201, 'ANERT', 'State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014', 'Electric Vehicle Charger, State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014', 8.491622, 76.9562469, 'DC-001', '15 kW', 'Self Service'),
(202, 'SDMC', 'EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Plot 7', 'Electric Vehicle Charger, EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Plot 7', 28.5576621, 77.1576843, 'DC-001', '15 kW', 'Self Service');

-- --------------------------------------------------------

--
-- Table structure for table `evindia`
--

CREATE TABLE `evindia` (
  `id` int(11) NOT NULL,
  `Car` varchar(21) DEFAULT NULL,
  `Style` varchar(21) DEFAULT NULL,
  `Range` varchar(18) DEFAULT NULL,
  `Transmission` varchar(12) DEFAULT NULL,
  `VehicleType` varchar(11) DEFAULT NULL,
  `PriceRange(Lakhs)` double DEFAULT NULL,
  `Capacity` varchar(9) DEFAULT NULL,
  `BootSpace` varchar(9) DEFAULT NULL,
  `BaseModel` varchar(18) DEFAULT NULL,
  `TopModel` varchar(19) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `evindia`
--

INSERT INTO `evindia` (`id`, `Car`, `Style`, `Range`, `Transmission`, `VehicleType`, `PriceRange(Lakhs)`, `Capacity`, `BootSpace`, `BaseModel`, `TopModel`) VALUES
(1, 'Tata Nexon EV', 'Compact SUV', '312 Km/Full Charge', 'Automatic', 'Electric', 17.4, '5 Seater ', '350 L', 'XM ', 'Dark XZ Plus LUX '),
(2, 'Tata Tigor EV', 'Subcompact Sedan', '306 Km/Full Charge', 'Automatic', 'Electric', 13.64, '5 Seater ', '316 L', 'XE ', 'XZ Plus Dual Tone '),
(3, 'Tata Nexon EV Max', 'Compact SUV', '437 Km/Full Charge', 'Automatic', 'Electric', 19.24, '5 Seater ', '350 L', 'XZ Plus 3.3 kW ', 'XZ Plus Lux 7.2 kW '),
(4, 'MG ZS EV', 'Compact SUV', '419 Km/Full Charge', 'Automatic', 'Electric', 25.88, '5 Seater ', '448 L', 'Excite ', 'Exclusive '),
(5, 'Hyundai Kona Electric', 'Compact SUV', '452 Km/Full Charge', 'Automatic', 'Electric', 23.98, '5 Seater ', 'na', 'Premium Dual Tone ', 'HSE '),
(6, 'Jaguar I-Pace', 'Premium Midsize Sedan', '470 Km/Full Charge', 'Automatic', 'Electric', 112, '5 Seater ', '656 L', 'S ', 'Sportback 55 '),
(7, 'Audi E-Tron GT', 'Premium Coupe', '388 Km/Full Charge', 'Automatic', 'Electric', 180, '5 Seater ', '405 L', 'Quattro ', 'na'),
(8, 'BYD E6', 'Subcompact MPV', '415 Km/Full Charge', 'Automatic', 'Electric', 29.15, '5 Seater ', '580 L', 'STD ', 'na'),
(9, 'Mercedes-Benz EQC', 'Compact SUV', '471 Km/Full Charge', 'Automatic', 'Electric', 100, '5 Seater ', 'na', 'na', 'na'),
(10, 'BMW iX', 'Premium Fullsize SUV', '425 Km/Full Charge', 'Automatic', 'Electric', 116, '5 Seater ', 'na', 'na', 'na'),
(11, 'Porsche Taycan', 'Premium Sports Sedan', 'na', 'Automatic', 'Electric', 150, '4 Seater ', 'na', 'na', 'na'),
(12, 'Audi E-Tron', 'Compact SUV', '400 Km/Full Charge', 'Automatic', 'Electric', 119, '5 Seater ', '660 L', 'na', 'na');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cheapestelectriccars_evdatabase`
--
ALTER TABLE `cheapestelectriccars_evdatabase`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `electriccardata_clean`
--
ALTER TABLE `electriccardata_clean`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `electric_vehicle_charging_station_list`
--
ALTER TABLE `electric_vehicle_charging_station_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `evindia`
--
ALTER TABLE `evindia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cheapestelectriccars_evdatabase`
--
ALTER TABLE `cheapestelectriccars_evdatabase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;

--
-- AUTO_INCREMENT for table `electriccardata_clean`
--
ALTER TABLE `electriccardata_clean`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `electric_vehicle_charging_station_list`
--
ALTER TABLE `electric_vehicle_charging_station_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;

--
-- AUTO_INCREMENT for table `evindia`
--
ALTER TABLE `evindia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
