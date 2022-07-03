<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\AppUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\API\ApiController;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class CustomerController extends ApiController
{
    public function index(Request $request){
        $data = AppUser::get();
        return $this->successResponse('all customers', $data);
    }

    public function show(Request $request, $id){
        if(isset($id) && $id != 'undefined'){
            $data = AppUser::find($id);    
        } 
        else {
            $data = AppUser::get();
        }
        // return response()->json($data);
        return $this->successResponse('customer show', $data);
    }
    
    public function update(Request $request, $id){
        $data = AppUser::find($id);
        
        $result = $data->update($request->data);
        return $this->successResponse('customer update', $result);
    }

    public function upload(Request $request){
        Log::info("upload=>".$request);
        $validator = Validator::make($request->all(), [
            'file' => 'required|mimes:jpeg,png,jpg,gif,svg|max:5000',
        ]);

        $data = $request->all();
        $refId = $data['refId']; //user id
        $field = $data['field']; //banner or avatar

        try{
            $file = $request->file('file') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/uploads/profiles' ;
            $file->move($destinationPath,$fileName);

            if($refId>0){
                $customer = AppUser::find($refId);
                if($field === 'banner'){
                    $customer->update(['banner' => $fileName]);
                }
                elseif($field === 'avatar'){
                    $customer->update(['avatar' => $fileName]);
                }
            }
            
            return $this->successResponse('upload success', ['success' => true, 'url' => $url]);
        }catch(\Exception $e){
            return $this->errorResponse('upload error', ['success' => false]);
        }
    }
}
