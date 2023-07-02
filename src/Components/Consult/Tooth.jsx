import { useState } from 'react'

export default function Tooth ({ number, setTeethData }) {
  const [isSelected, setIsSelected] = useState(false)

  const handleToothClick = () => {
    setIsSelected(!isSelected)
    setTeethData(number, !isSelected)
  }

  return (
    <div className=''>
      <p className='text-center'>{number}</p>
      <div
        className={`flex justify-center items-center w-6 h-6 lg:w-10 lg:h-10 bg-white border-2 border-black overflow-hidden z-50 ${isSelected ? 'bg-blue-700' : ''
          }`}
        onClick={handleToothClick}>
        <div className='h-12 lg:h-16 rotate-45 w-0.5 bg-black relative left-1.5' />
        <div className='h-12 lg:h-16 -rotate-45 w-0.5 bg-black relative left-1.5' />
        <div className='w-3 h-3 lg:w-4 lg:h-4 border-black border-2 bg-white z-20 relative right-0.5'></div>
      </div>
    </div>
  )
}
