<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\M3UController;
use App\Http\Controllers\FileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/profile/settings', function () {
    return Inertia::render('Profile/Settings', [
        'user' => auth()->user(),
    ]);
})->middleware(['auth'])->name('profile.settings');

Route::get('/profile/settings/m3u', function () {
    return Inertia::render('Profile/Settings/M3USettings', [
        'user' => auth()->user(),
    ]);
})->middleware(['auth'])->name('profile.settings.m3u');

Route::post('/profile/settings/m3u', [M3UController::class, 'store'])->middleware(['auth'])->name('profile.settings.m3u.store');

Route::get('/player', function () {
    return Inertia::render('Player/Player');
})->name('player');

Route::get('/watch/movie/{id}', [PlayerController::class, 'index'])->middleware(['auth'])->name('watch.movie');
Route::get('/watch/serie/{id}', [PlayerController::class, 'index'])->middleware(['auth'])->name('watch.serie');
Route::get('/watch/tvshow/{id}', [PlayerController::class, 'index'])->middleware(['auth'])->name('watch.tvshow');

Route::post('/media/download', [FileController::class, 'downloadAndStore'])->middleware(['auth'])->name('media.download');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
