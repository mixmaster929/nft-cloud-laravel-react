<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('username', 25)->unique()->nullable();
            $table->string('address')->unique()->nullable();
            $table->string('social')->unique()->nullable();
            $table->string('followers')->nullable();
            $table->string('avatar')->nullable();
            $table->string('banner')->nullable();
            $table->boolean('is_verified')->nullable();
            $table->text('bio')->nullable();
            $table->string('personal_url')->nullable();
            $table->boolean('is_active')->nullable();
            $table->boolean('is_approved')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_users');
    }
};
