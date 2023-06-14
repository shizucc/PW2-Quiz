<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'tasks' => Task::all(),
            'stasuses' => Task::distinct()->get(['status'])
        ];
        return Inertia::render('Task/TaskList',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [
            'statuses' => Task::distinct()->get(['status'])
        ];
        return Inertia::render('Task/TaskForm', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:50',
            'deskripsi' => 'required',
            'status' => 'required'
        ]);

        $task = Task::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => $request->status
        ]
        );
        return redirect(route('tasks.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = [
            'task'=> Task::find($id)
        ];
        return Inertia::render('Task/TaskDetail', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data = [
            'task'=> Task::find($id)->get(),
            'statuses' => Task::distinct()->get(['status'])
        ];
        return Inertia::render('Task/TaskForm',$data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $task = Task::find($id);
        $request->validate([
            'judul' => 'required|string|max:50',
            'deskripsi' => 'required',
            'status' => 'required'
        ]);
        $task->judul = $request->judul;
        $task->deskripsi = $request->deskripsi;
        $task->status = $request->status;
        $task->save();
        return redirect(route('tasks.show',$id));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $task = Task::find($id);
        $task->delete();
        return redirect(route('tasks.index'));
    }

    public function completed(){
        $data = [
            'tasks' => Task::where('status', '=','selesai'),
            'statuses' => Task::distinct()->get(['status'])
        ];
        return Inertia::render('Task/TaskList', $data);
    }

    public function incomplete(){
        $data = [
            'tasks' => Task::where('status', '=','belum selesai'),
            'statuses' => Task::distinct()->get(['status'])
        ];
        return Inertia::render('Task/TaskList', $data);
    }

    public function updateStatus(string $id, string $status){
        $task = Task::find($id);
        $task->status = $status;
        $task->save();
        return redirect(route('tasks.show', $id));
    }
}
