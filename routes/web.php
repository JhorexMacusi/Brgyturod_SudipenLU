<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TestController;
use App\Http\Middleware\RoleMiddleware;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\BulletinBoardController;
use App\Models\Resident;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route to the Bulletin Board page where posts will be displayed
Route::get('/bulletin-board', [BulletinBoardController::class, 'index'])->name('bulletinboard');

// Route to Barangay Officials page
Route::get('/officials', function () {
    return Inertia::render('Officials'); // Render the Officials page
})->name('officials');

// Protected Routes for authenticated users
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $residents = Resident::all(); // Fetch all residents
        return Inertia::render('Dashboard', [
            'residents' => $residents,
        ]);
    })->name('dashboard');
});

// Admin Routes
Route::middleware(['auth', 'verified', 'role:admin,superadmin'])->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users.index'); // List users
    Route::put('/admin/users/{user}', [UserController::class, 'update'])->name('admin.users.update'); // Update user
    Route::delete('/admin/users/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy'); // Delete user
});

// Superadmin Routes
Route::middleware(['auth', 'verified', 'role:superadmin'])->group(function () {
    Route::get('/superadmin/system', [PostController::class, 'index'])->name('superadmin');
    Route::post('/superadmin/system', [PostController::class, 'store']);
    Route::put('/superadmin/system/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/superadmin/system/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
});


// Additional routes for settings and authentication
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
