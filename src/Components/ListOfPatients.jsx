import { Patient } from './Patient'

/* eslint-disable multiline-ternary */
export function ListOfPatients ({ patients }) {
  return (
    <>
      {Array.isArray(patients) ? (
        patients.map(patient => {
          // console.log(patient.id, patient.fullName)
          return (
            <Patient key={patient.id} id={patient.id} name={patient.fullName} />
          )
        })
      ) : (
        <p className='text-center text-xl'>Hubo un error</p>
      )}
    </>
  )
}
