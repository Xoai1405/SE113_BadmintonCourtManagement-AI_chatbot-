package com.smashflow.backend.service.impl;

import com.smashflow.backend.model.Faq;
import com.smashflow.backend.repository.FaqRepository;
import com.smashflow.backend.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqServiceImpl implements FaqService {

    @Autowired
    private FaqRepository faqRepository;

    @Override
    public Faq createFaq(Faq faq) {
        return faqRepository.save(faq);
    }

    @Override
    public List<Faq> getAllFaqs() {
        return faqRepository.findAll();
    }

    @Override
    public Faq getFaqById(Long id) {
        return faqRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("FAQ not found with id: " + id));
    }

    @Override
    public Faq updateFaq(Long id, Faq faqDetails) {
        Faq existingFaq = getFaqById(id);
        existingFaq.setQuestion(faqDetails.getQuestion());
        existingFaq.setAnswer(faqDetails.getAnswer());
        existingFaq.setCategory(faqDetails.getCategory());
        existingFaq.setUpdatedBy(faqDetails.getUpdatedBy());
        return faqRepository.save(existingFaq);
    }

    @Override
    public void deleteFaq(Long id) {
        Faq existingFaq = getFaqById(id);
        faqRepository.delete(existingFaq);
    }

    @Override
    public String getChatbotAnswer(String message) {
        // Tìm kiếm các câu hỏi chứa keyword từ tin nhắn của user
        List<Faq> matchedFaqs = faqRepository.findByQuestionContainingIgnoreCase(message);

        if (!matchedFaqs.isEmpty()) {
            return matchedFaqs.get(0).getAnswer();
        }

        return "Xin lỗi, tôi chưa hiểu ý bạn. Hệ thống chưa có dữ liệu FAQ cho câu hỏi này, bạn có thể diễn đạt lại được không?";
    }
}