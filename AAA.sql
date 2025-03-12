drop database administrativo;
create database administrativo;
use administrativo;
create table funcionarios(
		id int primary key auto_increment,
        nif int unique not null,
        p_nome varchar(30) not null,
        u_nome varchar(30) not null,
        email varchar(50) unique not null,
        provincia varchar(30) default "Luanda",
        municipio varchar(30),
        bairro varchar(30)
        );
create table func_telefones(
		id int primary key auto_increment,
        numeros int unique not null
        );
create table func_contactos(
		id int primary key auto_increment,
        func_nif int,
        foreign key (func_nif) references funcionarios(nif),
        id_tel int,
        foreign key (id_tel) references func_telefones(id)
        );
        
create table clientes(
		id int primary key auto_increment,
        p_nome varchar(30) not null,
        u_nome varchar(30) not null,
        email varchar(50),
        provincia varchar(30) default "Luanda",
        municipio varchar(30),
        bairro varchar(30)
        );
create table clientes_telefones(
		id int primary key auto_increment,
        numeros int unique not null
        );
create table clientes_contactos(
		id int primary key auto_increment,
        id_cliente int,
        foreign key (id_cliente) references clientes(id),
        id_tel int,
        foreign key (id_tel) references clientes_telefones(id)
        );
        
create table categorias(
		id int primary key auto_increment,
        nome varchar(30) not null
        );
create table produtos(
		id int primary key auto_increment,
        nome varchar(30) not null,
        preco int not null,
        data_validade date not null,
        id_categoria int,
		foreign key (id_categoria) references categorias(id)
        );

create table compras(
		id int primary key auto_increment,
        id_funcionario int,
        foreign key (id_funcionario) references funcionarios(id),
        id_cliente int,
        foreign key (id_cliente) references clientes(id),
        montante int not null,
        troco int not null,
        data_compra date not null,
        valor_total int not null
        );
create table itens(
		id int primary key auto_increment,
        id_produto int,
        foreign key (id_produto) references produtos(id),
        id_compra int,
        foreign key (id_compra) references compras(id),
        quantidade int not null,
        valor int not null
        );
     
insert into funcionarios(nif,p_nome,u_nome,email,provincia,municipio,bairro)values
(123,"Abner","Louren","ablori@gmail.com","Luanda","Zango",89),
(234,"Crismel","Prazeres","crism@gmail.com","Luanda","KK","Machsalda"),
(345,"Domingo","Cabomb","domi@gmail.com","Luanda","São Paulo","leorence"),
(456,"Deeper","Pains","deeer@gmail.com","Zaire","Grav falls",56),
(567,"Jarkodil","Dilson","jarkd@gmail.com","Cabinda","cacuaco",76);
insert into func_telefones(numeros)values
(957024977),
(922921925),
(928672383),
(957976975),
(914435746);
insert into func_contactos(func_nif,id_tel)values
(123,1),
(234,2),
(345,3),
(234,4),
(234,5);

insert into clientes(p_nome,u_nome,email,provincia,municipio,bairro)values
("Gumball","Watterson","wat@gmail.com","Luanda","Elmore",07),
("Craig","Williams","crg@gmail.com","Bengo","Riacho",09),
("John","Marser","john@gmail.com","Huila","Talatona",12),
("Maybal","Pains","myb@gmail.com","Zaire","grav falls",23),
("Benjamin","Tennyson","B10@gmail.com","Cabinda","Sequele",45);
insert into clientes_telefones(numeros)values
(946896977),
(923256123),
(912435643),
(959870543),
(914616341);
insert into clientes_contactos(id_cliente,id_tel)values
(5,1),
(3,2),
(2,3),
(2,4),
(1,5);

insert into categorias(nome)values
("antibioticos"),
("pensos"),
("analgesicos"),
("anestesico"),
("antiinflamatorio");
insert into produtos(nome,preco,data_validade,id_categoria)values
("Paracetamol",1200,'2010-10-10',1),
("Amoxicilina",4300,'2010-10-08',2),
("Azitromicina",1300,'2010-11-07',3),
("Ciprofloxacino",500,'2010-11-07',2),
("Esterilizadas",300,"2010-11-07",5);

insert into compras(id_funcionario,id_cliente,montante,troco,data_compra,valor_total)values
(1,2,4000,1600,"2024-10-14",3600),
(1,2,5200,900,"2024-11-14",4300),
(2,5,5000,3800,"2024-11-10",1200),
(3,4,52000,46800,"2024-11-10",5200),
(4,3,1200,200,"2024-11-10",1000);
insert into itens(id_produto,id_compra,quantidade,valor)values
(2,2,1,1200),
(3,3,1,1200),
(2,5,1,4300),
(5,1,4,5200),
(4,1,2,1000);

select f.*,ft.numeros from funcionarios as f 
join func_contactos as fc on 
f.nif = fc.func_nif 
join func_telefones as ft on
ft.id = fc.id_tel;

select c.*,ct.numeros from clientes as c 
join clientes_contactos as cc on 
c.id = cc.id_cliente 
join clientes_telefones as ct on
ct.id = cc.id_tel;

select p.nome as produto,p.preco,
p.data_validade,c.nome as categoria
from produtos as p
join categorias as c on
c.id = p.id_categoria;

select c.id as "ID da encomenda",c.montante,c.data_compra,c.valor_total, f.p_nome as "Nome do funcionario", cl.p_nome as "Nome do Cliente" from compras c
join funcionarios f on c.id_funcionario = f.id
join clientes cl on c.id_cliente = cl.id
where cl.p_nome = "Craig";
