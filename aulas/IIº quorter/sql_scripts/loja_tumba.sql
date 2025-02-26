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



 
 





