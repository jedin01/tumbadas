<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Saida;
use Illuminate\Http\Request;

class SaidaController extends Controller
{
    public function index()
    {
        // Lista todas as saídas com o produto associado
        $saidas = Saida::with("produto")->get();
        return response()->json($saidas);
    }

    public function store(Request $request)
    {
        // Validação dos dados
        $request->validate([
            "idProduto" => "required|exists:produtos,id",
            "quantidade" => "required|integer|min:1",
            "data" => "required|date",
        ]);

        $saida = Saida::create($request->all());
        $saida->load("produto");

        return response()->json($saida, 201);
    }

    public function show($id)
    {
        $saida = Saida::with("produto")->findOrFail($id);
        return response()->json($saida);
    }

    public function update(Request $request, $id)
    {
        $saida = Saida::findOrFail($id);

        // Validação para atualização parcial
        $request->validate([
            "idProduto" => "sometimes|exists:produtos,id",
            "quantidade" => "sometimes|integer|min:1",
            "data" => "sometimes|date",
        ]);

        $saida->update($request->all());
        $saida->load("produto");

        return response()->json($saida);
    }

    public function destroy($id)
    {
        $saida = Saida::findOrFail($id);
        $saida->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
