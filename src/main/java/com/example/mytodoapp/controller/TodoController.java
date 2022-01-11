package com.example.mytodoapp.controller;

import com.example.mytodoapp.dto.ResponseDTO;
import com.example.mytodoapp.dto.TodoDTO;
import com.example.mytodoapp.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService;

    @PostMapping
    public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto) {

        try {
            String userId = "temp-user";

            var entity = TodoDTO.toEntity(dto);
            entity.setId(null);
            entity.setUserId(userId);

            var entities = todoService.create(entity);

            var dtos = entities.stream().map(TodoDTO::new)
                    .collect(Collectors.toList());

            var response = ResponseDTO.<TodoDTO>builder()
                    .data(dtos)
                    .build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            var response = ResponseDTO.<TodoDTO>builder()
                    .error(e.getMessage())
                    .build();

            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping
    public ResponseEntity<?> retrieveTodoList() {
        String userId = "temp-user";

        var entities = todoService.retrieve(userId);

        var dtos = entities.stream().map(TodoDTO::new)
                .collect(Collectors.toList());

        var response = ResponseDTO.<TodoDTO>builder()
                .data(dtos)
                .build();

        return ResponseEntity.ok().body(response);
    }

    @PutMapping
    public ResponseEntity<?> updateTodo(@RequestBody TodoDTO dto) {

        try {
            String userId = "temp-user";

            var entity = TodoDTO.toEntity(dto);

            entity.setUserId(userId);

            var entities = todoService.update(entity);
            var dtos = entities.stream().map(TodoDTO::new)
                    .collect(Collectors.toList());

            var response = ResponseDTO.<TodoDTO>builder()
                    .data(dtos)
                    .build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            var response = ResponseDTO.<TodoDTO>builder()
                    .error(e.getMessage())
                    .build();

            return ResponseEntity.badRequest().body(response);
        }
    }

    @DeleteMapping
    public ResponseEntity<?> deleteTodo(@RequestBody TodoDTO dto) {
        try {
            String userId = "temp-user";

            var entity = TodoDTO.toEntity(dto);
            entity.setUserId(userId);

            var entities = todoService.delete(entity);
            var dtos = entities.stream().map(TodoDTO::new)
                    .collect(Collectors.toList());

            var response = ResponseDTO.<TodoDTO>builder()
                    .data(dtos)
                    .build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            var response = ResponseDTO.<TodoDTO>builder()
                    .error(e.getMessage())
                    .build();

            return ResponseEntity.badRequest().body(response);
        }
    }
}
