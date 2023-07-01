/* eslint-disable multiline-ternary */
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { deletePatient, updatePatient } from '../firebase'
import { useAuth } from '../Context/authContext'
import { useState } from 'react'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

export function Patient ({ name, id }) {
  const { user } = useAuth()
  if (!name | !id) return
  // eslint-disable-next-line no-unused-vars

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const closeDeleteModal = () => setDeleteModalOpen(false)

  const handleDelete = async () => {
    deletePatient(user.email, id)
    setDeleteModalOpen(false)
  }

  const [editModalOpen, setEditModalOpen] = useState(false)
  const openEditModal = () => {
    setEditModalOpen(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const query = new FormData(e.target).get('query')
    setEditModalOpen(false)
    updatePatient(user.email, id, { fullName: query })
    e.target.reset()
  }

  return (
    <li className='flex justify-between  h-12 duration-100 items-center m-2 border-slate-600 border rounded p-2'>
      <Link className=' hover:text-gray-500 overflow-hidden' to={id}>
        {name}
      </Link>
      <div className='flex items-center gap-1'>
        <AiFillEdit
          onClick={openEditModal}
          className='cursor-pointer hover:text-gray-500 duration-100'
        />
        <AiFillDelete
          onClick={setDeleteModalOpen}
          className='cursor-pointer hover:text-gray-500 duration-100'
        />
      </div>

      <DeleteModal isOpen={deleteModalOpen} onClose={closeDeleteModal} handleDelete={handleDelete} />

      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        handleSubmit={handleSubmit}
        initialValue={name}
      />
    </li>
  )
}
