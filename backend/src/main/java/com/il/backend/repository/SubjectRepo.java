package com.il.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.il.backend.model.Subject;

@Repository
public interface SubjectRepo extends JpaRepository<Subject, Integer> {
    // Define any additional query methods if needed
}
