<?php
namespace App\Http\Controllers;

use App\Models\Fornecedor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FornecedorController extends Controller
{
    public function index()
    {
        return Inertia::render('Fornecedor/Index', ['fornecedores' => Fornecedor::all()]);
    }

    public function create()
    {
        return Inertia::render('Fornecedor/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nome' => 'required|string',
            'email' => 'required|email|unique:fornecedores,email',
            'telefone' => 'nullable|string|max:20',
            'endereco' => 'nullable|string',
        ]);

        Fornecedor::create($data);
        return redirect()->route('fornecedores.index')->with('success', 'Fornecedor criado.');
    }

    public function show(Fornecedor $fornecedor)
    {
        return Inertia::render('Fornecedores/Show', ['fornecedor' => $fornecedor]);
    }

    public function edit(Fornecedor $fornecedor)
    {
        return Inertia::render('Fornecedores/Edit', ['fornecedor' => $fornecedor]);
    }

    public function update(Request $request, Fornecedor $fornecedor)
    {
        $data = $request->validate([
            'nome' => 'required|string',
            'email' => 'required|email|unique:fornecedores,email,' . $fornecedor->id,
            'telefone' => 'nullable|string|max:20',
            'endereco' => 'nullable|string',
        ]);

        $fornecedor->update($data);
        return redirect()->route('fornecedores.index')->with('success', 'Fornecedor atualizado.');
    }

    public function destroy(Fornecedor $fornecedor)
    {
        $fornecedor->delete();
        return redirect()->route('fornecedores.index')->with('success', 'Fornecedor excluído.');
    }

    public function trashed()
    {
        return Inertia::render('Fornecedor/Trashed', ['fornecedores' => Fornecedor::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Fornecedor::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('fornecedores.trashed')->with('success', 'Fornecedor restaurado.');
    }

    public function forceDelete($id)
    {
        Fornecedor::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('fornecedores.trashed')->with('success', 'Fornecedor excluído definitivamente.');
    }
}
