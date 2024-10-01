import { Outlet } from "react-router-dom"
import './index.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
