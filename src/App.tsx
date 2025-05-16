import './App.css'
import Header from './components/Header'
import RouterConfig from './routes/RouterConfig'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <RouterConfig/>
    </div>
  )
}

export default App
