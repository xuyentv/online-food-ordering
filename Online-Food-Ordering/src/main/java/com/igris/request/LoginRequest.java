package com.igris.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
