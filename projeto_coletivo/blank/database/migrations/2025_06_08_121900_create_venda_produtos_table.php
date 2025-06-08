<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
     public function up()
     {
         Schema::create('venda_produtos', function (Blueprint $table) {
             $table->id();
             $table->foreignId('idVenda')->constrained('vendas')->onDelete('cascade');
             $table->foreignId('idProduto')->constrained('produtos')->onDelete('cascade');
             $table->integer('quantidade');
             $table->decimal('precoUnitario', 10, 2);
             $table->timestamps();
             $table->softDeletes();
         });
     }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('venda_produtos');
    }
};
