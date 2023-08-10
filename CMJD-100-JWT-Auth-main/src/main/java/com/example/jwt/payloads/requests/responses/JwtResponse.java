package com.example.jwt.payloads.requests.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {
    private String token;
    private String email;
    private String username;
    private Long id;
    public JwtResponse(String token, String email, String username, Long id) {
        this.token = token;
        this.email = email;
        this.username = username;
        this.id = id;
    }


}
