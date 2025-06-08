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
         Schema::create('produtos', function (Blueprint $table) {
             $table->id();
             $table->string('nome');
             $table->text('descricao')->nullable();
             $table->foreignId('idCategoria')->constrained('categorias')->onDelete('cascade');
             $table->decimal('preco', 10, 2);
             $table->timestamps();
             $table->softDeletes();
         });
     }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
