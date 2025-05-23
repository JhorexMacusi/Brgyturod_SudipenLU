<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content', 'type', 'image'];

    // Define the allowed types
    public static $types = ['announcement', 'event', 'meeting'];
}
