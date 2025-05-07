<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function admin(): Response
    {
        $users = User::all(); // Fetch all users

        return Inertia::render('Admin/Users', [
            'users' => $users,
        ]);
    }

    public function superadmin(): Response
    {
        $posts = Post::all(); // Fetch all posts

        return Inertia::render('SuperAdmin/System', [
            'posts' => $posts, // Pass posts to the frontend
        ]);
    }
}
