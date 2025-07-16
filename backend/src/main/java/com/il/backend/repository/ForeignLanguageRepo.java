package com.il.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.il.backend.model.ForeignLanguage;

@Repository
public interface ForeignLanguageRepo extends JpaRepository<ForeignLanguage, Integer> {
    // Define any additional query methods if needed
}
