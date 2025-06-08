<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        DB::table('categorias')->insert([
                  ['nome' => 'Analgésicos', 'descricao' => 'Medicamentos para dor'],
                  ['nome' => 'Antibióticos', 'descricao' => 'Combate a infecções bacterianas'],
                  ['nome' => 'Antialérgicos', 'descricao' => 'Controle de reações alérgicas'],
              ]);

              // Produtos
              DB::table('produtos')->insert([
                  ['nome' => 'Paracetamol 500mg', 'descricao' => 'Alívio da dor e febre', 'idCategoria' => 1, 'preco' => 800],
                  ['nome' => 'Amoxicilina 500mg', 'descricao' => 'Antibiótico para infecções', 'idCategoria' => 2, 'preco' => 2500],
                  ['nome' => 'Loratadina 10mg', 'descricao' => 'Antialérgico', 'idCategoria' => 3, 'preco' => 1200],
              ]);

              // Clientes
              DB::table('clientes')->insert([
                  ['pNome' => 'Carlos', 'uNome' => 'Silva', 'municipio' => 'Viana', 'bairro' => 'Cazenga'],
                  ['pNome' => 'Marta', 'uNome' => 'Domingos', 'municipio' => 'Viana', 'bairro' => 'Zango 3'],
              ]);

              DB::table('telefone_clientes')->insert([
                  ['idCliente' => 1, 'numeroTelefone' => '923456789'],
                  ['idCliente' => 2, 'numeroTelefone' => '929876543'],
              ]);

              // Fornecedores
              DB::table('fornecedores')->insert([
                  ['pNome' => 'Paulo', 'uNome' => 'Andrade', 'municipio' => 'Talatona', 'bairro' => 'Camama'],
                  ['pNome' => 'Joana', 'uNome' => 'Fernandes', 'municipio' => 'Maianga', 'bairro' => 'Prenda'],
              ]);

              DB::table('telefone_fornecedores')->insert([
                  ['idFornecedor' => 1, 'numeroTelefone' => '920111222'],
                  ['idFornecedor' => 2, 'numeroTelefone' => '928333444'],
              ]);

              // Funcionários
              DB::table('funcionarios')->insert([
                  ['pNome' => 'José', 'uNome' => 'Gomes', 'email' => 'josegomes@farmacia.co.ao', 'municipio' => 'Viana', 'bairro' => 'Zango 1'],
                  ['pNome' => 'Ana', 'uNome' => 'Morais', 'email' => 'anamorais@farmacia.co.ao', 'municipio' => 'Viana', 'bairro' => 'Cacuaco'],
              ]);

              DB::table('telefone_funcionarios')->insert([
                  ['idFuncionario' => 1, 'numeroTelefone' => '924555666'],
                  ['idFuncionario' => 2, 'numeroTelefone' => '923444333'],
              ]);

              // Estoques
              DB::table('estoques')->insert([
                  ['idProduto' => 1, 'quantidade' => 100, 'quantidadeVendida' => 40],
                  ['idProduto' => 2, 'quantidade' => 150, 'quantidadeVendida' => 80],
                  ['idProduto' => 3, 'quantidade' => 200, 'quantidadeVendida' => 100],
              ]);

              // Entradas
              DB::table('entradas')->insert([
                  ['idProduto' => 1, 'idFornecedor' => 1, 'quantidade' => 50, 'data' => '2025-06-01'],
                  ['idProduto' => 2, 'idFornecedor' => 2, 'quantidade' => 80, 'data' => '2025-06-02'],
              ]);

              // Saídas
              DB::table('saidas')->insert([
                  ['idProduto' => 1, 'quantidade' => 20, 'data' => '2025-06-04'],
                  ['idProduto' => 2, 'quantidade' => 50, 'data' => '2025-06-05'],
              ]);

              // Vendas
              DB::table('vendas')->insert([
                  ['idFuncionario' => 1, 'idCliente' => 1, 'investimento' => 2000, 'valorTotal' => 1800, 'troco' => 200, 'data' => '2025-06-06'],
                  ['idFuncionario' => 2, 'idCliente' => 2, 'investimento' => 3000, 'valorTotal' => 2500, 'troco' => 500, 'data' => '2025-06-07'],
              ]);

              // VendaProduto
              DB::table('venda_produtos')->insert([
                  ['idvenda' => 1, 'idProduto' => 1, 'quantidade' => 2, 'precoUnitario' => 800],
                  ['idvenda' => 1, 'idProduto' => 3, 'quantidade' => 1, 'precoUnitario' => 1200],
                  ['idvenda' => 2, 'idProduto' => 2, 'quantidade' => 1, 'precoUnitario' => 2500],
              ]);
    }
}
