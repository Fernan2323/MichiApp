import { useEffect, useState } from 'react'

export function useGetImgRandomCat ({ randomFact }) {
  const [imgCat, setImgCat] = useState()
  const [isLoadingCat, setIsLoadingCat] = useState(true) // Estado de carga
  const [error, setError] = useState(null) // Estado de carga

  useEffect(() => {
    setIsLoadingCat(true)
    if (!randomFact) return
    const firstTreeFact = randomFact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstTreeFact}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImgCat(url)
      })
      .catch(error => setError(error))
      .finally(
        setTimeout(() => {
          setIsLoadingCat(false)
        }, 2000))
  }, [randomFact])

  return { imgCat, isLoadingCat }
}
