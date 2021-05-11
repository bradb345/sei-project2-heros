import React from 'react'
import {  Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'

import { getAllCharaters } from '../../lib/api'

function Characters() {

  // const randomIndex = Math.ceil(Math.random() * characters.length - 1)
  const [characters, setCharacters] = React.useState(null)
  const [select1, setSelect1] = React.useState('Universe')
  const [select2, setSelect2] = React.useState('Motive')
  const [input, setInput] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !characters && !isError
  
  



  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCharaters()
        
        setCharacters(res.data)
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  console.log(characters)

  const handleSelect1 = (e) => {
    setSelect1(e.target.value)
  }

  const handleSelect2 = (e) => {
    setSelect2(e.target.value)
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const filterCharacters = () => {
    return (
      characters.filter((character)=>{
        return (
          character.name.toLowerCase().includes(input) && (character.biography.publisher === select1 || select1 === 'Universe') && (character.biography.alignment === select2 || select2 === 'Motive')
        )
      })
    )
  }

  return (
    <section className='container'>
      <div className='container'>
        <div className='navbar-end'>
          <select onChange={handleSelect1} className='navbar-dropdown-end '>
            <option value='Universe'>Universe</option>
            <option value='George Lucas'>George Lucas- Lucasfilm</option>
            <option value='Marvel Comics'>Marvel Comics</option>
            <option value='DC Comics'>Dc</option>
            <option value='Shueisha'>Shueisha</option>
            <option value='Sony Pictures'>Sony Pictures</option>
            <option value='Dark Horse Comics'>Dark Horse</option>
            <option value='NBC - Heroes'>NBC- Heros</option>
            <option value='Wildstorm'>Wildstorm</option>
            <option value='Archangel'>Archangel</option>
            <option value='Tempest'>Tempest</option>
            <option value='Giant-Man'>Giant-man</option>
            <option value='Toxin'>Toxin</option>
            <option value='Angel'>Angel</option>
            <option value='Goliath'>Goliath</option>
            <option value='Oracle'>Oracle</option>
            <option value='Spoiler'>Spoiler</option>
            <option value='Nightwing'>Nightwing</option>
            <option value='Icon Comics'>Icon</option>
            <option value='SyFy'>SyFy</option>
            <option value='Meltdown'>Meltdown</option>
            <option value='Gemini V'>Gemini V</option>
            <option value='South Park'>South Park</option>
            <option value='Binary'>Binary</option>
            <option value='ABC Studios'>ABC</option>
            <option value='Universal Studios'>Universal Studios</option>
            <option value='Star Trek'>Star Trek</option>
            <option value='Evil Deadpool'>Evil Deadpool</option>
            <option value='IDW Publishing'>IDW Publishing</option>
            <option value='Deadpool'>Deadpool</option>
            <option value='Black Racer'>Black Racer</option>
            <option value='Speed Demon'>Speed Demon</option>
            <option value=''>Unknown</option>
          </select>
          
          <select onChange={handleSelect2} className='navbar-dropdown-end'>
            <option value=''>Motive</option>
            <option value='good'>Hero</option>
            <option value='bad'>Villain</option>
            <option value='neutral'>Neutral</option>
          </select>
          <input onKeyUp={handleInput} placeholder="Search..." />
          {/* <Link to={`/characters/${randomIndex}`}>
            <button  className="is-button">Random Character</button>
          </Link> */}
        </div>
        
        <div className='columns is-multiline'>
          {isError && <p>... something went wrong</p>}
          {isLoading && <p>...loading</p>}
          {characters && filterCharacters().map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.images}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Characters