<?php
namespace App\Http\Controllers;

use App\Models\Estoque;
use App\Models\Produto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EstoqueController extends Controller
{
    public function index()
    {
        return Inertia::render('Estoque/Index', [
            'estoques' => Estoque::with('produto')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Estoque/Create', [
            'produtos' => Produto::all()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idProduto' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:0',
        ]);

        Estoque::create($data);
        return redirect()->route('estoques.index')->with('success', 'Estoque criado.');
    }

    public function show(Estoque $estoque)
    {
        return Inertia::render('Estoque/Show', ['estoque' => $estoque]);
    }

    public function edit(Estoque $estoque)
    {
        return Inertia::render('Estoque/Edit', [
            'estoque' => $estoque,
            'produtos' => Produto::all(),
        ]);
    }

    public function update(Request $request, Estoque $estoque)
    {
        $data = $request->validate([
            'idProduto' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:0',
        ]);

        $estoque->update($data);
        return redirect()->route('estoques.index')->with('success', 'Estoque atualizado.');
    }

    public function destroy(Estoque $estoque)
    {
        $estoque->delete();
        return redirect()->route('estoques.index')->with('success', 'Estoque excluído.');
    }

    public function trashed()
    {
        return Inertia::render('Estoque/Trashed', ['estoques' => Estoque::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Estoque::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('estoques.trashed')->with('success', 'Estoque restaurado.');
    }

    public function forceDelete($id)
    {
        Estoque::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('estoques.trashed')->with('success', 'Estoque excluído definitivamente.');
    }
}
