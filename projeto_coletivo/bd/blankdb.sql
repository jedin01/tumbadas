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
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios (id)
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
    FOREIGN KEY (idCliente) REFERENCES clientes (id)
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
    FOREIGN KEY (idFornecedor) REFERENCES fornecedores (id)
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
    preco DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (idCategoria) REFERENCES categorias (id)
);

CREATE TABLE estoques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduto INT NOT NULL,
    quantidade INT NOT NULL,
    quantidadeVendida INT NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produtos (id)
);

CREATE TABLE entradas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduto INT NOT NULL,
    idFornecedor INT NOT NULL,
    quantidade INT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produtos (id),
    FOREIGN KEY (idFornecedor) REFERENCES fornecedores (id)
);

CREATE TABLE saidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduto INT NOT NULL,
    quantidade INT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES produtos (id)
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idFuncionario INT NOT NULL,
    idCliente INT NOT NULL,
    investimento DECIMAL(10, 2) NOT NULL,
    valorTotal DECIMAL(10, 2) NOT NULL,
    troco DECIMAL(10, 2) NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios (id),
    FOREIGN KEY (idCliente) REFERENCES clientes (id)
);

CREATE TABLE vendaProduto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idVenda INT NOT NULL,
    idProduto INT NOT NULL,
    quantidade INT NOT NULL,
    precoUnitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (idVenda) REFERENCES vendas (id),
    FOREIGN KEY (idProduto) REFERENCES produtos (id)
);

INSERT INTO
    funcionarios (
        pNome,
        uNome,
        email,
        municipio,
        bairro
    )
VALUES (
        'Abner',
        'Lourenço',
        'abner@email.com',
        'Luanda',
        'Ingombota'
    ),
    (
        'Jarede',
        'Fernandes',
        'jarede@email.com',
        'Benguela',
        'Lobito'
    ),
    (
        'Crismélio',
        'Cristôvão',
        'crismelio@email.com',
        'Huambo',
        'São João'
    ),
    (
        'Domingos',
        'Cabombo',
        'domingos@email.com',
        'Lubango',
        'Nossa Senhora'
    ),
    (
        'Igor',
        'Semedo',
        'igor@email.com',
        'Malanje',
        'Vila Matilde'
    );

INSERT INTO
    telefoneFuncionarios (idFuncionario, numeroTelefone)
VALUES (1, '923456789'),
    (2, '924567890'),
    (3, '925678901'),
    (4, '926789012'),
    (5, '927890123');

INSERT INTO
    clientes (
        pNome,
        uNome,
        municipio,
        bairro
    )
VALUES (
        'Keith',
        'Tavares',
        'Luanda',
        'Sambizanga'
    ),
    (
        'Josemar',
        'Costa',
        'Benguela',
        'Catumbela'
    ),
    (
        'Natália',
        'Mendes',
        'Huambo',
        'Benfica'
    ),
    (
        'Elias',
        'Silva',
        'Lubango',
        'Tchioco'
    ),
    (
        'Tatiana',
        'Duarte',
        'Malanje',
        'Cangandala'
    );

INSERT INTO
    telefoneClientes (idCliente, numeroTelefone)
VALUES (1, '931234567'),
    (2, '932345678'),
    (3, '933456789'),
    (4, '934567890'),
    (5, '935678901');

INSERT INTO
    fornecedores (
        pNome,
        uNome,
        municipio,
        bairro
    )
VALUES (
        'André',
        'Monteiro',
        'Luanda',
        'Talatona'
    ),
    (
        'Márcia',
        'Fernandes',
        'Benguela',
        'Baía Farta'
    ),
    (
        'Carlos',
        'Mendes',
        'Huambo',
        'São João'
    ),
    (
        'Ana',
        'Silva',
        'Lubango',
        'Nossa Senhora'
    ),
    (
        'Miguel',
        'Xavier',
        'Malanje',
        'Vila Matilde'
    );

INSERT INTO
    telefoneFornecedores (idFornecedor, numeroTelefone)
VALUES (1, '941234567'),
    (2, '942345678'),
    (3, '943456789'),
    (4, '944567890'),
    (5, '945678901');

INSERT INTO
    categorias (nome, descricao)
VALUES (
        'Analgésicos',
        'Medicamentos para alívio da dor'
    ),
    (
        'Antibióticos',
        'Medicamentos para tratar infecções bacterianas'
    ),
    (
        'Antialérgicos',
        'Medicamentos para alergias'
    ),
    (
        'Vitaminas',
        'Suplementos vitamínicos'
    ),
    (
        'Antitérmicos',
        'Medicamentos para febre'
    );

INSERT INTO
    produtos (
        nome,
        descricao,
        idCategoria,
        preco
    )
VALUES (
        'Paracetamol',
        'Alívio de dores e febre',
        1,
        1200.00
    ),
    (
        'Amoxicilina',
        'Antibiótico de amplo espectro',
        2,
        2500.00
    ),
    (
        'Loratadina',
        'Alívio de sintomas alérgicos',
        3,
        1800.00
    ),
    (
        'Vitamina C',
        'Suplemento para imunidade',
        4,
        2200.00
    ),
    (
        'Ibuprofeno',
        'Redução de febre e inflamação',
        5,
        1500.00
    );

INSERT INTO
    estoques (
        idProduto,
        quantidade,
        quantidadeVendida
    )
VALUES (1, 100, 20),
    (2, 50, 10),
    (3, 80, 15),
    (4, 120, 25),
    (5, 90, 30);

INSERT INTO
    entradas (
        idProduto,
        idFornecedor,
        quantidade,
        data
    )
VALUES (1, 1, 50, NOW()),
    (2, 2, 30, NOW()),
    (3, 3, 40, NOW()),
    (4, 4, 60, NOW()),
    (5, 5, 35, NOW());

INSERT INTO
    saidas (idProduto, quantidade, data)
VALUES (1, 5, NOW()),
    (2, 3, NOW()),
    (3, 7, NOW()),
    (4, 10, NOW()),
    (5, 8, NOW());

INSERT INTO
    vendas (
        idFuncionario,
        idCliente,
        investimento,
        valorTotal,
        troco,
        data
    )
VALUES (
        1,
        1,
        5000.00,
        4500.00,
        500.00,
        NOW()
    ),
    (
        2,
        2,
        7000.00,
        6800.00,
        200.00,
        NOW()
    ),
    (
        3,
        3,
        8000.00,
        7500.00,
        500.00,
        NOW()
    ),
    (
        4,
        4,
        6000.00,
        5900.00,
        100.00,
        NOW()
    ),
    (
        5,
        5,
        4000.00,
        3500.00,
        500.00,
        NOW()
    );

INSERT INTO
    vendaProduto (
        idVenda,
        idProduto,
        quantidade,
        precoUnitario
    )
VALUES (1, 1, 2, 1200.00),
    (2, 2, 1, 2500.00),
    (3, 3, 3, 1800.00),
    (4, 4, 2, 2200.00),
    (5, 5, 4, 1500.00);




/*
Esta consulta retorna a quantidade total do produto "Paracetamol" 
vendido pelo funcionário "Abner", que foi fornecido pelo fornecedor 
"André", no dia 10 de Março de 2025. O resultado inclui o nome do funcionário, o nome 
do fornecedor, o nome do produto, a quantidade total vendida e a data da venda.
*/

SELECT
    f.pNome AS funcionario_nome,
    fornec.pNome AS fornecedor_nome,
    p.nome AS produto_nome,
    SUM(vp.quantidade) AS total_vendido,
    v.data
FROM
    funcionarios f
    JOIN vendas v ON f.id = v.idFuncionario
    JOIN vendaProduto vp ON v.id = vp.idVenda
    JOIN produtos p ON vp.idProduto = p.id
    JOIN entradas e ON p.id = e.idProduto
    AND e.idFornecedor = 1
    JOIN fornecedores fornec ON e.idFornecedor = fornec.id
WHERE
    p.nome = 'Paracetamol'
    AND f.pNome = 'Abner'
    AND fornec.pNome = 'André'
    AND DATE(v.data) = '2025-03-10'
GROUP BY
    f.pNome,
    f.uNome,
    fornec.pNome,
    fornec.uNome,
    p.nome,
    v.data;

/*
Essa consulta retorna a quantidade total 
de produtos vendidos por cada funcionário dentro do 
período entre 10 de março de 2025 e 15 de março de 2025.
*/

SELECT
    f.pNome AS funcionario_nome,
    SUM(vp.quantidade) AS total_vendido,
    MIN(v.data) AS data_inicial,
    MAX(v.data) AS data_final
FROM
    funcionarios f
    JOIN vendas v ON f.id = v.idFuncionario
    JOIN vendaProduto vp ON v.id = vp.idVenda
WHERE
    v.data BETWEEN '2025-03-10' AND '2025-03-15'
GROUP BY
    f.pNome,
    f.uNome;


/*
    Essa consulta identifica o funcionário que mais vendeu Ibuprofeno à cliente Tatiana no mês de Março de 2025. 
    Ela mostra o primeiro nome do funcionario, soma a quantidade vendida e ordena os resultados 
    em ordem decrescente, retornando apenas o funcionário com o maior total de vendas.
*/

SELECT
    f.pNome AS funcionario_nome,
    p.nome AS produto_nome,
    SUM(vp.quantidade) AS total_vendido
FROM
    funcionarios f
    JOIN vendas v ON f.id = v.idFuncionario
    JOIN vendaProduto vp ON v.id = vp.idVenda
    JOIN produtos p ON vp.idProduto = p.id
    JOIN clientes c on v.`idCliente`= c.id
WHERE
    p.nome = 'Ibuprofeno'
    AND c.pNome = 'Tatiana'
     AND v.data BETWEEN '2025-03-01' AND '2025-03-31'
GROUP BY
    f.pNome,
    p.nome,
    DATE(v.data)
ORDER BY total_vendido DESC
LIMIT 1;


/*
    Esta consulta SQL identifica os três produtos mais vendidos 
    e os clientes que mais compraram esses produtos, ordenando os 
    resultados por produto e pela quantidade comprada.
*/

SELECT
    tp.produto_nome,
    c.pNome AS cliente_nome,
    SUM(vp.quantidade) AS total_comprado
FROM
    (SELECT 
        p.id AS produto_id, 
        p.nome AS produto_nome
     FROM produtos p
     JOIN vendaProduto vp ON p.id = vp.idProduto
     JOIN vendas v ON vp.idVenda = v.id
     GROUP BY p.id, p.nome
     ORDER BY SUM(vp.quantidade) DESC
     LIMIT 3) AS tp
    JOIN vendaProduto vp ON tp.produto_id = vp.idProduto
    JOIN vendas v ON vp.idVenda = v.id
    JOIN clientes c ON v.idCliente = c.id
GROUP BY
    tp.produto_nome, c.pNome
ORDER BY
    tp.produto_nome, total_comprado DESC;


/*
    Esta consulta identifica a venda de maior valor realizada pelo 
    funcionário Crismélio para a cliente Natália.
*/

SELECT 
    v.id AS venda_id,
    c.pNome AS cliente_nome,
    f.pNome AS funcionario_nome,
    SUM(vp.quantidade * p.preco) AS valor_total
FROM 
    vendas v
    JOIN clientes c ON v.idCliente = c.id
    JOIN funcionarios f ON v.idFuncionario = f.id
    JOIN vendaProduto vp ON v.id = vp.idVenda
    JOIN produtos p ON vp.idProduto = p.id
WHERE 
    c.pNome = 'Natália' 
    AND f.pNome = 'Crismélio'
GROUP BY 
    v.id, c.pNome, f.pNome
ORDER BY 
    valor_total DESC
LIMIT 1;

/*
    Esta consulta identifica o funcionário com o maior faturamento total em vendas. 
*/

SELECT 
    f.pNome AS funcionario_nome,
    SUM(vp.quantidade * p.preco) AS total_faturado
FROM 
    funcionarios f
    JOIN vendas v ON f.id = v.idFuncionario
    JOIN vendaProduto vp ON v.id = vp.idVenda
    JOIN produtos p ON vp.idProduto = p.id
GROUP BY 
    f.pNome
ORDER BY 
    total_faturado DESC
LIMIT 1;


