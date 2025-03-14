create DATABASE blank;

use blank;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pNome VARCHAR(50) NOT NULL,
    uNome VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    municipio VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL
);

CREATE TABLE telefoneFuncionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idFuncionario INT NOT NULL,
    numeroTelefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios(id)
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pNome VARCHAR(50) NOT NULL,
    uNome VARCHAR(50) NOT NULL,
    municipio VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL
);

CREATE TABLE telefoneClientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
    numeroTelefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES clientes(id)
);

CREATE TABLE fornecedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pNome VARCHAR(50) NOT NULL,
    uNome VARCHAR(50) NOT NULL,
    municipio VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL
);

CREATE TABLE telefoneFornecedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idFornecedor INT NOT NULL,
    numeroTelefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (idFornecedor) REFERENCES fornecedores(id)
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    idCategoria INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (idCategoria) REFERENCES categorias(id)
);

CREATE TABLE estoques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduto INT NOT NULL,
    quantidade INT NOT NULL,
    quantidadeVendida INT NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produtos(id)
);

CREATE TABLE entradas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduto INT NOT NULL,
    idFornecedor INT NOT NULL,
    quantidade INT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produtos(id),
    FOREIGN KEY (idFornecedor) REFERENCES fornecedores(id)
);

CREATE TABLE saidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduto INT NOT NULL,
    quantidade INT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produtos(id)
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idFuncionario INT NOT NULL,
    idCliente INT NOT NULL,
    investimento DECIMAL(10,2) NOT NULL,
    valorTotal DECIMAL(10,2) NOT NULL,
    troco DECIMAL(10,2) NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios(id),
    FOREIGN KEY (idCliente) REFERENCES clientes(id)
);

CREATE TABLE vendaProduto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idVenda INT NOT NULL,
    idProduto INT NOT NULL,
    quantidade INT NOT NULL,
    precoUnitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (idVenda) REFERENCES vendas(id) ,
    FOREIGN KEY (idProduto) REFERENCES produtos(id)
);


INSERT INTO funcionarios (pNome, uNome, email, municipio, bairro) VALUES
('Abner', 'Lourenço', 'abner@email.com', 'Luanda', 'Ingombota'),
('Jarede', 'Fernandes', 'jarede@email.com', 'Benguela', 'Lobito'),
('Crismélio', 'Cristôvão', 'crismelio@email.com', 'Huambo', 'São João'),
('Domingos', 'Cabombo', 'domingos@email.com', 'Lubango', 'Nossa Senhora'),
('Igor', 'Semedo', 'igor@email.com', 'Malanje', 'Vila Matilde');

INSERT INTO telefoneFuncionarios (idFuncionario, numeroTelefone) VALUES
(1, '923456789'),
(2, '924567890'),
(3, '925678901'),
(4, '926789012'),
(5, '927890123');

INSERT INTO clientes (pNome, uNome, municipio, bairro) VALUES
('Keith', 'Tavares', 'Luanda', 'Sambizanga'),
('Josemar', 'Costa', 'Benguela', 'Catumbela'),
('Natália', 'Mendes', 'Huambo', 'Benfica'),
('Elias', 'Silva', 'Lubango', 'Tchioco'),
('Tatiana', 'Duarte', 'Malanje', 'Cangandala');

INSERT INTO telefoneClientes (idCliente, numeroTelefone) VALUES
(1, '931234567'),
(2, '932345678'),
(3, '933456789'),
(4, '934567890'),
(5, '935678901');

INSERT INTO fornecedores (pNome, uNome, municipio, bairro) VALUES
('André', 'Monteiro', 'Luanda', 'Talatona'),
('Márcia', 'Fernandes', 'Benguela', 'Baía Farta'),
('Carlos', 'Mendes', 'Huambo', 'São João'),
('Ana', 'Silva', 'Lubango', 'Nossa Senhora'),
('Miguel', 'Xavier', 'Malanje', 'Vila Matilde');

INSERT INTO telefoneFornecedores (idFornecedor, numeroTelefone) VALUES
(1, '941234567'),
(2, '942345678'),
(3, '943456789'),
(4, '944567890'),
(5, '945678901');

INSERT INTO categorias (nome, descricao) VALUES
('Analgésicos', 'Medicamentos para alívio da dor'),
('Antibióticos', 'Medicamentos para tratar infecções bacterianas'),
('Antialérgicos', 'Medicamentos para alergias'),
('Vitaminas', 'Suplementos vitamínicos'),
('Antitérmicos', 'Medicamentos para febre');

INSERT INTO produtos (nome, descricao, idCategoria, preco) VALUES
('Paracetamol', 'Alívio de dores e febre', 1, 1200.00),
('Amoxicilina', 'Antibiótico de amplo espectro', 2, 2500.00),
('Loratadina', 'Alívio de sintomas alérgicos', 3, 1800.00),
('Vitamina C', 'Suplemento para imunidade', 4, 2200.00),
('Ibuprofeno', 'Redução de febre e inflamação', 5, 1500.00);

INSERT INTO estoques (idProduto, quantidade, quantidadeVendida) VALUES
(1, 100, 20),
(2, 50, 10),
(3, 80, 15),
(4, 120, 25),
(5, 90, 30);

INSERT INTO entradas (idProduto, idFornecedor, quantidade, data) VALUES
(1, 1, 50, NOW()),
(2, 2, 30, NOW()),
(3, 3, 40, NOW()),
(4, 4, 60, NOW()),
(5, 5, 35, NOW());

INSERT INTO saidas (idProduto, quantidade, data) VALUES
(1, 5, NOW()),
(2, 3, NOW()),
(3, 7, NOW()),
(4, 10, NOW()),
(5, 8, NOW());

INSERT INTO vendas (idFuncionario, idCliente, investimento, valorTotal, troco, data) VALUES
(1, 1, 5000.00, 4500.00, 500.00, NOW()),
(2, 2, 7000.00, 6800.00, 200.00, NOW()),
(3, 3, 8000.00, 7500.00, 500.00, NOW()),
(4, 4, 6000.00, 5900.00, 100.00, NOW()),
(5, 5, 4000.00, 3500.00, 500.00, NOW());

INSERT INTO vendaProduto (idVenda, idProduto, quantidade, precoUnitario) VALUES
(1, 1, 2, 1200.00),
(2, 2, 1, 2500.00),
(3, 3, 3, 1800.00),
(4, 4, 2, 2200.00),
(5, 5, 4, 1500.00);


/* 
A inserção de dados deve fazer sentido...
Os dados do preçoUnitário para o valorTotal com a quantidade não batem
Verifique a consulta abaixo
...O precoUnitário no vendaproduto é para q? -_-?
PQ que o precoUnitário tem o mesmo valor do preco dos produtos?? Redundancia??
Talvez o precoUnitário devesse ser o preco do produto*a quantidade
Assim teriamos o valor total do mesmo produto e teriamos em conta que poderia ter mais produtos para dar um valorTotal que está na tabela vendas
Porque o valorTotal da tabela produtos é o valor total de toda a compra
*/

CREATE VIEW registro_vendas as
SELECT v.id as venda,f.`pNome`as funcionario, 
c.`pNome` as cliente, p.`nome` as produto, 
vp.quantidade, vp.`precoUnitario`, 
v.`valorTotal`, v.investimento,
v.troco, v.`data`
from funcionarios f 
JOIN vendas v on f.id = v.idFuncionario
JOIN clientes c on c.id = v.idCliente
JOIN vendaproduto vp on v.id = vp.idVenda
JOIN produtos p on p.id = vp.idProduto;

CREATE VIEW registro_entradas as
SELECT f.`pNome` as fornecedor, p.nome as 'produto fornecido', 
c.nome as 'categoria do produto', e.quantidade as 'quantidade fornecida',
e.data as 'data entrada'
from entradas e 
JOIN produtos p on p.id = e.`idProduto`
JOIN categorias c on c.id = p.`idCategoria`
JOIN fornecedores f on f.id = e.`idFornecedor`; 



create VIEW top_tres_produtos as
SELECT p.nome AS produto, SUM(vp.quantidade) AS total_vendido
FROM vendaProduto vp
JOIN produtos p ON vp.idProduto = p.id
GROUP BY p.id
ORDER BY total_vendido DESC
LIMIT 3;

SELECT * FROM top_tres_produtos;

create view vendas_mensais AS
SELECT DATE_FORMAT(v.data, '%Y-%m') AS mes, SUM(v.valorTotal) AS total
FROM vendas v
GROUP BY mes
ORDER BY total DESC;
SELECT * FROM vendas_mensais;

create view total_disponivel as
SELECT p.nome as estoque, SUM(e.quantidade - e.quantidadeVendida) AS total_disponivel
FROM estoques e
JOIN produtos p on e.idProduto = p.id
GROUP BY estoque
ORDER BY estoque DESC;
SELECT * FROM total_disponivel;

create view melhores_clientes as
SELECT c.pNome, c.uNome, SUM(vp.quantidade) AS total_comprado
FROM vendas v
JOIN clientes c ON v.idCliente = c.id
JOIN vendaProduto vp ON v.id = vp.idVenda
GROUP BY c.id
HAVING total_comprado > 3;
SELECT * FROM melhores_clientes;

create view produtos_categarias as
SELECT p.nome AS produto, c.nome AS categoria
FROM produtos p
JOIN categorias c ON p.idCategoria = c.id;

SELECT * FROM produtos_categarias;