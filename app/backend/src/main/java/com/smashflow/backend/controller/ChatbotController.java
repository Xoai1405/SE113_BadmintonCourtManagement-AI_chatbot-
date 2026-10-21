package com.smashflow.backend.controller;

import com.smashflow.backend.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/chatbot")
@CrossOrigin(origins = "*")
public class ChatbotController {

    @Autowired
    private FaqService faqService;

    @PostMapping("/ask")
    public ResponseEntity<Map<String, String>> askChatbot(@RequestBody Map<String, String> request) {
        String message = request.getOrDefault("message", "");
        String answer = faqService.getChatbotAnswer(message);

        Map<String, String> response = new HashMap<>();
        response.put("answer", answer);

        return ResponseEntity.ok(response);
    }
}