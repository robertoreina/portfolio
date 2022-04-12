import React, {useContext} from 'react'
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import contactData from '../../data/contact';
import ContactList from './ContactList';
import LanguageContext from '../../context/LanguageContext'


function Contact() {
    const {language } = useContext(LanguageContext);

    return (
        <>
            <Header />
            <section id="contact">
                <div className="contact container">
                    <div>
                        <h1 className="section-title">{contactData.title[language]} <span>{contactData.title2[language]}</span></h1>
                    </div>
                    <div className="contact-items">
                        {contactData.item.map((contact, index) => <ContactList contact={contact} key={index} />)}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
