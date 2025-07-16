package com.il.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.il.backend.model.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
    // Define any additional query methods if needed
}
