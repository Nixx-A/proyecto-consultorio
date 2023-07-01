import { ColorRing, Dna } from 'react-loader-spinner'

export function DnaSpinner () {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>

      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export function RingSpinner () {
  return (
    <div className='flex w-full justify-center pt-10'>

      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  )
}
