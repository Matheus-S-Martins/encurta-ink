import './style.css';
import {FiX, FiClipboard} from 'react-icons/fi'


export default function LinkItem({closeModal, content}){
    
    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert("URL invalida")
    }
    
    return(
        <div className='modal_container'>

            <div className='modal_header'>
                <h2>Link encrutado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000"/>
                </button>
            </div>

            <span>{content.long_url}</span>
            
            <button className='modal_link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={2} color="#000" />
            </button>

        </div>
    )
}