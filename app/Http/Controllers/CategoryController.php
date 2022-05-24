<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryResource::collection(Category::latest()->paginate(10));
        return inertia('Category/Index', [
            'categories' => $categories,
        ]);
    }
}
