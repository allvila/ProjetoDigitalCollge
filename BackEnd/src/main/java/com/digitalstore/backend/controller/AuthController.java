package com.digitalstore.backend.controller;

import com.digitalstore.backend.payload.JwtResponse;
import com.digitalstore.backend.payload.LoginRequest;
import com.digitalstore.backend.payload.SignUpRequest;
import com.digitalstore.backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    // --- NOVO MÉTODO DE LOGIN ---
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        String jwt = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok(new JwtResponse(jwt, "Bearer"));
    }
    // ----------------------------

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        try {
            authService.registerUser(signUpRequest);
            return ResponseEntity.ok("Usuário registrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                .badRequest()
                .body(e.getMessage());
        }
    }
}