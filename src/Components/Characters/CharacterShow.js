import React from 'react'
import { useParams } from 'react-router-dom'

import { getSingleCharacter } from '../../lib/api'

function CharacterShow() {
  const { characterId } = useParams()
  const [Character, setCharacter] = React.useState(null)



  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleCharacter(characterId)
      setCharacter(res.data)
    }  
    getData()
  }, [characterId])

  

  return (
    <section className="section is-centered">
      <div className="container is-centered">
        {Character ? (
          <div>
            <div className='column'>
              <h2 className="title has-text-centered">
                {Character.name}
              </h2>
            </div>
            <div className='columns is-vcentered'>
              <div className='columns is-8'>
                <figure>
                  <img src={Character.images.md} alt={Character.name} />
                </figure>
              </div>
              <div className='column'>
                <div className="column is-half">
                  <h4 className="title is-4">
                  About
                  </h4>
                  <p></p>
                  <p>{Character.biography.publisher}</p>
                  <p>Intentions: {Character.biography.alignment}</p>
                  <p>Real name: {Character.biography.fullName}</p>
                  <p>Other names: {Character.biography.aliases}</p>
                  <p>First appearance: {Character.biography.firstAppearance}</p>
                </div>
                <div className='column is-half'>
                  <h4 className='title is-4'>
                Affiliations
                  </h4>
                  <p>{Character.connections.groupAffiliation}</p>
                </div>
              </div>
            </div>
          </div>
        )
          : 
          <p>...loading</p>
        }
      </div>
    </section>

  )
}

export default CharacterShow