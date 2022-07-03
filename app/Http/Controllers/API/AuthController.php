<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\ApiController;
use App\Models\AppUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


class AuthController extends ApiController
{
    public function login(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $email = $request->email;
        $app_user = AppUser::where('email', $email)->first();

        if($validated){
            if (Hash::check($request->password, $app_user->password)) {
                return $this->successResponse('User successfully logged in.', $app_user);
            }
            else{
                return $this->successResponse('Not found', 401);
            }
        } else {
            return $this->errorResponse('Unauthorized.', ['error' => 'Unauthorized'], 403);
        }
    }

    public function register(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'username' => ['required', 'unique:app_users'],
            'email' => ['required', 'unique:app_users'],
            'password' => ['required'],
        ]);
        
        if ($validated->fails()) {
            $username = $request->username;
            $email = $request->email;
            $username = AppUser::where('username', $request->username)->first();
            Log::info("422=>".$username);
            if(count($username)>0)
                return $this->successResponse('Already!', 'username');
            $email = AppUser::where('email', $request->email)->first();
            Log::info("422=>".$email);
            if(count($email)>0)
                return $this->successResponse('Already!', 'email');
            
            // return $this->errorResponse('Validation error.', $validated->errors(), 400);
        }
        {
            $newUser = AppUser::create([
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);

            $remember_token = $newUser->createToken($request->email . $request->password)->plainTextToken;
            $newUser->update(["remember_token" => $remember_token]);

            return $this->successResponse('Created!', $newUser);
        } 
    }
}
