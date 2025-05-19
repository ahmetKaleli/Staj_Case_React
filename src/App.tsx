import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RouterConfig from './routes/RouterConfig'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [searchTerm, setSearchTerm] = useState<string>("")

  return (
    <div className=' min-h-screen bg-gray-200'>
      <ToastContainer/>
      <Header onSearch={setSearchTerm}/>
      <RouterConfig searchTerm = {searchTerm}/>
    </div>
  )
}

export default App
