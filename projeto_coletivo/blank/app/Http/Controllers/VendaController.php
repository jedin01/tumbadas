<?php

namespace App\Http\Controllers;

use App\Models\Venda;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VendaController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function create()
    {
        return Inertia::render('Venda/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'data_venda' => 'required|date',
            'valor_total' => 'required|numeric',
        ]);

        Venda::create($data);

        return redirect()->route('vendas.index')->with('success', 'Venda criada com sucesso.');
    }

    public function show(Venda $venda)
    {
        return Inertia::render('Venda/Show', [
            'venda' => $venda
        ]);
    }

    public function edit(Venda $venda)
    {
        return Inertia::render('Venda/Edit', [
            'venda' => $venda
        ]);
    }

    public function update(Request $request, Venda $venda)
    {
        $data = $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'data_venda' => 'required|date',
            'valor_total' => 'required|numeric',
        ]);

        $venda->update($data);

        return redirect()->route('vendas.index')->with('success', 'Venda atualizada com sucesso.');
    }

    public function destroy(Venda $venda)
    {
        $venda->delete();

        return redirect()->route('vendas.index')->with('success', 'Venda excluída com sucesso.');
    }

    public function trashed()
    {
        return Inertia::render('Venda/Trashed', [
            'vendas' => Venda::onlyTrashed()->get()
        ]);
    }

    public function restore($id)
    {
        Venda::onlyTrashed()->findOrFail($id)->restore();

        return redirect()->route('vendas.trashed')->with('success', 'Venda restaurada com sucesso.');
    }

    public function forceDelete($id)
    {
        Venda::onlyTrashed()->findOrFail($id)->forceDelete();

        return redirect()->route('vendas.trashed')->with('success', 'Venda excluída permanentemente.');
    }
}
