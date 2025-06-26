<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EjemploController extends Controller
{
    /**
     * Display a listing of the resource.
     * This endpoint returns a greeting message from the backend.
     * GET /api/ejemplo
     */
    public function index()
    {
        return response()->json([
            'message' => 'Hello from the backend!',
            'status' => 'success'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * This endpoint receives data from the frontend and returns it back.
     * POST /api/ejemplo
     */
    public function store(Request $request)
    {
        return response()->json([
            'message' => 'Data from the backend',
            'data' => $request->all(),
            'status' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
