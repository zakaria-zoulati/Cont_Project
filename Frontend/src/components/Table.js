import React from 'react'
import AddStudent from './AddStudent';

export default function Table(props) {

  function handleMode(name , id) {
    props.setId(id) ; 
    props.setName(name) ; 
    props.setMode(e => !e); 
  }

  const formatMoyenne = (moyenne) => {
    if (moyenne === -1) {
      return "_"; 
    }
    return moyenne.toFixed(2);  
  }

  return (
    <div className="relative overflow-x-auto m-3">
      <AddStudent />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white text-xl">
        <thead className="text-xl text-gray-800 uppercase bg-black-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3">
              Creation date
            </th>
            <th scope="col" className="px-6 py-3">
              Moyenne
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            props.students.map((ele) => {
              let backgroundColor = '';
              if (ele.moyenne === -1) {
                backgroundColor = 'bg-gray-500'; 
              } else if (ele.moyenne >= 10) {
                backgroundColor = 'bg-green-500'; 
              } else {
                backgroundColor = 'bg-red-500'; 
              }
              
              return (
                <tr className={`border-b dark:border-black-700 clickable ${backgroundColor}`} key={ele.name} onClick={ () => handleMode(ele.name , ele.id)  }>
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {ele.name}
                  </th>
                  <td className="px-6 py-4">
                    {ele.date}
                  </td>
                  <td className="px-6 py-4">
                    {formatMoyenne(ele.moyenne)}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
