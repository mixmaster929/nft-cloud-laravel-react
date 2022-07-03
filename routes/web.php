<?php

use App\Http\Controllers\admin\Auth\GoogleController;
use App\Http\Controllers\admin\Auth\LoginController;
use App\Http\Controllers\admin\Auth\RegisterController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProfileController;
use App\Http\Controllers\admin\UserController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\FeeController;
use App\Http\Controllers\admin\CustomerController;

use App\Http\Controllers\frontend\HomeController;
use App\Http\Controllers\frontend\UserProfileController;
use App\Http\Controllers\frontend\ActivityController;

use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
// Route::get('/myitems', [UserProfileController::class, 'index'])->name('myitems');
// Route::get('/explorer', [HomeController::class, 'explorer'])->name('explorer');
// Route::get('/activities', [ActivityController::class, 'index'])->name('activities');
// Route::view('/{path?}', 'master')
//     ->where('path', '.*');


Route::group(['prefix' => 'admin'], function () {
    Route::middleware('auth')->group(function () {
        Route::get('/', function(){
            return redirect('admin/dashboard');
        });
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
        Route::get('users', [CustomerController::class, 'index'])->name('users.index');
        Route::get('users/reports', [CustomerController::class, 'reports'])->name('users.reports');
        Route::apiResource('categories', CategoryController::class);
        Route::apiResource('fees', FeeController::class);
        Route::get('transactions', [UserController::class, 'reports'])->name('transactions');
        Route::get('featured_collections', [UserController::class, 'reports'])->name('featured_collections');
        Route::get('profile', [ProfileController::class, 'index'])->name('profile');
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