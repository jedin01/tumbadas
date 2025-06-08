<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/user", function (Request $request) {
    return $request->user();
})->middleware("auth:sanctum");

$entidades = [
    "funcionarios" => "FuncionarioController",
    "telefone-funcionarios" => "TelefoneFuncionarioController",
    "clientes" => "ClienteController",
    "telefone-clientes" => "TelefoneClienteController",
    "fornecedores" => "FornecedorController",
    "telefone-fornecedores" => "TelefoneFornecedorController",
    "categorias" => "CategoriaController",
    "produtos" => "ProdutoController",
    "estoques" => "EstoqueController",
    "entradas" => "EntradaController",
    "saidas" => "SaidaController",
    "vendas" => "VendaController",
    "venda-produtos" => "VendaProdutoController",
];

foreach ($entidades as $prefixo => $controller) {
    Route::prefix("$prefixo")->group(function () use ($controller, $prefixo) {
        Route::get("/", [
            "uses" => "App\\Http\\Controllers\\Api\\$controller@index",
            "as" => "api.$prefixo.index",
        ]);
        Route::post("/", [
            "uses" => "App\\Http\\Controllers\\Api\\$controller@store",
            "as" => "api.$prefixo.store",
        ]);
        Route::get("/{id}", [
            "uses" => "App\\Http\\Controllers\\Api\\$controller@show",
            "as" => "api.$prefixo.show",
        ]);
        Route::put("/{id}", [
            "uses" => "App\\Http\\Controllers\\Api\\$controller@update",
            "as" => "api.$prefixo.update",
        ]);
        Route::delete("/{id}", [
            "uses" => "App\\Http\\Controllers\\Api\\$controller@destroy",
            "as" => "api.$prefixo.destroy",
        ]);
    });
}
