import Navbar  from './components/navbar/Navbar';
import Intro  from './components/intro/Intro';
import Portfolio  from './components/portfolio/Portfolio';
import Courses  from './components/courses/Courses';
import Contact  from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Menu from './components/menu/Menu';

import './app.scss'
import { useState } from 'react';

function App() {
    const [menuOpen, setmenuOpen] = useState(false)
    return (
        <div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setmenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setmenuOpen}/>
            <div className="sections">
                <Intro />
                <Portfolio />
                <Courses />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}

export default App;