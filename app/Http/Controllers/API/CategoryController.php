<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\API\ApiController;
use Illuminate\Support\Facades\Log;

use App\Models\Category;

class CategoryController extends ApiController
{
    public function index(Request $request){
        $data = []; $categories = [];
        $data = Category::select('name')->orderBy('id')->get();
        if(count($data)>0){
            foreach($data as $value){
                $categories[] = $value->name;
            }
        }
        return $this->successResponse('all categories', $data);
    }
}
