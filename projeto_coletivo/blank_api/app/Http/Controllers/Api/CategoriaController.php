<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        return response()->json(Categoria::all());
    }
    public function store(Request $request)
    {
        return response()->json(Categoria::create($request->all()));
    }
    public function show($id)
    {
        return response()->json(Categoria::findOrFail($id));
    }
    public function update(Request $request, $id)
    {
        $registro = Categoria::findOrFail($id);
        $registro->update($request->all());
        return response()->json($registro);
    }
    public function destroy($id)
    {
        $registro = Categoria::findOrFail($id);
        $registro->delete();
        return response()->json(["message" => "Removido com sucesso"]);
    }
}
