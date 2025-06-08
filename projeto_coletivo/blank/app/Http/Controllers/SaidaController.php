<?php
namespace App\Http\Controllers;

use App\Models\Saida;
use App\Models\Cliente;
use App\Models\Produto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaidaController extends Controller
{
    public function index()
    {
        return Inertia::render('Saida/Index', [
            'saidas' => Saida::with(['cliente', 'produto'])->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Saida/Create', [
            'clientes' => Cliente::all(),
            'produtos' => Produto::all(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idCliente' => 'required|exists:clientes,id',
            'idProduto' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:1',
            'dataSaida' => 'required|date',
        ]);

        Saida::create($data);
        return redirect()->route('saidas.index')->with('success', 'Saída criada.');
    }

    public function show(Saida $saida)
    {
        $saida->load(['cliente', 'produto']);
        return Inertia::render('Saida/Show', ['saida' => $saida]);
    }

    public function edit(Saida $saida)
    {
        return Inertia::render('Saida/Edit', [
            'saida' => $saida,
            'clientes' => Cliente::all(),
            'produtos' => Produto::all(),
        ]);
    }

    public function update(Request $request, Saida $saida)
    {
        $data = $request->validate([
            'idCliente' => 'required|exists:clientes,id',
            'idProduto' => 'required|exists:produtos,id',
            'quantidade' => 'required|integer|min:1',
            'dataSaida' => 'required|date',
        ]);

        $saida->update($data);
        return redirect()->route('saidas.index')->with('success', 'Saída atualizada.');
    }

    public function destroy(Saida $saida)
    {
        $saida->delete();
        return redirect()->route('saidas.index')->with('success', 'Saída excluída.');
    }

    public function trashed()
    {
        return Inertia::render('Saida/Trashed', ['saidas' => Saida::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Saida::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('saidas.trashed')->with('success', 'Saída restaurada.');
    }

    public function forceDelete($id)
    {
        Saida::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('saidas.trashed')->with('success', 'Saída excluída definitivamente.');
    }
}
