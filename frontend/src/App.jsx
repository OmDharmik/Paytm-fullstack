import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Send from './pages/Send';
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'

function App() {

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element= {<Signup />}></Route>
          <Route path='/signin' element= {<Signin />}></Route>
          <Route path='/dashboard' element= {<Dashboard />}></Route>
          <Route path='/send' element= {<Send />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
