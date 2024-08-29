import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Header from './components/Header'
import Landing from './components/Landing'
function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Landing/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/signin' element={<Signin/>}  />
        <Route path='/signup' element={<Signup/>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
