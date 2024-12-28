import Table from './components/Table';
import Header from './components/Header';
import Notes from './components/Notes';
import { useState, useEffect } from 'react';

function App() {
  // Shared States In The ( First Page )
  let [students, setStudents] = useState([]);
  let [mode, setMode] = useState(true); // Toggle between students list and notes mode
  let [currId, setCurrId] = useState(-1);   // Current student ID for notes Page
  let [currName, setCurrName] = useState(-1);   // Current student Name for The Notes Page

  // State of the List Of Notes ( Te second Page ) 
  let [notes , setNotes] = useState( [] ) ; 

useEffect(() => {
  const fetchNotes = async () => {
    try {
      if (!currId || currId === -1) {
        console.log("Invalid currId, skipping fetch.");
        return; 
      }
      const response = await fetch(`/api/notes/${currId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setNotes(data); 
    } catch (err) {
      console.error("Error fetching the student notes:", err);
    }
  };

  fetchNotes();
}, [currId]); 

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students');
        const data = await response.json();
        const fetchedStudents = await Promise.all(
          data.map(async (student) => {
            try {
              const notesResponse = await fetch(`/api/notes/${student.id}`);
              const notes = await notesResponse.json();

              // Calculate the moyenne (average) of the notes
              let moyenne = -1 ;
              if (notes.length > 0) {
                const validNotes = notes.map(note => note.note );
                console.log( validNotes ) ; 
                moyenne = 0 ; 
                for( let note of validNotes ){
                  moyenne += note ; 
                }

                moyenne /= notes.length ; 
              }

              return {
                id: student.id,
                name: student.name,
                date: new Date(student.dateOfCreation).toLocaleDateString(), 
                moyenne: moyenne, 
              };
            } catch (error) {
              console.error(`Error fetching notes for student ${student.id}:`, error);
              return {
                id: student.id,
                name: student.name,
                date: new Date(student.dateOfCreation).toLocaleDateString(),
                moyenne: 0, 
              };
            }
          })
        );
        setStudents(fetchedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []); 

  return (
    <>
      <Header />
      {mode ? (
        <Table students={students} setMode={setMode} setId={setCurrId} setName={setCurrName} />
      ) : (
        <Notes id={currId} name={currName} setMode={setMode} notes={notes}  />
      )}
    </>
  );
}

export default App;
