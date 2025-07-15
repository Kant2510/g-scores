package com.il.backend.repository;

import com.il.backend.model.Score;
import com.il.backend.model.Student;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ScoreRepo extends JpaRepository<Score, Integer> {
//    @Override
    List<Score> findByStudent_Id(@NotNull String studentId);
    // Define any additional query methods if needed
}
