<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
// Route::view('/', 'master');


Route::group(['prefix' => 'admin'], function () {
    Route::middleware('auth')->group(function () {
        Route::get('/', function(){
            return redirect('admin/dashboard');
        });
        Route::get('dashboard', DashboardController::class)->name('dashboard');
        Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
        Route::get('users', [UserController::class, 'index'])->name('users.index');
        Route::get('users/reports', [UserController::class, 'reports'])->name('users.reports');
        Route::get('categories', [UserController::class, 'reports'])->name('categories');
        Route::get('fees', [UserController::class, 'reports'])->name('fees');
        Route::get('transactions', [UserController::class, 'reports'])->name('transactions');
        Route::get('featured_collections', [UserController::class, 'reports'])->name('featured_collections');
        Route::get('profile', ProfileController::class)->name('profile');
    });
    Route::middleware('guest')->group(function () {
        Route::get('login', [LoginController::class, 'create'])->name('login');
        Route::post('login', [LoginController::class, 'store']);
        Route::get('register', [RegisterController::class, 'create'])->name('register');
        Route::post('register', [RegisterController::class, 'store']);
        Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
        Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
    });
});
