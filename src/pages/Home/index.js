import {useState} from 'react';
import {FiLink} from 'react-icons/fi';
import './style.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';

export default function Home() {
    const[link, setLink] = useState('');
    const[showModal, setShowModal] = useState(false);
    const[data, setData] = useState({});

    async function handleShortLink(){

      try {
        const response = await api.post('/shorten', {
          long_url: link 
        })

        setData(response.data);
        setShowModal(true);
        setLink('');
        
      } catch {
        alert('Algo deu errado')
        setLink('');
      }
      
    }

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
                <input 
                placeholder='Cole seu link aqui...'
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
            </div>

            <button onClick={handleShortLink}>Encurtar Link</button>
        </div>

        {showModal && (
          <LinkItem
          closeModal={() => setShowModal(false)}
          content ={data}
          />
        )}
        
        
      </div>
    );
  }