<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entrada;
use Illuminate\Http\Request;

class EntradaController extends Controller
{
    public function index()
    {
        // Retorna todas as entradas com produto e fornecedor associados
        $entradas = Entrada::with(["produto", "fornecedor"])->get();
        return response()->json($entradas);
    }

    public function store(Request $request)
    {
        // Validação dos dados
        $request->validate([
            "idProduto" => "required|exists:produtos,id",
            "idFornecedor" => "required|exists:fornecedores,id",
            "quantidade" => "required|integer|min:1",
            "data" => "required|date",
        ]);

        // Cria e retorna a nova entrada com as relações carregadas
        $entrada = Entrada::create($request->all());
        $entrada->load(["produto", "fornecedor"]);

        return response()->json($entrada, 201);
    }

    public function show($id)
    {
        $entrada = Entrada::with(["produto", "fornecedor"])->findOrFail($id);
        return response()->json($entrada);
    }

    public function update(Request $request, $id)
    {
        $entrada = Entrada::findOrFail($id);

        // Validação para atualização parcial
        $request->validate([
            "idProduto" => "sometimes|exists:produtos,id",
            "idFornecedor" => "sometimes|exists:fornecedores,id",
            "quantidade" => "sometimes|integer|min:1",
            "data" => "sometimes|date",
        ]);

        $entrada->update($request->all());
        $entrada->load(["produto", "fornecedor"]);

        return response()->json($entrada);
    }

    public function destroy($id)
    {
        $entrada = Entrada::findOrFail($id);
        $entrada->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
