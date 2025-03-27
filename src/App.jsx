import { useState } from 'react'
import { useGetFact } from './hooks/factRandomCat'
import { useGetImgRandomCat } from './hooks/imgRandomCat'

export const App = () => {
  const { randomFact, getFact, handleForm } = useGetFact()
  const { imgCat, isLoadingCat } = useGetImgRandomCat({ randomFact })
  const [inputValue, setInputValue] = useState('')

  /*   function handleForm () {

  }
 */
  return (
    <main className='flex flex-col gap-y-4 justify-center items-center h-[100vh] bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 box-border'>
      <header className='h-[20%] text-center mt-6 '>
        <h1 className='font-comic text-white font-semibold text-[40px] '>MichiApp 🐱</h1>
        <button
          className='p-[5px] font-semibold rounded-md mt-6 mb-6 bg-gradient-to-r text-white from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'
          onClick={getFact}
        >
          {isLoadingCat ? 'Espere...' : 'Random cat'}
        </button>
        <form onSubmit={(e) => { e.preventDefault(); handleForm({ inputValue, setInputValue }) }} className='flex flex-col justify-center items-center md:flex-row '>
          <input required value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='sm:w-[550px] p-[5px] text-center mb-3 md:mb-0 md:mr-3 rounded-sm focus:outline-none shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type='text' placeholder='Como te sientes?' />
          <button type='submit' className='p-[5px] w-auto font-semibold rounded-md bg-gradient-to-r text-white from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'>Buscar Gato</button>
        </form>
      </header>
      {
        isLoadingCat
          ? <h2 className='font-comic text-white font-semibold text-[40px] h-[90%] flex place-items-center'>Cargando su gato...</h2>
          : <section className='flex flex-col justify-center items-center w-[100%] h-[70%] '>
            <img className='w-[80%] h-[300px] md:h-[400px] sm:w-[600px] ' src={imgCat} alt='Imagen aleatoria de un gato' />
            <p className='text-[15px] md:text-[20px] mt-[25px] w-[80%] text-white text-center'>{randomFact}</p>
          </section>
      }

      <footer className='h-[10%] w-[100%] text-center bg-black text-white text-[20px] font-semibold place-content-center'>Developed by Fernan-Dev</footer>

    </main>
  )
}
