import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { Link } from "react-router"
// import logo from "../assets/mechanic.gif"
import ThemeContext from "../Context/ThemeProvider"
import { useContext } from "react"
function Footer() {
  const {theme}= useContext(ThemeContext)
  return (
    <div className="mt-10">
 {/* <footer className="footer container mx-auto text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Repair Home</a>
    <a className="link link-hover">Rebuild Home</a>
    <a className="link link-hover">One Time service</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <h1 className="">01761632036</h1>
    <h1 className="">JuwelRana3426@gmail.com</h1>
    <h1 className="">Level-6, 38, Awal Centre, Banan</h1>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> */}
<footer className="footer container mx-auto text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
    <img className="w-16 " src={"https://cdn-icons-png.flaticon.com/128/4245/4245736.png"} alt=""  />
    <p >
      <span className=" logo text-blue-500/75 font-bold font-berkshire text-xl md:text-2xl "> TaskNest</span> 
      <br />
      From 2021
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <Link to='https://www.facebook.com/juwel34/' target="_blank">
        <FaFacebook className={` hover:scale-125 transition-all text-3xl text-blue-600  ${theme ==="dark" && "text-gray-300"} `}/>
      </Link>
      <Link to= "https://www.linkedin.com/in/md-juwel-rana-14b563204/" target="_blank">
      <FaLinkedin className={` hover:scale-125 transition-all text-3xl text-blue-800 ${theme ==="dark" && "text-gray-300"}  `}/>
      </Link>
      <Link to="https://github.com/JuwelRana34" target="_blank">
        <IoLogoGithub className={` hover:scale-125 transition-all text-3xl text-gray-300 ${theme !== "dark" && "text-gray-900"}   `}/>
      </Link>
    </div>
  </nav>
</footer>

<footer className="footer border-t container mx-auto footer-center  text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by TaskNest Ltd.</p>
  </aside>
</footer>
    </div>
    
   
  )
}

export default Footer