import Header from '../src/components/header.jsx'
import Hero from '../src/components/Hero.jsx'
import About from '../src/components/About.jsx'
import Setup from '../src/components/Setup.jsx'
import CustomCursor from '../src/components/Cursor.jsx'
import PizzaSection from '../src/components/PizzaSection.jsx'
import Loader from '../src/components/Loader.jsx'
import './App.css'


function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Setup />
      <CustomCursor />
      <PizzaSection />
      <Loader />
    </>
  )
}

export default App
