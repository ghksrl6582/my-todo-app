package com.example.mytodoapp.controller;

import com.example.mytodoapp.dto.ResponseDTO;
import com.example.mytodoapp.dto.UserDTO;
import com.example.mytodoapp.model.UserEntity;
import com.example.mytodoapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            var user = UserEntity.builder()
                    .email(userDTO.getEmail())
                    .userName(userDTO.getUserName())
                    .password(userDTO.getPassword())
                    .build();

            var registeredUser = userService.create(user);
            var responseUserDTO = UserDTO.builder()
                    .email(registeredUser.getEmail())
                    .id(registeredUser.getId())
                    .userName(registeredUser.getUserName())
                    .build();

            return ResponseEntity.ok().body(responseUserDTO);
        } catch (Exception e) {
            var response = ResponseDTO.builder()
                    .error(e.getMessage())
                    .build();

            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO) {
        var user = userService.getByCredentials(
                userDTO.getEmail(), userDTO.getPassword());

        if (user != null) {
            final var responseUserDTO = UserDTO.builder()
                    .email(user.getEmail())
                    .id(user.getId())
                    .build();

            return ResponseEntity.ok().body(responseUserDTO);
        } else {
            var response = ResponseDTO.builder()
                    .error("Login failed")
                    .build();

            return ResponseEntity.badRequest().body(response);
        }
    }
}
