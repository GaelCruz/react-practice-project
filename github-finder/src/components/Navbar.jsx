import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    <nav className='nb-header'>
        <div className='container-nb'>
          <div className='github-logo'>
            <FaGithub />
          </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes ={
    title: PropTypes.string,
}

export default Navbar