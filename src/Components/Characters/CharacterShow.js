import React from 'react'
import { useParams } from 'react-router-dom'

import { getSingleCharacter } from '../../lib/api'

function CharacterShow() {
  const { characterId } = useParams()
  const [character, setCharacter] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !character && !isError
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleCharacter(characterId)
        setCharacter(res.data)
      } catch (error) {
        setIsError(true)
      }
      
    }  
    getData()
  }, [characterId])

  return (
    <section className="section">
      <div className='container'>
        {isLoading && <p>...loading</p>}
        {isError && <p>oh No something went wrong</p>}
        {character && (
          <div>
            <div className='bigD'>
              <h1 className="characterName">
                {character.name}
              </h1>
            </div>
            <div className='flex'>
              <div className=''>
                <figure>
                  <img src={character.images.md} alt={character.name} />
                </figure>
              </div>
              <div className='text'>

                <h4 className="subheaders">
                  <strong>About</strong>
                </h4>
                <p className='para'>{character.biography.publisher}</p>
                <p className='para'>Intentions: {character.biography.alignment}</p>
                <p className='para'>Real name: {character.biography.fullName}</p>
                <p className='para'>Other names: {character.biography.aliases}</p>
                <p className='para'>First appearance: {character.biography.firstAppearance}</p>
                <div className=''>
                  <h4 className='subheaders'>
                    <strong>Affiliations</strong>
                  </h4>
                  <p className='para'>{character.connections.groupAffiliation}</p>
                </div>
              </div>
            </div>
          </div>
        
        )
        }
      </div>
    </section>

  )
}

export default CharacterShow