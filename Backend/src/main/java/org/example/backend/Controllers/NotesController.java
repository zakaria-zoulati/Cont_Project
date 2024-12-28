package org.example.backend.Controllers;

import org.example.backend.Entities.Notes;
import org.example.backend.Repositories.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*") 
public class NotesController {
    private final NotesRepository noteRepository;

    @Autowired
    public NotesController(NotesRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @PostMapping
    public void addNoteForStudent(@RequestBody Notes note) {
        noteRepository.save(note);
    }

    @GetMapping("/{studentId}")
    public List<Notes> getNotesForStudent(@PathVariable Long studentId) {
        return noteRepository.findByStudentId(studentId);
    }
}