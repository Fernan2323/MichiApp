/* const CAT_FACT_RANDOM = 'https://catfact.ninja/fact'

const factRandomHandler = async () => {
  const res = await fetch(CAT_FACT_RANDOM)
  const data = await res.json()
  const { fact } = data
  const firstTreeFact = fact.split(' ', 3).join()
  return { factRandom: fact, treeFact: firstTreeFact }
}

export async function catRandomHandler () {
  const dataTreeFact = await factRandomHandler()
  const { treeFact, factRandom } = dataTreeFact
  const response = await fetch(`https://cataas.com/cat/says/${treeFact}?fontSize=50&fontColor=red&json=true`)
  const data = await response.json()

  return { img: data, fact: factRandom }
}
 */
