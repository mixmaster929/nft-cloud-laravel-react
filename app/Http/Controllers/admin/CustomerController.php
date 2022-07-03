<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
// use App\Http\Requests\UserRequest;
use App\Http\Resources\CustomerResource;
use App\Models\AppUser;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        $users = CustomerResource::collection(AppUser::latest()->paginate(10));
        return inertia('admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function reports()
    {
        $users = CustomerResource::collection(AppUser::latest()->paginate(10));
        return inertia('admin/Users/Index', [
            'users' => $users,
        ]);
    }
}
