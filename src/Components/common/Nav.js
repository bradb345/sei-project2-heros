import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav className='navbar is-dark'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
        Home
          </Link>
          <Link to='/Characters' className='navbar-item'>
        Characters
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
