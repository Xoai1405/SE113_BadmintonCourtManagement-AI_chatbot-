package com.smashflow.backend.repository;

import com.smashflow.backend.model.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Long> {
    // Truy vấn LIKE search không phân biệt hoa thường (%keyword%)
    List<Faq> findByQuestionContainingIgnoreCase(String keyword);
}