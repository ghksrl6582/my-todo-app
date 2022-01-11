package com.example.mytodoapp.persistence;

import com.example.mytodoapp.model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoEntity, String> {
}
