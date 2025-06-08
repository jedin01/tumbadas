<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function index()
    {
        return response()->json(Cliente::all());
    }
    public function store(Request $request)
    {
        return response()->json(Cliente::create($request->all()));
    }
    public function show($id)
    {
        return response()->json(Cliente::findOrFail($id));
    }
    public function update(Request $request, $id)
    {
        $registro = Cliente::findOrFail($id);
        $registro->update($request->all());
        return response()->json($registro);
    }
    public function destroy($id)
    {
        $registro = Cliente::findOrFail($id);
        $registro->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
