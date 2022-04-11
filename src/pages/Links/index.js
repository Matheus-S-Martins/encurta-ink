import './style.css';
import {FiArrowLeft,FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom';
export default function Links() {
    return (
      <div className='links_container'>

        <div className="links_header"> 
          <Link to="/">
            <FiArrowLeft size={38} color="#fff"/>
          </Link>
          
          <h1>Meus Links</h1>
        </div>

        <div className='links_item'>

          <button className='link'>
            <FiLink size={18} color="#FFF" />
            http
          </button>

          <button className='link_delete'>
            <FiTrash size={24} color="#FF5454" />
          </button>

        </div>

      </div>
    );
  }