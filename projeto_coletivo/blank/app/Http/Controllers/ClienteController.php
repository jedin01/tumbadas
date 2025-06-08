<?php
namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClienteController extends Controller
{
    public function index()
    {
        return Inertia::render('Cliente/Index', ['clientes' => Cliente::all()]);
    }

    public function create()
    {
        return Inertia::render('Cliente/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'pNome' => 'required|string',
            'uNome' => 'required|string',
            'municipio' => 'required|string',
            'bairro' => 'required|string',
        ]);

        Cliente::create($data);
        return redirect()->route('clientes.index')->with('success', 'Cliente criado.');
    }

    public function show(Cliente $cliente)
    {
        return Inertia::render('Cliente/Show', ['cliente' => $cliente]);
    }

    public function edit(Cliente $cliente)
    {
        return Inertia::render('Cliente/Edit', ['cliente' => $cliente]);
    }

    public function update(Request $request, Cliente $cliente)
    {
        $data = $request->validate([
            'pNome' => 'required|string',
            'uNome' => 'required|string',
            'municipio' => 'required|string',
            'bairro' => 'required|string',
        ]);

        $cliente->update($data);
        return redirect()->route('clientes.index')->with('success', 'Cliente atualizado.');
    }

    public function destroy(Cliente $cliente)
    {
        $cliente->delete();
        return redirect()->route('clientes.index')->with('success', 'Cliente excluído.');
    }

    public function trashed()
    {
        return Inertia::render('Cliente/Trashed', ['clientes' => Cliente::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Cliente::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('clientes.trashed')->with('success', 'Cliente restaurado.');
    }

    public function forceDelete($id)
    {
        Cliente::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('clientes.trashed')->with('success', 'Cliente excluído definitivamente.');
    }
}
