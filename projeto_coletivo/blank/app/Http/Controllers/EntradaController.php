<?php
namespace App\Http\Controllers;

use App\Models\Entrada;
use App\Models\Fornecedor;
use App\Models\Produto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EntradaController extends Controller
{
    public function index()
    {
        return Inertia::render('Entrada/Index', [
            'entradas' => Entrada::with(['fornecedor', 'produto'])->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Entrada/Create', [
            'fornecedores' => Fornecedor::all(),
            'produtos' => Produto::all(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idFornecedor' => 'required|exists:fornecedores,id',
            'idProduto' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:1',
            'dataEntrada' => 'required|date',
        ]);

        Entrada::create($data);
        return redirect()->route('entradas.index')->with('success', 'Entrada criada.');
    }

    public function show(Entrada $entrada)
    {
        $entrada->load(['fornecedor', 'produto']);
        return Inertia::render('Entrada/Show', ['entrada' => $entrada]);
    }

    public function edit(Entrada $entrada)
    {
        return Inertia::render('Entrada/Edit', [
            'entrada' => $entrada,
            'fornecedores' => Fornecedor::all(),
            'produtos' => Produto::all(),
        ]);
    }

    public function update(Request $request, Entrada $entrada)
    {
        $data = $request->validate([
            'idFornecedor' => 'required|exists:fornecedores,id',
            'idProduto' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:1',
            'dataEntrada' => 'required|date',
        ]);

        $entrada->update($data);
        return redirect()->route('entradas.index')->with('success', 'Entrada atualizada.');
    }

    public function destroy(Entrada $entrada)
    {
        $entrada->delete();
        return redirect()->route('entradas.index')->with('success', 'Entrada excluída.');
    }

    public function trashed()
    {
        return Inertia::render('Entrada/Trashed', ['entradas' => Entrada::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Entrada::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('entradas.trashed')->with('success', 'Entrada restaurada.');
    }

    public function forceDelete($id)
    {
        Entrada::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('entradas.trashed')->with('success', 'Entrada excluída definitivamente.');
    }
}
