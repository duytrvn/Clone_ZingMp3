
import {Routes , Route} from 'react-router-dom'
import UserLayout from './layout/User/UserLayout'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <Routes>
        <Route path='/' element={<UserLayout/>}>

        </Route>
    </Routes>
  )
}

export default App
