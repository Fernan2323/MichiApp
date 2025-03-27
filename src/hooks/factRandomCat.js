import { useEffect, useState } from 'react'

const CAT_FACT_RANDOM = 'https://catfact.ninja/fact'

export function useGetFact () {
  const [randomFact, setRandomFact] = useState('')
  const [error, setError] = useState(null)

  function getFact () {
    fetch(CAT_FACT_RANDOM)
      .then(res => res.json())
      .then(data => {
        setRandomFact(data?.fact)
      })
      .catch(error => setError(error))
  }

  function handleForm ({ inputValue }) {
    setRandomFact(inputValue)
  }

  useEffect(getFact, [])

  return { randomFact, getFact, handleForm }
}
