import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-center mt-52 '>
        <div className='text-4xl text-center font-sans font-semibold mx-2'>
          Counter
        </div>
        <div className='text-5xl text-center font-semibold my-8 mx-2'>
          {count}
        </div>
      </div>
      <div className='flex flex-wrap justify-center my-8'>
        <button className='border-2
         border-black 
         ml-6 px-6 rounded-lg 
         shadow-black 
         shadow-sm 
         hover:bg-slate-100 
          transform transition-transform duration-500 hover:scale-110 ease-in-out
          'onClick={()=>setCount(count+1)} >
          Increase
        </button>
        <button className=' border-2 border-black mx-6 px-6 rounded-lg shadow-black shadow-sm hover:bg-slate-100 ease-in-out transform transition-transform duration-500 hover:scale-110 ' onClick={()=>setCount(0)}>
          Reset
        </button>
        <button className='border-2 border-black px-6 rounded-lg shadow-black shadow-sm hover:bg-slate-100 transform transition-transform duration-500 hover:scale-110 ease-in-out'onClick={()=>setCount(count-1)}>
          Decrease
        </button>
      </div>
    </>
  )
}

export default App
