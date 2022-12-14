package com.todo.RESTAPI.controller;

import com.todo.RESTAPI.model.Todo;
import com.todo.RESTAPI.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
@CrossOrigin

public class TodoController {
    @Autowired
    private TodoService todoService;

    @PostMapping("/add")
    public  String add(@RequestBody Todo todo){
        todoService.saveTodo(todo);
        return "new task added";
    }
    @GetMapping("/getAll")
    public List<Todo> getAllTodos(){
        return todoService.getAllTodos();
    }


}
