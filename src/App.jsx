import { useState } from 'react'
import { useGetFact } from './hooks/factRandomCat'
import { useGetImgRandomCat } from './hooks/imgRandomCat'

export const App = () => {
  const { randomFact, getFact, handleForm } = useGetFact()
  const { imgCat, isLoadingCat } = useGetImgRandomCat({ randomFact })
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleForm({ inputValue })
    setInputValue('')
  }

  return (
    <main className='grid grid-rows-[auto,1fr,auto]  min-h-screen bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 p-4'>
      {/* Header */}
      <header className='flex flex-col items-center text-center'>
        <h1 className='font-comic text-white font-semibold text-3xl sm:text-4xl'>MichiApp 🐱</h1>

        <button
          className='px-4 py-2 font-semibold rounded-md mt-4 bg-gradient-to-r text-white from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-300'
          onClick={getFact}
        >
          {isLoadingCat ? 'Espere...' : 'Random cat'}
        </button>

        <form onSubmit={handleSubmit} className='grid gap-3 sm:flex sm:items-center mt-4'>
          <input
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='w-full sm:w-[550px] p-2 text-center rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            type='text'
            placeholder='¿Cómo te sientes?'
          />
          <button
            type='submit'
            className='px-4 py-2 font-semibold rounded-md bg-gradient-to-r text-white from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-300'
          >
            Buscar Gato
          </button>
        </form>
      </header>

      {/* Contenido principal */}
      <section className='grid place-items-center h-full'>
        {isLoadingCat
          ? (
            <h2 className='font-comic text-white font-semibold text-2xl sm:text-3xl'>
              Cargando su gato... 🐈
            </h2>
            )
          : (
            <div className='grid gap-4 justify-items-center'>
              <img
                className='w-[80%] sm:w-[600px] max-w-full h-[300px] sm:h-[400px] rounded-lg shadow-lg'
                src={imgCat}
                alt='Imagen aleatoria de un gato'
              />
              <p className='text-sm sm:text-lg text-white text-center w-[80%]'>
                {randomFact}
              </p>
            </div>
            )}
      </section>

      {/* Footer corregido */}
      <footer className='w-full text-center bg-neutral-900 text-white text-lg font-semibold py-4 mt-auto'>
        Developed by Fernan-Dev
      </footer>
    </main>

  )
}
