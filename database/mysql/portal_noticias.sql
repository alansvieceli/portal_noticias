-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Tempo de geração: 25-Jul-2019 às 19:32
-- Versão do servidor: 5.6.44
-- versão do PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `portal_noticias`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noticia` text COLLATE utf8_unicode_ci NOT NULL,
  `resumo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `autor` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `data_noticia` date NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `noticia`, `resumo`, `autor`, `data_noticia`, `data_criacao`) VALUES
(2, 'Titulo 01', 'Noticia 01', 'Resumo 01', 'Autor 01', '2019-07-25', '2019-07-25 11:09:16'),
(3, 'Titulo 02', 'Noticia 02', 'Resumo 02', 'Autor 02', '2019-07-17', '2019-07-25 19:30:36'),
(4, 'Titulo 03', 'Noticia 03', 'Resumo 03', 'Autor 03', '2019-07-12', '2019-07-25 19:31:58'),
(5, 'Titulo 04', 'Notica 04', 'Resumo 04', 'Autor 04', '2019-07-12', '2019-07-25 19:31:58'),
(6, 'Titulo 05', 'Noticia 05', 'Resumo 05', 'Autor 05', '2019-07-19', '2019-07-25 19:32:44'),
(7, 'titulo 06', 'Noticia 06', 'Resumo 06', 'Autor 06', '2019-07-21', '2019-07-25 19:32:44');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
