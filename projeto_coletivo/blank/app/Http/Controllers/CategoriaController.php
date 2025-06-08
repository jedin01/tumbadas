<?php
namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function index()
    {
        return Inertia::render('Categoria/Index', ['categorias' => Categoria::all()]);
    }

    public function create()
    {
        return Inertia::render('Categoria/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nome' => 'required|string|unique:categorias,nome',
            'descricao' => 'nullable|string',
        ]);

        Categoria::create($data);
        return redirect()->route('categorias.index')->with('success', 'Categoria criada.');
    }

    public function show(Categoria $categoria)
    {
        return Inertia::render('Categoria/Show', ['categoria' => $categoria]);
    }

    public function edit(Categoria $categoria)
    {
        return Inertia::render('Categoria/Edit', ['categoria' => $categoria]);
    }

    public function update(Request $request, Categoria $categoria)
    {
        $data = $request->validate([
            'nome' => 'required|string|unique:categorias,nome,' . $categoria->id,
            'descricao' => 'nullable|string',
        ]);

        $categoria->update($data);
        return redirect()->route('categorias.index')->with('success', 'Categoria atualizada.');
    }

    public function destroy(Categoria $categoria)
    {
        $categoria->delete();
        return redirect()->route('categorias.index')->with('success', 'Categoria excluída.');
    }

    public function trashed()
    {
        return Inertia::render('Categoria/Trashed', ['categorias' => Categoria::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Categoria::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('categorias.trashed')->with('success', 'Categoria restaurada.');
    }

    public function forceDelete($id)
    {
        Categoria::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('categorias.trashed')->with('success', 'Categoria excluída definitivamente.');
    }
}
