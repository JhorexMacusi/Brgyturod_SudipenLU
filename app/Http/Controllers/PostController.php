<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('SuperAdmin/System', [
            'posts' => $posts,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'type' => 'required|in:announcement,event,meeting',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate image
        ]);

        if ($request->hasFile('image')) {
            // Store the image and get its path
            $validated['image'] = $request->file('image')->store('images', 'public');
        }

        // Save the post with the validated data
        Post::create($validated);

        return redirect()->route('superadmin')->with('success', 'Post created successfully.');
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'type' => 'required|in:announcement,event,meeting', // Validate type
        ]);

        $post->update($validated);

        return redirect()->route('superadmin')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('superadmin')->with('success', 'Post deleted successfully.');
    }
}
