-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-29 17:51:18
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fruitmall`
--

-- --------------------------------------------------------

--
-- 表的结构 `f_cart`
--

CREATE TABLE `f_cart` (
  `cid` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `f_cart`
--

INSERT INTO `f_cart` (`cid`, `userId`) VALUES
(106, 31),
(109, 32);

-- --------------------------------------------------------

--
-- 表的结构 `f_cart_detail`
--

CREATE TABLE `f_cart_detail` (
  `did` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `f_user`
--

CREATE TABLE `f_user` (
  `uid` int(11) NOT NULL,
  `phone` varchar(32) DEFAULT NULL,
  `pwd` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `f_user`
--

INSERT INTO `f_user` (`uid`, `phone`, `pwd`) VALUES
(31, 'wyb', 'wyb'),
(32, 'whoami3', 'whoami3');

-- --------------------------------------------------------

--
-- 表的结构 `product_list`
--

CREATE TABLE `product_list` (
  `pid` int(11) NOT NULL,
  `pname` varchar(64) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `guige` varchar(32) DEFAULT NULL,
  `status` varchar(32) DEFAULT NULL,
  `color` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product_list`
--

INSERT INTO `product_list` (`pid`, `pname`, `price`, `pic`, `guige`, `status`, `color`) VALUES
(1, '云南冰糖橙', 39.90, 'main01.jpg', '5斤', '', ''),
(2, '台湾金钻树上红凤梨', 49.00, 'main02.jpg', '1个', '第二件半价', 'rgba(255, 0, 0, 0.64)'),
(3, '长柄玫瑰草莓', 39.00, 'main03.jpg', '1盒', '第二件半价', 'rgba(255, 0, 0, 0.64)'),
(4, '春泉桔', 29.00, 'main04.jpg', '2斤', '第二件半价', 'rgba(255, 0, 0, 0.64)'),
(5, '南非无籽青提', 68.00, 'main05.jpg', '2斤', '', ''),
(6, '新奇士美国红心脐橙', 79.00, 'main06.jpg', '12个', '', ''),
(7, '火山番茄(混色)', 39.00, 'main07.jpg', '380g-2盒', '第二件半价', 'rgba(255, 0, 0, 0.64)'),
(8, '越南青皮香芒果', 49.90, 'main08.jpg', '4斤', '', ''),
(9, '情人柑', 39.00, 'global01.jpg', '2斤', '', ''),
(10, '南非无籽黑提', 128.00, 'global02.jpg', '4斤', '新品', '#65A032'),
(11, '智利Q布林', 48.00, 'global03.jpg', '2斤', '新品', '#65A032'),
(12, '法国香蕉苹果', 58.00, 'global04.jpg', '12个', '新品', '#65A032'),
(13, '美国黑福尼黑提', 158.00, 'global05.jpg', '2斤', '', ''),
(14, '海南芒果(小台农)', 29.90, 'global06.jpg', '2斤', '', ''),
(15, '智利樱桃西梅', 68.00, 'global07.jpg', '1斤', '新品', '#65A032'),
(16, '糖弹小金桔', 49.90, 'global08.jpg', '4斤', '新品', '#65A032'),
(17, '绣球红毛丹', 39.00, 'global09.jpg', '2斤', '', ''),
(18, '新奇士美国红宝石蜜柚', 39.00, 'global10.jpg', '1个', '', ''),
(19, '兰特全脂巴士杀菌牛奶', 99.00, 'fresh01.jpg', '2L', '', ''),
(20, 'pelagos南美白对虾', 59.00, 'fresh02.jpg', '500g', '第二件省20', 'rgba(255, 0, 0, 0.64)'),
(21, '新西兰银鳕鱼(冻南极犬牙鱼)', 218.00, 'fresh03.jpg', '400g', '', ''),
(22, '明治保加利亚LB81酸奶', 19.90, 'fresh04.jpg', '400g', '新品', '#65A032'),
(23, '明治醇壹高温杀菌乳', 23.90, 'fresh05.jpg', '950ml', '', ''),
(24, '唯品纯牛奶(950ml)', 25.80, 'fresh06.jpg', '950ml', '', ''),
(25, '新西兰牛脊骨', 29.90, 'fresh07.jpg', '500g', '第二件9.9', 'rgba(255, 0, 0, 0.64)'),
(26, '精选云南鲜银耳', 45.00, 'fresh08.jpg', '3朵', '11.9换购', 'rgba(255, 0, 0, 0.64)'),
(27, '阿根廷红虾(巨无霸L1级)', 198.00, 'fresh09.jpg', '2000g', '送礼首选', 'rgba(255, 0, 0, 0.64)'),
(28, '越南巴沙鱼柳', 23.80, 'fresh10.jpg', '300-400g', '第二件9.9', 'rgba(255, 0, 0, 0.64)'),
(29, '爱的回报礼盒', 188.00, 'gift01.jpg', '1盒', '', ''),
(30, '心扉鲜果礼盒', 108.00, 'gift02.jpg', '1盒', '', ''),
(31, '阳光普照B礼盒', 118.00, 'gift03.jpg', '1盒', '', ''),
(32, '深情厚意水果礼蓝', 580.00, 'gift04.jpg', '1个', '', ''),
(33, '佳沛意大利金奇异果', 168.00, 'gift05.jpg', '礼盒1盒', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `f_cart`
--
ALTER TABLE `f_cart`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `f_cart_detail`
--
ALTER TABLE `f_cart_detail`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `f_user`
--
ALTER TABLE `f_user`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `product_list`
--
ALTER TABLE `product_list`
  ADD PRIMARY KEY (`pid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `f_cart`
--
ALTER TABLE `f_cart`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;
--
-- 使用表AUTO_INCREMENT `f_cart_detail`
--
ALTER TABLE `f_cart_detail`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;
--
-- 使用表AUTO_INCREMENT `f_user`
--
ALTER TABLE `f_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- 使用表AUTO_INCREMENT `product_list`
--
ALTER TABLE `product_list`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
