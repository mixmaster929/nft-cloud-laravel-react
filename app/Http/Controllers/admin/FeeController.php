<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FeeRequest;
use App\Http\Resources\FeeResource;
use App\Models\Fee;
use Illuminate\Http\Request;

class FeeController extends Controller
{
    public function index()
    {
        $fees = FeeResource::collection(Fee::latest()->paginate(10));
        return inertia('admin/Fee/Index', [
            'fees' => $fees,
        ]);
    }
    public function store(FeeRequest $request)
    {
        $attr = $request->toArray();

        Fee::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Fee has been created',
        ]);
    }

    public function update(FeeRequest $request, Fee $fee)
    {
        $attr = $request->toArray();

        $fee->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'Fee has been updated',
        ]);
    }

    public function destroy(Fee $fee)
    {
        $fee->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Fee has been deleted',
        ]);
    }
}
