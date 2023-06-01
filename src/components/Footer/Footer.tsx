import HelpSupport from "./HelpSupport"
import Logo from "./Logo"
import NewLetter from "./NewLetter"
import TryFree from "./TryFree"

const Footer = () => {
  return (
    <div className="bg-black">
    <footer className="bg-black md:py-10 md:px-52 p-4 grid md:grid-cols-4 grid-cols-1 gap-12">
        <Logo/>
        <NewLetter/>
        <HelpSupport/>
        <TryFree/>

    </footer>
    <p className="text-gray-600 text-center pt-5 pb-10 bg-black">copyright</p>
    </div>
  )
}

export default Footer
