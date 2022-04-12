
import React, {useContext} from 'react'
import LanguageContext from '../../context/LanguageContext'


const ContactList = ({ contact }) => {
    const {language } = useContext(LanguageContext);

    return (
        <div className="contact-item">
            <div className="icon"><img src={contact.photo} alt={contact.name[language]} /></div>
            <div className="contact-info">
                <h1>{contact.name[language]}</h1>
                <h2>{contact.description}</h2>
            </div>
        </div>
    )
}

export default ContactList