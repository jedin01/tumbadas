<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FornecedorController extends Controller
{
    public function index()
    {
        return response()->json(Fornecedor::all());
    }
    public function store(Request $request)
    {
        return response()->json(Fornecedor::create($request->all()));
    }
    public function show($id)
    {
        return response()->json(Fornecedor::findOrFail($id));
    }
    public function update(Request $request, $id)
    {
        $registro = Fornecedor::findOrFail($id);
        $registro->update($request->all());
        return response()->json($registro);
    }
    public function destroy($id)
    {
        $registro = Fornecedor::findOrFail($id);
        $registro->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
