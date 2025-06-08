<?php
namespace App\Http\Controllers;

use App\Models\Produto;
use App\Models\Categoria;
use App\Models\Fornecedor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdutoController extends Controller
{
    public function index()
    {
        return Inertia::render('Produto/Index', [
            'produtos' => Produto::with(['categoria', 'fornecedor'])->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Produto/Create', [
            'categorias' => Categoria::all(),
            'fornecedores' => Fornecedor::all(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nome' => 'required|string',
            'descricao' => 'nullable|string',
            'precoVenda' => 'required|numeric|min:0',
            'idCategoria' => 'required|exists:categorias,id',
            'idFornecedor' => 'required|exists:fornecedores,id',
        ]);

        Produto::create($data);
        return redirect()->route('produtos.index')->with('success', 'Produto criado.');
    }

    public function show(Produto $produto)
    {
        $produto->load(['categoria', 'fornecedor']);
        return Inertia::render('Produto/Show', ['produto' => $produto]);
    }

    public function edit(Produto $produto)
    {
        return Inertia::render('Produto/Edit', [
            'produto' => $produto,
            'categorias' => Categoria::all(),
            'fornecedores' => Fornecedor::all(),
        ]);
    }

    public function update(Request $request, Produto $produto)
    {
        $data = $request->validate([
            'nome' => 'required|string',
            'descricao' => 'nullable|string',
            'precoVenda' => 'required|numeric|min:0',
            'idCategoria' => 'required|exists:categorias,id',
            'idFornecedor' => 'required|exists:fornecedores,id',
        ]);

        $produto->update($data);
        return redirect()->route('produtos.index')->with('success', 'Produto atualizado.');
    }

    public function destroy(Produto $produto)
    {
        $produto->delete();
        return redirect()->route('produtos.index')->with('success', 'Produto excluído.');
    }

    public function trashed()
    {
        return Inertia::render('Produto/Trashed', ['produtos' => Produto::onlyTrashed()->get()]);
    }

    public function restore($id)
    {
        Produto::onlyTrashed()->findOrFail($id)->restore();
        return redirect()->route('produtos.trashed')->with('success', 'Produto restaurado.');
    }

    public function forceDelete($id)
    {
        Produto::onlyTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('produtos.trashed')->with('success', 'Produto excluído definitivamente.');
    }
}
