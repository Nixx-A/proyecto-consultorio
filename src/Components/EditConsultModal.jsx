import { useState } from 'react'
import Modal from './Modal'
import { MdCancel, MdEdit } from 'react-icons/md'
import EditInput from './EditInput'

export default function EditConsultModal({
  openEditModal,
  setOpenEditModal,
  editingConsult
}) {
  const [formData, setFormData] = useState({})
  const [isViewMode, setisViewMode] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    setFormData(editingConsult)
    console.log(formData)
    setisViewMode(true)
  }

  const handleChange = e => {}

  return (
    <Modal
      isOpen={openEditModal}
      styles={'w-[95%] h-[95%] rounded-md shadow-2xl  modal-dialog'}>
      <button
        className='absolute top-0 left-0 m-1'
        onClick={() => setOpenEditModal(false)}>
        <MdCancel className='w-6 h-6' />
      </button>
      <form
        className='overflow-x-hidden overflow-y-scroll h-full'
        onSubmit={handleSubmit}>
        <div className='flex flex-col overflow-hidden mb-10'>
          <EditInput
            title={'Tipo de Consulta'}
            name={'consultName'}
            handleChange={handleChange}
            required={true}
            isViewMode={isViewMode}
            type={'text'}
            value={editingConsult?.consultName}
          />
        </div>
        <MdEdit
          onClick={() => setisViewMode(false)}
          className='bg-blue-500 rounded w-8 p-2 h-8 text-white hover:bg-blue-700 duration-150 cursor-pointer absolute right-10 bottom-0'
        />
      </form>
    </Modal>
  )
}
