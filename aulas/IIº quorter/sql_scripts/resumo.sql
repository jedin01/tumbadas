create database resumo;
use resumo;

create table unidades(
id int primary key auto_increment,
tema varchar(100) not null,
referencia varchar (50)
);

create table questoes(
id int primary key auto_increment,
pergunta varchar(100) not null,
id_unidade int,
foreign key(id_unidade) references unidades(id)
);

create table respostas(
id int primary key auto_increment,
resposta varchar(100) not null,
id_questoes int,
foreign key(id_questoes) references questoes(id)
);
create table obs(
id int primary key auto_increment,
conteudo varchar(100) not null,
id_questoes int,
foreign key(id_questoes) references questoes(id)
);

INSERT INTO
    unidades (
        tema,
        referencia
    )
VALUES (
        'FUNDAMENTOS DE BASE DE DADOS',
        'II'
    ),
    (
        'PROJECTO DE DADOS',
        'III'
    ),
    (
        'MODELO RELACIONAL',
        'V'
    ),
    (
        'FERRAMENTAS DE BASE DE DADOS',
        'VI'
    ),
    (
        'NORMALIZAÇÃO. parte.2',
        'VII'
    ),
    (
        'NORMALIZAÇÃO . parte.1',
        'IX'
    ),
    (
        'NORMALIZAÇÃO . parte.3',
        'IX'
    ),
    (
        'VIEWS E PROCEDIMENTOS ARMAZENADOS',
        'X'
    );


SELECT * from unidades;
--Primeira tarefa que o prof deixou
CREATE view perguntas_respostas_cada_unidade_view as
SELECT * from unidades u 
join questoes q ON u.id = q.id_unidade
join respostas r ON q.id = r.id_questoes;

--Segunda tarefa que o prof deixou
DELIMITER \\
CREATE Procedure insercao
(u VARCHAR(5),
q VARCHAR(30),
an VARCHAR(30),
obss VARCHAR(30))
    BEGIN
        INSERT INTO questoes (pergunta, id_unidade) 
        VALUES (q, u);
        
        SET @questoes_id = LAST_INSERT_ID();
        
        INSERT INTO respostas (resposta, id_questoes) 
        VALUES (an, @questoes_id);
        INSERT INTO obs (conteudo, id_questoes) 
        VALUES (obss, @questoes_id);
    END \\
DELIMITER ;
CALL insercao("X","jasndjan","asdafa","asfadsad");

--Terceira tarefa que o prof deixou
...