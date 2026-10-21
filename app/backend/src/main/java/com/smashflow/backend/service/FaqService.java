package com.smashflow.backend.service;

import com.smashflow.backend.model.Faq;
import java.util.List;

public interface FaqService {
    Faq createFaq(Faq faq);
    List<Faq> getAllFaqs();
    Faq getFaqById(Long id);
    Faq updateFaq(Long id, Faq faqDetails);
    void deleteFaq(Long id);
    String getChatbotAnswer(String message);
}