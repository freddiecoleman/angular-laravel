<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	dd('test');
});

Route::get('api/chat.json', function()
{
  return json_encode(Chat::all());
});

Route::post('api/chat.json', function()
{
  $chat = new Chat;
  $chat->username = Input::get('username');
  $chat->text = Input::get('message');
  $chat->save();

  return json_encode(Chat::all());
});
