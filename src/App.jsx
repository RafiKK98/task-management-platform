import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App
