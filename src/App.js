import './App.css'
import Header from './componets/Header/Header'
import Main from './componets/Main/Main'
import About from './componets/About/About'
import Examples from './componets/Examples/Examples'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Examples/>
      <About/>
    </div>
  )
}

export default App
