import Tooth from './Tooth'

export default function Teeth ({ setFormData }) {
  const handleTeethData = (teethNumber, isSelected) => {
    if (setFormData === null) return
    setFormData((prevFormData) => ({
      ...prevFormData,
      teethData: {
        ...prevFormData.teethData,
        [teethNumber]: isSelected
      }
    }))
  }

  return (
    <>
      <div className='flex justify-center w-full bg-[aliceblue] gap-2 flex-row flex-wrap py-2'>
        <Tooth number={18} setTeethData={handleTeethData} />
        <Tooth number={17} setTeethData={handleTeethData} />
        <Tooth number={16} setTeethData={handleTeethData} />
        <Tooth number={15} setTeethData={handleTeethData} />
        <Tooth number={14} setTeethData={handleTeethData} />
        <Tooth number={13} setTeethData={handleTeethData} />
        <Tooth number={12} setTeethData={handleTeethData} />
        <Tooth number={11} setTeethData={handleTeethData} />
        <Tooth number={21} setTeethData={handleTeethData} />
        <Tooth number={22} setTeethData={handleTeethData} />
        <Tooth number={23} setTeethData={handleTeethData} />
        <Tooth number={24} setTeethData={handleTeethData} />
        <Tooth number={25} setTeethData={handleTeethData} />
        <Tooth number={26} setTeethData={handleTeethData} />
        <Tooth number={27} setTeethData={handleTeethData} />
        <Tooth number={28} setTeethData={handleTeethData} />
      </div>
      <div className='flex justify-center w-full bg-[aliceblue] gap-2 flex-row-reverse flex-wrap py-2'>
        <Tooth number={48} setTeethData={handleTeethData} />
        <Tooth number={47} setTeethData={handleTeethData} />
        <Tooth number={46} setTeethData={handleTeethData} />
        <Tooth number={45} setTeethData={handleTeethData} />
        <Tooth number={44} setTeethData={handleTeethData} />
        <Tooth number={43} setTeethData={handleTeethData} />
        <Tooth number={42} setTeethData={handleTeethData} />
        <Tooth number={41} setTeethData={handleTeethData} />
        <Tooth number={31} setTeethData={handleTeethData} />
        <Tooth number={32} setTeethData={handleTeethData} />
        <Tooth number={33} setTeethData={handleTeethData} />
        <Tooth number={34} setTeethData={handleTeethData} />
        <Tooth number={35} setTeethData={handleTeethData} />
        <Tooth number={36} setTeethData={handleTeethData} />
        <Tooth number={37} setTeethData={handleTeethData} />
        <Tooth number={38} setTeethData={handleTeethData} />
      </div>

      <div className='mt-6 flex justify-center w-full items-center bg-[aliceblue] gap-2 flex-row py-2'>
        <p>Derecha</p>
        <div>
          <div className='flex gap-2'>
            <Tooth number={55} setTeethData={handleTeethData} />
            <Tooth number={54} setTeethData={handleTeethData} />
            <Tooth number={53} setTeethData={handleTeethData} />
            <Tooth number={52} setTeethData={handleTeethData} />
            <Tooth number={51} setTeethData={handleTeethData} />
            <Tooth number={61} setTeethData={handleTeethData} />
            <Tooth number={62} setTeethData={handleTeethData} />
            <Tooth number={63} setTeethData={handleTeethData} />
            <Tooth number={64} setTeethData={handleTeethData} />
            <Tooth number={65} setTeethData={handleTeethData} />
          </div>
          <div className='flex gap-2'>
            <Tooth number={85} setTeethData={handleTeethData} />
            <Tooth number={84} setTeethData={handleTeethData} />
            <Tooth number={83} setTeethData={handleTeethData} />
            <Tooth number={82} setTeethData={handleTeethData} />
            <Tooth number={81} setTeethData={handleTeethData} />
            <Tooth number={71} setTeethData={handleTeethData} />
            <Tooth number={72} setTeethData={handleTeethData} />
            <Tooth number={73} setTeethData={handleTeethData} />
            <Tooth number={74} setTeethData={handleTeethData} />
            <Tooth number={75} setTeethData={handleTeethData} />
          </div>
        </div>
        <p>Izquierda</p>
      </div>
    </>
  )
}
