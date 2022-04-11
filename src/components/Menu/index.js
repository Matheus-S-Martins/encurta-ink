import './style.css';

import {BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://">
                <BsYoutube color='#fff' size={24} />
            </a>
            <a className='social' href="https://">
                <BsInstagram color='#fff' size={24} />
            </a>

            <Link className='menu_item' to="Links">Meus links</Link>
        </div>
    )
}