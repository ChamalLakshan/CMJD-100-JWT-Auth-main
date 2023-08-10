package com.example.jwt.payloads.requests.responses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MessageResponse {
    private String message;
   public MessageResponse (String message){
    this.message=message;
   }
   
}
