<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Funcionario;
use Illuminate\Http\Request;

class FuncionarioController extends Controller
{
    public function index()
    {
        return response()->json(Funcionario::all());
    }
    public function store(Request $request)
    {
        return response()->json(Funcionario::create($request->all()));
    }
    public function show($id)
    {
        return response()->json(Funcionario::findOrFail($id));
    }
    public function update(Request $request, $id)
    {
        $registro = Funcionario::findOrFail($id);
        $registro->update($request->all());
        return response()->json($registro);
    }
    public function destroy($id)
    {
        $registro = Funcionario::findOrFail($id);
        $registro->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
