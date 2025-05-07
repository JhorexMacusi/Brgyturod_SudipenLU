<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

class BulletinBoardController extends Controller
{
    public function index()
    {
        $posts = Post::all(); // Fetch all posts
        return Inertia::render('BulletinBoard', [
            'posts' => $posts,
        ]);
    }
}
