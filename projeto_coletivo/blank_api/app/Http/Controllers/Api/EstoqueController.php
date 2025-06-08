<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Estoque;
use Illuminate\Http\Request;

class EstoqueController extends Controller
{
    public function index()
    {
        // Listar todos os registros de estoque com o produto associado
        $estoques = Estoque::with("produto")->get();
        return response()->json($estoques);
    }

    public function store(Request $request)
    {
        // Validar dados recebidos
        $request->validate([
            "idProduto" => "required|exists:produtos,id",
            "quantidade" => "required|integer|min:0",
            "quantidadeVendida" => "required|integer|min:0",
        ]);

        $estoque = Estoque::create($request->all());
        $estoque->load("produto");

        return response()->json($estoque, 201);
    }

    public function show($id)
    {
        $estoque = Estoque::with("produto")->findOrFail($id);
        return response()->json($estoque);
    }

    public function update(Request $request, $id)
    {
        $estoque = Estoque::findOrFail($id);

        $request->validate([
            "quantidade" => "sometimes|integer|min:0",
            "quantidadeVendida" => "sometimes|integer|min:0",
        ]);

        $estoque->update($request->all());
        $estoque->load("produto");

        return response()->json($estoque);
    }

    public function destroy($id)
    {
        $estoque = Estoque::findOrFail($id);
        $estoque->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
