package com.todo.RESTAPI.service;


import com.todo.RESTAPI.model.Todo;

import java.util.List;

public interface TodoService {
    public Todo saveTodo(Todo todo);
    public List<Todo> getAllTodos();

}
