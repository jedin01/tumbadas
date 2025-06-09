<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Venda;
use Illuminate\Http\Request;

class VendaController extends Controller
{
    public function index()
    {
        // Listar todas as vendas com funcionário, cliente e itens
        $vendas = Venda::with([
            "funcionario",
            "cliente",
            "itens.produto",
        ])->get();
        return response()->json($vendas);
    }

    public function store(Request $request)
    {
        // Validar os dados da venda
        $request->validate([
            "idFuncionario" => "required|exists:funcionarios,id",
            "idCliente" => "required|exists:clientes,id",
            "investimento" => "required|numeric|min:0",
            "valorTotal" => "required|numeric|min:0",
            "troco" => "required|numeric|min:0",
            "data" => "required|date",
        ]);

        $venda = Venda::create($request->all());
        $venda->load(["funcionario", "cliente", "itens.produto"]);

        return response()->json($venda, 201);
    }

    public function show($id)
    {
        $venda = Venda::with([
            "funcionario",
            "cliente",
            "itens.produto",
        ])->findOrFail($id);
        return response()->json($venda);
    }

    public function update(Request $request, $id)
    {
        $venda = Venda::findOrFail($id);

        $request->validate([
            "idFuncionario" => "sometimes|exists:funcionarios,id",
            "idCliente" => "sometimes|exists:clientes,id",
            "investimento" => "sometimes|numeric|min:0",
            "valorTotal" => "sometimes|numeric|min:0",
            "troco" => "sometimes|numeric|min:0",
            "data" => "sometimes|date",
        ]);

        $venda->update($request->all());
        $venda->load(["funcionario", "cliente", "itens.produto"]);

        return response()->json($venda);
    }

    public function destroy($id)
    {
        $venda = Venda::findOrFail($id);
        $venda->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
