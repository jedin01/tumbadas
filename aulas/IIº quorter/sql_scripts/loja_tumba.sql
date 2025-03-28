create database loja_tumba;
use loja_tumba;

create table clientes(
id_cliente int primary key auto_increment,
nome varchar(100) not null,
email varchar (50) unique,
morada varchar(40)
idade int,
genero enum('M','F')
);

describe clientes;
select*from clientes;
drop table clientes;
insert into clientes (id_cliente,nome,email, idade , genero,morada)
values (69,"Antonio","Antonio@gmail.com",null,"M","Viana");
insert into clientes (id_cliente,nome,email, idade , genero,morada)
values (45,"João","João@gmail.com",18,"M","Viana");
insert into clientes (id_cliente,nome,email, idade , genero,morada)
values (142,"Ana","Ana@gmail.com",22,"F","Viana");
insert into clientes (id_cliente,nome,email, idade , genero,morada)
values (18,"Manuel","Manuel@gmail.com",23,"M","Viana");
describe clientes;
select*from clientes;
alter table clientes add morada  varchar(30);

create table produtos(
id int primary key auto_increment,
nome varchar(20),
descricao varchar (50) not null,
preco decimal (10, 2),
quantidade int
);
alter table produtos add Quantidade int;
select*from produtos;
insert into produtos (id,nome, descricao, preco,quantidade)
values (1,"cocacola","refri",500,2000);
insert into produtos (id,nome, descricao, preco,quantidade)
values (2,"água","água",1000,4000);
insert into produtos (id,nome, descricao, preco,quantidade)
values (3,"vinho","Alc",100,400);
insert into produtos (id,nome, descricao, preco,quantidade)
values (4,"camiseta básica","camiseta de algodão básica para usuário",29.99,800);
insert into produtos (id,nome, descricao, preco,Quantidade)
values (5,"calça jeans","calça jeans de corte recto e lavagem clara",49.99,9);
insert into produtos (id,nome, descricao, preco,Quantidade)
values (6,"ténis desportivo","ténis desportivo leve e confortável...",79.99,10);
insert into produtos (id,nome, descricao, preco,Quantidade)
values (7,"relógio de pulso","relogio analógico de pulso com pulseira de couro",500,4000);
insert into produtos (id,nome, descricao, preco,Quantidade)
values (8,"mochila","mochila resistente com múltiplos compartimentos",39.99,14);
insert into produtos (id,nome, descricao, preco,Quantidade)
values (9,"óculos de sol ","óculos de sol com proteção UV e armação de acetato",59.99,23);


create table encomenda(
id int primary key auto_increment,
id_cliente int ,
estado varchar(20),
foreign key (id_cliente) references clientes(id_cliente),
data date null,
valor double
);

alter table encomenda add valor double;
insert into encomenda (id,id_cliente,estado,valor)
values (100,69, "Pendente",15000.00);
insert into encomenda (id,id_cliente,estado,valor)
values (101,18, "Em Processamento",30000.00);
insert into encomenda (id,id_cliente,estado,valor)
values (102,142, "Cancelada",12500.00);
insert into encomenda(id,id_cliente,estado,valor)
values (103,18, "Processada",5000.00);
insert into encomenda (id,id_cliente,estado,valor)
values (104,18, "Processada",18500.00);
insert into encomenda (id,id_cliente,estado,valor)
values (105,142, "Processada",20000.00);
insert into encomenda (id,id_cliente,estado,valor)
values (106,142, "Em Processamento",55000);
 describe encomenda;
select*from encomenda;

create table encomendas_produtos(
id int not null auto_increment primary key,
qtd int,
valor double,
id_encomenda int,
id_produto int,
foreign key(id_encomenda) references encomenda(id), 
foreign key(id_produto) references produtos(id) 
);

insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (1,10,qtd*500,100,1);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (2,10,qtd*1000,100,2);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (3,200,qtd*100,101,3);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (4,10,qtd*500,101,2);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (5,70,qtd*79.99,102,6);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (6,69,qtd*99.99,102,7);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (7,50,qtd*100,103,3);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (8,18,qtd*1000,104,2);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (9,5,qtd*99.99,104,7);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (10,100,qtd*100,105,3);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (11,20,qtd*500,105,1);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (12,200,qtd*59.99,106,9);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (13,72,qtd*39.99,106,8);
insert into encomendas_produtos(id,qtd, valor, id_encomenda,id_produto)
values (14,500,qtd*99.99,106,7);
select*from encomendas_produtos;

use loja_tumba;

select genero, count(*) as total from clientes group by genero;

select * from clientes, encomenda where clientes.id = encomenda.id_cliente;

select * from clientes as c, encomenda as e where c.id = e.id_cliente;

SELECT * FROM clientes inner join(encomenda) on clientes.id = encomenda.id_cliente;



create table alunos(
    id int PRIMARY key AUTO_INCREMENT,
    nome VARCHAR(20),
    sexo enum("M", "F"),
    provincia VARCHAR(30)
);

create table notas(
     id int PRIMARY key AUTO_INCREMENT,
     valor DECIMAL(10,1),
     id_aluno int, 
     Foreign Key (id_aluno) REFERENCES alunos(id)
);


insert into alunos(nome, sexo, provincia) values ("Pedro", 1, "Cabinda"), ("Rosa", 2, "Luanda"),
(
    "Tina",
    2,
    "Zaire"
),
(
    "Paulo",
    1,
    "Namibe"
)

insert into notas (id_aluno,valor) values (1,9),(2,10),(4,8),(null,10)

SELECT * from alunos inner join notas on alunos.id = notas.id_aluno;
SELECT * from alunos left join notas on alunos.id = notas.id_aluno;

SELECT * from alunos right join notas on alunos.id = notas.id_aluno;


SELECT * FROM produtos, clientes, encomendas_produtos inner join encomenda on clientes.id = encomenda.id_cliente inner join encomendas_produtos on encomendas_produtos.id_produto = produtos.id;


SELECT * from encomenda where valor = (SELECT min(valor) from encomenda)


SELECT id, nome from clientes where id not in (SELECT id_cliente from encomenda where estado like "Em Processamento")

SELECT id, nome from clientes as c where not EXISTS (SELECT * from encomenda WHERE c.id = id_cliente);

// primeira questao

SELECT *
FROM clientes  c
JOIN encomenda e ON c.id = e.id_cliente
JOIN encomendas_produtos ep ON ep.id_encomenda = e.id
JOIN produtos p on ep.id_produto = p.id;

// segunda questao

SELECT p.nome as produtos, p.preco, ep.qtd as quantidade
FROM encomendas_produtos ep
JOIN produtos p ON ep.id_produto = p.id
JOIN encomenda e on ep.id_encomenda = e.id
WHERE e.valor = 5500;


// tds os produtos pertencentes à encomenda cujo valor = 35k

// terceira questao 

SELECT c.nome AS cliente, p.nome AS produto, e.estado
FROM encomendas_produtos eps
JOIN encomenda e ON eps.id_encomenda = e.id
JOIN clientes c ON e.id_cliente = c.id
JOIN produtos p on eps.id_produto = p.id
JOIN encomendas_produtos ep ON p.id = eps.id_produto
WHERE e.estado = "Em Processamento";

// quarta questao

SELECT p.nome as produtos, ep.qtd as quantidade, e.id as encomenda_id
FROM encomendas_produtos ep
JOIN produtos p ON ep.id_produto = p.id
JOIN encomenda e on ep.id_encomenda = e.id
 

create view qnt_produto_view as SELECT id, nome from clientes as c where not EXISTS (SELECT * from encomenda WHERE c.id = id_cliente);


SELECT * FROM qnt_produto_view;
create view encomendas_processadas as SELECT e.id as encomenda_id, e.estado from encomenda e WHERE e.estado="Processada";

SELECT * FROM encomendas_processadas;



/*-------------------------TPC----------------------*/

/*

1. use a bd GCBD;
2. crie uma view d produts e suas respectivas vategorias. Na view deve constar o ID, nome do produto, nome da categora e preco;
3. Crie uma view de nome da "EncomendasCarlos" q mostre todas as encomendas (e seus respectivos detlhes) processadas pelo funcionario Carlos. Use subconsultas smpr q necessario;
4. Crie uma view d nome Diario_de_Caixa q mostre o total d faturamento por dia.


*/



DELIMITER;
create PROCEDURE PA_Enc_Cancel() BEGIN SELECT * from encomenda WHERE estado LIKE 'Cancelada';
END;
DELIMITER;
CALL PA_Enc_Cancel();

create table categorias(
    id int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
);
CREATE table funcionarios(
    id int PRIMARY KEY AUTO_INCREMENT,
    pnome VARCHAR(30),
    email VARCHAR(30)
    
);

INSERT INTO funcionarios(pnome) VALUES("Carlos");


/************************************/

// primeiro caso

CREATE VIEW Produtos_Categorias AS
SELECT 
    p.id AS ID, 
    p.nome AS Nome_Produto, 
    c.nome AS Nome_Categoria, 
    p.preco AS Preco
FROM produtos p
JOIN categorias c ON p.id_categoria = c.id;

//segundo caso

CREATE VIEW EncomendasCarlos as 
SELECT
    e.id AS ID_Encomenda, 
    f.pnome AS Funcionario,
    c.nome AS Cliente, 
    p.nome AS Produto,
    ep.qtd as Quantidade,
    p.preco as Preco,
    e.data as Data
FROM encomenda e
JOIN encomendas_produtos ep ON e.id = ep.id_encomenda
JOIN produtos p ON ep.id_produto = p.id
JOIN clientes c ON e.id_cliente = c.id
JOIN funcionarios f ON e.id_funcionario = f.id
WHERE f.pnome = 'Abner';

// terceiro caso

CREATE VIEW Diario_de_Caixa as 
SELECT 
    data AS Data,
    SUM(ep.qtd * ep.valor) AS Total_Faturamento
FROM encomenda e
JOIN encomendas_produtos ep ON e.id = ep.id_encomenda
GROUP BY data;


/******* mar12 14:04 *******/

CREATE DATABASE login;

use login;

create table login (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome_utilizador VARCHAR(30),
    senha VARCHAR(30)
);

insert into login (nome_utilizador, senha) values ('abnerLOuren', 'admin');

use login;

// first one

CREATE PROCEDURE fazer_login(
    IN user VARCHAR(255), 
    IN pass VARCHAR(255),
    OUT msg VARCHAR(10)
)
BEGIN
    DECLARE existe INT;
    
    SELECT COUNT(*) INTO existe 
    FROM login 
    WHERE nome_utilizador = user AND senha = pass;
    
    IF existe > 0 THEN
        SET msg = 'Sucesso';
    ELSE
        SET msg = 'Erro';
    END IF;
END

CALL fazer_login('h', 'admin', @msg);
SELECT @msg;


//second one


CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    total_inscritos INT DEFAULT 0
);

CREATE TABLE inscricoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    disciplina_id INT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id) ON DELETE CASCADE
);

DELIMITER $$

CREATE PROCEDURE gerir_inscricao(
    IN operacao TINYINT, 
    IN aluno_id INT, 
    IN disciplina_id INT
)
BEGIN
    DECLARE total_alunos INT;

    CASE 
        WHEN operacao = 1 THEN
            INSERT INTO inscricoes (aluno_id, disciplina_id)
            VALUES (aluno_id, disciplina_id);
        WHEN operacao = 0 THEN
            DELETE FROM inscricoes 
            WHERE aluno_id = aluno_id AND disciplina_id = disciplina_id;
    END CASE;
    
    SELECT COUNT(*) INTO total_alunos FROM inscricoes WHERE disciplina_id = disciplina_id;
    
    UPDATE disciplinas 
    SET total_inscritos = total_alunos 
    WHERE id = disciplina_id;
END

DELIMITER ;

//Third one

CREATE DATABASE BD_RH;
USE BD_RH;

CREATE TABLE Departamentos (
    id_departamento INT PRIMARY KEY,
    nome_departamento VARCHAR(100) NOT NULL
);

CREATE TABLE Funcionarios (
    id_funcionario INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL CHECK (salario > 0),
    id_departamento INT,
    FOREIGN KEY (id_departamento) REFERENCES Departamentos(id_departamento) ON DELETE SET NULL
);

DELIMITER $$

CREATE PROCEDURE DarBonificacao(
    IN p_valor_base INT,         -- Valor fixo da bonificação
    IN p_limite INT,             -- Quantidade máxima de aumentos
    IN p_id_departamento INT     -- Departamento a ser bonificado
)
BEGIN
    DECLARE v_contador INT DEFAULT 0;   -- Controla quantas vezes o salário foi aumentado
    DECLARE v_total_funcionarios INT;   -- Guarda a quantidade de funcionários afetados

    -- Verificar quantos funcionários serão afetados
    SELECT COUNT(*) INTO v_total_funcionarios
    FROM Funcionarios
    WHERE id_departamento = p_id_departamento;

    -- Caso não haja funcionários no departamento, lançar um erro
    IF v_total_funcionarios = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Erro: Nenhum funcionário encontrado no departamento informado.';
    END IF;

    -- Aplicar bonificação enquanto não atingir o limite
    WHILE v_contador < p_limite DO
        UPDATE Funcionarios
        SET salario = salario + p_valor_base
        WHERE id_departamento = p_id_departamento;

        SET v_contador = v_contador + 1;
    END WHILE;

    -- Exibir mensagem de sucesso
    SELECT CONCAT('Bonificação aplicada ', p_limite, ' vezes no departamento ', p_id_departamento) AS Mensagem;
END $$

DELIMITER ;

-- Inserir departamentos
INSERT INTO Departamentos (id_departamento, nome_departamento) VALUES
(1, 'TI'),
(2, 'Recursos Humanos');

-- Inserir funcionários
INSERT INTO Funcionarios (id_funcionario, nome, salario, id_departamento) VALUES
(101, 'Carlos Silva', 10000, 1),
(102, 'Maria Santos', 12000, 1),
(103, 'João Pereira', 9000, 2);

CALL DarBonificacao(100, 3, 1);

INSERT INTO alunos (nome) VALUES ('João'), ('Maria'), ('Pedro');
INSERT INTO disciplinas (nome) VALUES ('Matemática'), ('História'), ('Física');

CALL gerir_inscricao(1, 1, 1);
CALL gerir_inscricao(1, 2, 1);
CALL gerir_inscricao(1, 3, 2);
CALL gerir_inscricao(0, 1, 1);

SELECT * FROM alunos;
SELECT * FROM disciplinas;
SELECT * FROM inscricoes;

create PROCEDURE atualizar_preco(
    valor float(10,2)
)
begin
    UPDATE produtos SET preco = preco+(preco*valor);
END

create PROCEDURE atualizar_preco3(
    i int,
    valor float(10,2),
    OUT p float(10,2)
)
begin
    UPDATE produtos SET preco = preco+(preco*valor)
    WHERE id = i;
    set p = (SELECT preco FROM produtos WHERE id = i);
END;

CALL atualizar_preco3 (1, 10, @c);

SELECT @c as "Preco atual";

create PROCEDURE atualizar_preco4(
    i int,
    valor float(10,2),
    OUT p float(10,2)
)
begin
    IF(i<10) THEN
    UPDATE produtos SET preco = preco-2;
    ELSE
    UPDATE produtos SET preco = preco-10;
    end if;
    set p = (SELECT preco FROM produtos WHERE id = i);
END;
