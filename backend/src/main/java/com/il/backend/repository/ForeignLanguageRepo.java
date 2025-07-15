package com.il.backend.repository;

import com.il.backend.model.ForeignLanguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForeignLanguageRepo extends JpaRepository<ForeignLanguage, Integer> {
    // Define any additional query methods if needed
}
