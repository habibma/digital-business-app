
import './App.scss'

import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

import ThemeSetter from "./components/ThemeSetter";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className='container myClass'>
        <ThemeSetter />
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
