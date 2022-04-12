import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Error from './pages/Error';
import Skills from './skills/Skills';
import About from './about/About';
import Projects from './projects/Projects';
import Hero from './hero/Hero';
import Contact from './contact/Contact';
import '../styles/App.css';
import { LanguageProvider } from '../context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/' element={<Error />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
