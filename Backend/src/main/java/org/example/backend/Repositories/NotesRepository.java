package org.example.backend.Repositories;

import org.example.backend.Entities.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotesRepository extends JpaRepository<Notes, Long> {
    List<Notes> findByStudentId(Long studentId);
}