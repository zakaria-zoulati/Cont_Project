import React, { useState } from 'react';

export default function AddStudent() {
  let [name, setName] = useState(""); 

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add student. Please try again.");
      }
      
      setName(""); 
      alert("Student added successfully!");
    } catch (error) {
      
    } finally {
      window.location.reload() ; 
    }
  };

  let handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className='flex m-4 flex-row text-2xl'>
      <form className="space-x-4 bg-white p-4 rounded-lg shadow-md border-black border p-5">
        <input 
          type='text' 
          name="student" 
          value={name}
          onChange={handleChange}
          placeholder='Student Name'
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button  
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type='submit' 
          onClick={handleSubmit}
        >
          Add Student
        </button>
      </form>

    </div>
  );
}
