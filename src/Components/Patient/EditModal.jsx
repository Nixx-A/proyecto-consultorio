import { useState } from 'react'
import Modal from '../Modal'

const EditModal = ({ isOpen, onClose, handleSubmit, initialValue }) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} styles={'w-3/4 h-[25%] rounded-md shadow-2xl md:w-1/3 modal-dialog'}>
      <h2 className='text-center pb-2'>Editar Paciente</h2>
      <form onSubmit={handleSubmit} className='flex justify-center'>
        <input
          className='border border-black p-1 rounded'
          value={value}
          onChange={handleChange}
          name='query'
          type='text'
          placeholder='Juan Castro'
        />
      </form>
      <div className='flex justify-center mt-2'>
        <button
          onClick={onClose}
          className='bg-black text-white rounded px-2 py-1 hover:bg-gray-600 duration-150'
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}

export default EditModal
