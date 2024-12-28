import React from 'react'
import AddNote from './AddNote'


export default function Notes(props) {

  console.log( props.notes )

  return (
    <div className="relative overflow-x-auto m-3" >
        <AddNote id={props.id} />
        <h1 className=" text-4xl text-center m-4" > Notes de {props.name} </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white text-xl">
        <thead className="text-xl text-gray-800 uppercase bg-black-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Matiere Name
            </th>
            <th scope="col" className="px-6 py-3">
              Note de la matiere
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
             props.notes.map((ele) => {
              let backgroundColor = '';
              if (ele.note >= 10) {
                backgroundColor = 'bg-green-500'; 
              } else {
                backgroundColor = 'bg-red-500'; 
              }

              return (
                <tr className={`border-b dark:border-black-700 clickable ${backgroundColor}`} key={ele.matiere} >
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {ele.matiere}
                  </th>
                  <td className="px-6 py-4">
                    {ele.note}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

    </div>
  )
}
