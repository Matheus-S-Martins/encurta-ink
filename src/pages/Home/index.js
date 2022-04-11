import {FiLink} from 'react-icons/fi';
import './style.css';

import Menu from '../../components/Menu';

export default function Home() {
    return (
      <div className="container_home">
        <Menu/>
        <div className="logo">
            <img src="/logo.png" alt="Sujeito Link Logo" />
            <h1>Encurta Link</h1>
            <span>Cole seu link para encurtar  👇 </span>
        </div>

        <div className="area_input">
            <div>
                <FiLink size={24} color="#fff"/>
                <input placeholder='Cole seu link aqui...'/>
            </div>

            <button>Encurtar Link</button>
        </div>

        
      </div>
    );
  }