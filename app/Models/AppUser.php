<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// sanctum
use Laravel\Sanctum\HasApiTokens;

class AppUser extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'address',
        'social',
        'followers',
        'avatar',
        'banner',
        'is_verified',
        'username',
        'bio',
        'personal_url',
        'is_active',
        'is_approved',
        'password',
        'remember_token'
    ];
}
