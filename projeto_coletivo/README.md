# Estudo de caso

Algures na cidade de Luanda, muncípio de Viana, certa farmâcia tem enfrentado problemas relacionados à realização das suas atividades diárias, portanto decide implementar um sistema de informação que permita a gestão dos seus clientes, produtos e estoques, vendas efetuadas pelos clientes, bem como o controle e rastreamento de fornecedores e funcionários. Em relação à esses mesmos **funcionários**, deve-se saber o nome, o nº de telefone, o email e o endereço dos mesmos. Quanto aos **produtos**, o sistema deve armazenar informações como o nome, o preço e a sua respectiva categoria. Relativamente aos **clientes**, deve-se saber o nome, o nº de telefone e o endereço e dos **fornecedores**, os mesmos dados. Acerca dos **estoques**, serão armazenados dados como quantidade e quantidade vendida. Realizam-se entradas e saídas no estoque. Das **entradas** e **saídas**, deve-se saber a quantidade e a data. Além de tudo já mencionado, o sistema deve armazenar cada **venda** realizada, esta tem quantidade, valor total, investimento, troco e data. É importante pontuar que **uma venda pode ter vários produtos e um mesmo produto pode constar em várias vendas**. **Um cliente pode fazer várias vendas**, mas uma venda só é associada à um cliente. **Um funcionário pode registrar várias vendas**, porém uma venda só pode ser registrada por um funcionário. **Um produto pode está relacionado com um estoque**. **Um produto pode estar em várias entradas e em várias saídas**. E, por fim, **um f fornecedor pode fornecer produtos para várias entradas**, contudo um entrada só pode ser ter um fornecedor.

### MER

**funcionarios** (id, pNome, uNome, email, municipio, bairro); </br>
**telefoneFuncionarios** (id, idFuncionario, numeroTelefone); </br>
**clientes** (id, pNome, uNome, municipio, bairro); </br>
**telefoneClientes** (id, idCliente, numeroTelefone); </br>
**fornecedores** (id, pNome, uNome, municipio, bairro); </br>
**telefoneFornecedores** (id, idFornecedor, numeroTelefone); </br>
**categorias** (id, nome, descricao); </br>
**produtos** (id, nome, descricao, idCategoria, preco); </br>
**estoques** (id, idProduto, quantidade, quantidadeVendida); </br>
**entradas** (id, idProduto, idFornecedor, quantidade, data) </br>
**saidas** (id, idProduto, quantidade, data) </br>
**vendas** (id, idFuncionario, idCliente, investimento, valorTotal, troco, data) </br>
**vendaProduto** (id, idvenda, idProduto, quantidade, precoUnitario) </br>


## Normalização

#### **1ª Forma Normal (1FN) - Sem grupos repetitivos**  
A **1FN** exige que cada coluna armazene apenas valores atômicos e que não existam grupos repetitivos.  

#### **Como as tabelas atendem à 1FN?**
- Cada campo armazena apenas um único valor por linha.  
- Telefones de funcionários, clientes e fornecedores foram colocados em tabelas separadas (`telefoneFuncionarios`, `telefoneClientes` e `telefoneFornecedores`), em vez de permitir múltiplos números numa única célula.  
- A tabela `vendaProduto` foi criada para evitar listas de produtos dentro da `vendas`.  

---

#### **2ª Forma Normal (2FN) - Sem dependências parciais da chave primária**  
A **2FN** exige que **todas as colunas não-chave dependam completamente da chave primária**.  

#### **Como as tabelas atendem à 2FN?**  
- `telefoneFuncionarios`, `telefoneClientes` e `telefoneFornecedores` possuem **chaves estrangeiras** (`idFuncionario`, `idCliente`, `idFornecedor`), garantindo que os telefones pertencem exatamente a um registro principal.  
- `vendaProduto` relaciona `vendas` e `produtos`, evitando que os produtos fiquem diretamente na tabela `vendas`.  
- `estoques`, `entradas` e `saidas` têm relação direta com `produtos` e armazenam **apenas dados necessários**, evitando informações duplicadas.  

Nenhuma tabela contém colunas que só fazem sentido para parte da chave primária.  

---

#### **3ª Forma Normal (3FN) - Sem dependências transitivas**  
A **3FN** elimina dependências transitivas, ou seja, **uma coluna não pode depender de outra coluna que não seja a chave primária**.  

#### **Como as tabelas atendem à 3FN?**  
- `produtos` faz referência a `categorias` por meio do `idCategoria`. Assim, se precisar mudar o nome ou descrição de uma categoria, basta editar um único local, sem precisar repetir esse dado em cada produto.  
- `vendas` guarda apenas `idFuncionario` e `idCliente`, sem armazenar os nomes diretamente (que já existem nas tabelas `funcionarios` e `clientes`).  
- `estoques`, `entradas` e `saidas` relacionam apenas `idProduto`, sem armazenar nome ou preço, pois esses dados já estão em `produtos`.  


