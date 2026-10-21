package com.smashflow.backend.controller;

import com.smashflow.backend.model.Faq;
import com.smashflow.backend.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faqs")
@CrossOrigin(origins = "*") // Tạm thời mở CORS để frontend gọi API không bị lỗi
public class FaqController {

    @Autowired
    private FaqService faqService;

    @GetMapping
    public List<Faq> getAllFaqs() {
        return faqService.getAllFaqs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Faq> getFaqById(@PathVariable Long id) {
        return ResponseEntity.ok(faqService.getFaqById(id));
    }

    @PostMapping
    public ResponseEntity<Faq> createFaq(@RequestBody Faq faq) {
        return ResponseEntity.ok(faqService.createFaq(faq));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Faq> updateFaq(@PathVariable Long id, @RequestBody Faq faq) {
        return ResponseEntity.ok(faqService.updateFaq(id, faq));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFaq(@PathVariable Long id) {
        faqService.deleteFaq(id);
        return ResponseEntity.noContent().build();
    }
}