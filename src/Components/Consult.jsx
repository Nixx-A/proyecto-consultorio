import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import EditConsultModal from './EditConsultModal'

export default function Consult ({ listOfConsults, onDeleteConsult }) {
  const [editingConsult, setEditingConsult] = useState(null)
  const [openEditModal, setOpenEditModal] = useState(false)
  const handleEdit = consult => {
    setEditingConsult(consult)
    setOpenEditModal(true)
  }

  const caca = () => console.log(editingConsult)
  return (
    <>
      <div className='flex justify-between mx-4 py-1'>
        <p>Consultas</p>
        <p>Fechas</p>
      </div>
      {listOfConsults.map(consult => {
        return (
          <li
            key={consult.id}
            className='flex justify-between  h-12 duration-100 items-center m-2 border-slate-600 border rounded p-2'>
            <p
              className='cursor-pointer hover:text-gray-500'
              onClick={() => handleEdit(consult)}>
              {consult.consultName}
            </p>
            <button onClick={caca}>asd</button>
            <div className='flex gap-2'>
              <button
                onClick={() => onDeleteConsult(consult.id)}
                className='delete-button'>
                <MdDelete className='h-5 w-5' />
              </button>{' '}
              <p>{consult.date}</p>
            </div>
          </li>
        )
      })}
      <EditConsultModal
        setOpenEditModal={setOpenEditModal}
        openEditModal={openEditModal}
        editingConsult={editingConsult}
        setEditingConsult={setEditingConsult}
      />
    </>
  )
}