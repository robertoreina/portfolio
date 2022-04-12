import {useState, createContext}  from 'react'

const LanguageContext = createContext();

const initialLanguage = 'es';

const LanguageProvider = ({children}) =>{
    const [language, setLanguage] = useState(initialLanguage)
    const [text, setText] = useState(null)

    const handleLanguage = (e) =>{
        if (e.target.checked) {
            setLanguage('es')
        } else {
            setLanguage('en')
        }
    }

    const data = {text, handleLanguage, language}

    return  <LanguageContext.Provider value={data}> {children}</LanguageContext.Provider>
}

export {LanguageProvider};
export default LanguageContext;