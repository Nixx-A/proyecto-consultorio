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
  return (
    <>
      {listOfConsults.map(consult => {
        return (
          <li
            key={consult.id}
            className='flex justify-between  h-auto duration-100 items-center m-2 border-slate-600 border rounded p-2 break-before-auto'>
            <p
              className='cursor-pointer hover:text-gray-500'
              onClick={() => handleEdit(consult)}>
              {consult.consultName}
            </p>
            <div className='flex gap-2 flex-nowrap'>
              <p>{consult.date}</p>
              <button
                onClick={() => onDeleteConsult(consult.id)}
                className='delete-button'>
                <MdDelete className='h-5 w-5' />
              </button>{' '}
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
