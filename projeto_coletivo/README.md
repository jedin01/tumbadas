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

