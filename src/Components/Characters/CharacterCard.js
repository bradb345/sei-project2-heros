import { Link } from 'react-router-dom'

function CharacterCard({ name, image, id }) {
  return ( 
    <div className='column is-one-quarter-desktop is-one-third-tablet'>
      <Link to={`/characters/${id}`}>
        <div className='card'>
          <div className='card-header'>
            <h1>{name}</h1>
          </div>
        </div>
        <div className='card-image'>
          <figure className='image image-is-1by1'>
            <img src={image.lg} loading='lazy' alt={name}/>
          </figure>
        </div>
      </Link>
    </div>
  )
}

export default CharacterCard