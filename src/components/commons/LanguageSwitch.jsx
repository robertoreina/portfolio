import { React, useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'
import './LanguageSwitch.css'

const LanguageSwitch = () => {
  const { handleLanguage, language } = useContext(LanguageContext);

  return (
    <div className="switch-toggle">
      <input type="checkbox" id='language' name='language' onChange={handleLanguage} checked={language === 'es' ? true : false}></input>
      <label htmlFor='language'></label>
    </div>
  )
}

export default LanguageSwitch