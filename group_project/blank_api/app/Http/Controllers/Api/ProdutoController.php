<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Produto;
use App\Models\Categoria;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    public function index()
    {
        // Listar todos os produtos com suas relações
        $produtos = Produto::with([
            "categoria",
            "estoque",
            "entradas",
            "saidas",
        ])->get();
        return response()->json($produtos);
    }

    public function store(Request $request)
    {
        // Validar existência da categoria para manter integridade
        $request->validate([
            "nome" => "required|string|max:255",
            "preco" => "required|numeric",
            "idCategoria" => "required|exists:categorias,id", // Ajuste conforme nome da tabela/campo
            // outras validações que desejar
        ]);

        $produto = Produto::create($request->all());
        // Carregar relações para retorno
        $produto->load(["categoria", "estoque", "entradas", "saidas"]);

        return response()->json($produto, 201);
    }

    public function show($id)
    {
        $produto = Produto::with([
            "categoria",
            "estoque",
            "entradas",
            "saidas",
        ])->findOrFail($id);
        return response()->json($produto);
    }

    public function update(Request $request, $id)
    {
        $produto = Produto::findOrFail($id);

        // Validar categoria caso venha para atualizar
        $request->validate([
            "nome" => "sometimes|string|max:255",
            "preco" => "sometimes|numeric",
            "idCategoria" => "sometimes|exists:categorias,id",
        ]);

        $produto->update($request->all());
        $produto->load(["categoria", "estoque", "entradas", "saidas"]);

        return response()->json($produto);
    }

    public function destroy($id)
    {
        $produto = Produto::findOrFail($id);
        $produto->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
