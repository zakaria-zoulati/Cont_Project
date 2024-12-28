import React, { useState } from 'react';

export default function AddNote(props) {
  let [ note , setNote ] = useState("") ; 
  let [ matiere , setMatiere ] = useState("") ; 

  let handleSubmit = async (e) => {
    e.preventDefault() ; 
    try {
        const response = await fetch('/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            studentId : Number(props.id) ,
            matiere : matiere , 
            note : Number(note) 
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to add Note. Please try again.");
        }
  
        alert("Note added successfully!");
        setNote("") ; 
        setMatiere("") ; 
      } catch (error) {
        console.log("The Note is not successfully added")
      } finally {
        window.location.reload() ; 
      }
  }

  let handleNote = (e) => {
    setNote( e.target.value ) ; 
  }

  let handleMatiere = (e) => {
    setMatiere( e.target.value ) ; 
  }


  return (
    <div className='flex m-4 flex-row text-2xl'>
    <form className="space-x-4 bg-white p-4 rounded-lg shadow-md border-black border p-5">
    <input 
        type='text' 
        name="matiere" 
        value={matiere}
        onChange={handleMatiere}
        placeholder='Nom de la Matière'
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type='text' 
        name="note" 
        value={note}
        onChange={handleNote}
        placeholder='Student Note'
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button  
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type='submit' 
        onClick={handleSubmit}
      >
        Add Note
      </button>
    </form>

  </div>

  )
}
