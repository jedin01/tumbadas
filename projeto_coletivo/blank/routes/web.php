<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Categorias
Route::group(['prefix' => 'categorias', 'as' => 'categorias.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\CategoriaController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\CategoriaController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\CategoriaController@store']);
    Route::get('/{categoria}', ['as' => 'show', 'uses' => 'App\Http\Controllers\CategoriaController@show']);
    Route::get('/{categoria}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\CategoriaController@edit']);
    Route::put('/{categoria}', ['as' => 'update', 'uses' => 'App\Http\Controllers\CategoriaController@update']);
    Route::delete('/{categoria}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\CategoriaController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\CategoriaController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\CategoriaController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\CategoriaController@forceDelete']);
});

// Produtos
Route::group(['prefix' => 'produtos', 'as' => 'produtos.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\ProdutoController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\ProdutoController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\ProdutoController@store']);
    Route::get('/{produto}', ['as' => 'show', 'uses' => 'App\Http\Controllers\ProdutoController@show']);
    Route::get('/{produto}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\ProdutoController@edit']);
    Route::put('/{produto}', ['as' => 'update', 'uses' => 'App\Http\Controllers\ProdutoController@update']);
    Route::delete('/{produto}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\ProdutoController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\ProdutoController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\ProdutoController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\ProdutoController@forceDelete']);
});

// Fornecedores
Route::group(['prefix' => 'fornecedores', 'as' => 'fornecedores.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\FornecedorController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\FornecedorController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\FornecedorController@store']);
    Route::get('/{fornecedor}', ['as' => 'show', 'uses' => 'App\Http\Controllers\FornecedorController@show']);
    Route::get('/{fornecedor}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\FornecedorController@edit']);
    Route::put('/{fornecedor}', ['as' => 'update', 'uses' => 'App\Http\Controllers\FornecedorController@update']);
    Route::delete('/{fornecedor}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\FornecedorController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\FornecedorController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\FornecedorController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\FornecedorController@forceDelete']);
});

// Clientes
Route::group(['prefix' => 'clientes', 'as' => 'clientes.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\ClienteController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\ClienteController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\ClienteController@store']);
    Route::get('/{cliente}', ['as' => 'show', 'uses' => 'App\Http\Controllers\ClienteController@show']);
    Route::get('/{cliente}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\ClienteController@edit']);
    Route::put('/{cliente}', ['as' => 'update', 'uses' => 'App\Http\Controllers\ClienteController@update']);
    Route::delete('/{cliente}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\ClienteController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\ClienteController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\ClienteController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\ClienteController@forceDelete']);
});

// Funcionários
Route::group(['prefix' => 'funcionarios', 'as' => 'funcionarios.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\FuncionarioController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\FuncionarioController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\FuncionarioController@store']);
    Route::get('/{funcionario}', ['as' => 'show', 'uses' => 'App\Http\Controllers\FuncionarioController@show']);
    Route::get('/{funcionario}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\FuncionarioController@edit']);
    Route::put('/{funcionario}', ['as' => 'update', 'uses' => 'App\Http\Controllers\FuncionarioController@update']);
    Route::delete('/{funcionario}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\FuncionarioController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\FuncionarioController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\FuncionarioController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\FuncionarioController@forceDelete']);
});

// Usuários
Route::group(['prefix' => 'usuarios', 'as' => 'usuarios.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\UsuarioController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\UsuarioController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\UsuarioController@store']);
    Route::get('/{usuario}', ['as' => 'show', 'uses' => 'App\Http\Controllers\UsuarioController@show']);
    Route::get('/{usuario}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\UsuarioController@edit']);
    Route::put('/{usuario}', ['as' => 'update', 'uses' => 'App\Http\Controllers\UsuarioController@update']);
    Route::delete('/{usuario}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\UsuarioController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\UsuarioController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\UsuarioController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\UsuarioController@forceDelete']);
});

// Vendas
Route::group(['prefix' => 'vendas', 'as' => 'vendas.'], function () {
    Route::get('/', ['as' => 'index', 'uses' => 'App\Http\Controllers\VendaController@index']);
    Route::get('/create', ['as' => 'create', 'uses' => 'App\Http\Controllers\VendaController@create']);
    Route::post('/', ['as' => 'store', 'uses' => 'App\Http\Controllers\VendaController@store']);
    Route::get('/{venda}', ['as' => 'show', 'uses' => 'App\Http\Controllers\VendaController@show']);
    Route::get('/{venda}/edit', ['as' => 'edit', 'uses' => 'App\Http\Controllers\VendaController@edit']);
    Route::put('/{venda}', ['as' => 'update', 'uses' => 'App\Http\Controllers\VendaController@update']);
    Route::delete('/{venda}', ['as' => 'destroy', 'uses' => 'App\Http\Controllers\VendaController@destroy']);

    Route::get('/trashed', ['as' => 'trashed', 'uses' => 'App\Http\Controllers\VendaController@trashed']);
    Route::put('/restore/{id}', ['as' => 'restore', 'uses' => 'App\Http\Controllers\VendaController@restore']);
    Route::delete('/force-delete/{id}', ['as' => 'forceDelete', 'uses' => 'App\Http\Controllers\VendaController@forceDelete']);
});




require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
