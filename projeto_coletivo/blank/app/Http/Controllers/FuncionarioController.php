<?php
namespace App\Http\Controllers;

use App\Models\Funcionario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FuncionarioController extends Controller
{
    public function index()
    {
        return Inertia::render('Funcionario/Index', ['funcionarios' => Funcionario::all()]);
    }

    public function create()
    {
        return Inertia::render('Funcionario/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'pNome' => 'required|string',
            'uNome' => 'required|string',
            'email' => 'required|email|unique:funcionarios,email',
            'municipio' => 'required|string',
            'bairro' => 'required|string',
        ]);

        Funcionario::create($data);
        return redirect()->route('funcionarios.index')->with('success', 'Funcionário criado.');
    }

    public function show(Funcionario $funcionario)
    {
        return Inertia::render('Funcionario/Show', ['funcionario' => $funcionario]);
    }

    public function edit(Funcionario $funcionario)
    {
        return Inertia::render('Funcionario/Edit', ['funcionario' => $funcionario]);
    }

    public function update(Request $request, Funcionario $funcionario)
    {
        $data = $request->validate([
            'pNome' => 'required|string',
            'uNome' => 'required|string',
            'email' => 'required|email|unique:funcionarios,email,' . $funcionario->id,
            'municipio' => 'required|string',
            'bairro' => 'required|string',
        ]);

        $funcionario->update($data);
        return redirect()->route('funcionarios.index')->with('success', 'Funcionário atualizado.');
    }

    public function destroy(Funcionario $funcionario)
    {
        $funcionario->delete();
        return redirect()->route('funcionarios.index')->with('success', 'Funcionário excluído.');
    }

    public function trashed()
    {
        return Inertia::render('Funcionario/Trashed', [
            'funcionarios' => Funcionario::onlyTrashed()->get(),
        ]);
    }

    public function restore($id)
    {
        Funcionario::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('funcionarios.trashed')->with('success', 'Funcionário restaurado.');
    }

    public function forceDelete($id)
    {
        Funcionario::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('funcionarios.trashed')->with('success', 'Funcionário excluído definitivamente.');
    }
}
