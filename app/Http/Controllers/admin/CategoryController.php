<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryResource::collection(Category::latest()->paginate(10));
        return inertia('admin/Category/Index', [
            'categories' => $categories,
        ]);
    }
    public function store(CategoryRequest $request)
    {
        $attr = $request->toArray();

        Category::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Category has been created',
        ]);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $attr = $request->toArray();

        $category->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Category has been updated',
        ]);
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Category has been deleted',
        ]);
    }
}
