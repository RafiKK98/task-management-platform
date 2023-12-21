import Footer from "./Footer"
import Navbar from "./Navbar"

const HomeError = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-5xl font-semibold">Page coming soon!</h1>
            </div>
            <Footer/>
        </main>
    )
}

export default HomeError